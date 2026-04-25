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

    const { data: paymentData, error: paymentError } = await supabase
      .from("one_payments")
      .select("customer_id, email")
      .eq("email", user.email)
      .limit(1)
      .maybeSingle();

    if (paymentError || !paymentData?.customer_id) {
      console.error(
        "Customer lookup error:",
        paymentError?.message || "No customer found",
      );
      return Response.json(
        {
          error: "Customer not found",
          details: "No one-time payment found for this email",
        },
        { status: 404 },
      );
    }

    const portalUrl = await createPaddlePortal(paymentData.customer_id, []);
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
