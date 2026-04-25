import { createClientWithToken } from "@/config/supabase/server-internal";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("authorization");
    if (!token) {
      return Response.json({ error: "unauthorized header" }, { status: 401 });
    }

    const supabase = await createClientWithToken(token);
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user?.email) {
      return Response.json({ error: "unauthorized user" }, { status: 401 });
    }

    const { data: payment, error: paymentError } = await supabase
      .from("one_payments")
      .select("transaction_id")
      .eq("email", user.email)
      .limit(1)
      .maybeSingle();

    if (paymentError) {
      return Response.json({ error: "Internal server error" }, { status: 500 });
    }

    return Response.json({ hasOnePayment: Boolean(payment) });
  } catch (error) {
    console.error("One-time payment check error:", error);
    return Response.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
