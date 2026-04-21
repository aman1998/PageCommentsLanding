import { createClientWithToken } from "@/config/supabase/server-internal";
import { createPaddlePortal } from "@/config/paddle/utils";

export async function GET(req: Request) {
  try {
    // Получаем и проверяем токен
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return Response.json({ error: "unauthorized" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");
    const supabase = await createClientWithToken(token);

    // Проверяем пользователя
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user || !user.email) {
      return Response.json({ error: "unauthorized" }, { status: 401 });
    }

    // Ищем по email пользователя
    const { data: customerData, error: customerError } = await supabase
      .from("customers")
      .select("customer_id, email")
      .eq("email", user.email)
      .maybeSingle();

    if (customerError || !customerData) {
      console.error(
        "Customer lookup error:",
        customerError?.message || "No customer found",
      );
      return Response.json(
        {
          error: "Customer not found",
          details: "No subscription data found for this email",
        },
        { status: 404 },
      );
    }

    const { data: subscriptionData, error: subscriptionError } = await supabase
      .from("subscriptions")
      .select("subscription_id")
      .eq("customer_id", customerData.customer_id)
      .single();

    if (subscriptionError || !subscriptionData) {
      console.error(
        "Subscription lookup error:",
        subscriptionError?.message || "No subscription found",
      );
      return Response.json(
        { error: "Subscription not found", details: "No subscription found" },
        { status: 404 },
      );
    }

    // const subscriptionIds = subscriptionData.subscription_id
    //   ? [subscriptionData.subscription_id]
    //   : [];

    // Создаем портал
    const portalUrl = await createPaddlePortal(customerData.customer_id, []);
    return Response.json({ url: portalUrl });
  } catch (error) {
    console.error("Portal generation error:", error);
    return Response.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
