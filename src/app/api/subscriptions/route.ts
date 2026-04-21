import { createClientWithToken } from "@/config/supabase/server-internal";

export async function GET(req: Request) {
  try {
    // Получаем и проверяем токен
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return Response.json({ error: "unauthorized header" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");
    const supabase = await createClientWithToken(token);

    // Проверяем пользователя
    // const {
    //   data: { user },
    //   error: authError,
    // } = await supabase.auth.getUser(token);

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user || !user.email) {
      return Response.json({ error: "unauthorized user" }, { status: 401 });
    }

    const customersData = await supabase
      .from("customers")
      .select("customer_id,email")
      .eq("email", user?.email)
      .single();

    const customerId = customersData?.data?.customer_id;

    if (!customerId) {
      return Response.json({ error: "Customer not found" }, { status: 404 });
    }

    const subscriptionsData = await supabase
      .from("subscriptions")
      .select(
        "subscription_id,subscription_status,price_id,product_id,scheduled_change,created_at,updated_at",
      )
      .eq("customer_id", customerId);

    if (subscriptionsData?.error) {
      return Response.json({ error: "Internal server error" }, { status: 500 });
    }

    return Response.json(subscriptionsData?.data);
  } catch (error) {
    console.error("Customer ID lookup error:", error);
    return Response.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
