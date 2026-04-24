import { createClientWithToken } from "@/config/supabase/server-internal";

const getBearerToken = (req: Request): string | null => {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }

  return authHeader.slice("Bearer ".length).trim();
};

export async function GET(req: Request) {
  try {
    const token = getBearerToken(req);
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

    const { data: customer, error: customerError } = await supabase
      .from("customers")
      .select("customer_id")
      .eq("email", user.email)
      .single();

    if (customerError || !customer?.customer_id) {
      return Response.json({ hasOnePayment: false });
    }

    const { data: transaction, error: transactionError } = await supabase
      .from("paddle_transactions")
      .select("transaction_id")
      .eq("customer_id", customer.customer_id)
      .limit(1)
      .maybeSingle();

    if (transactionError) {
      return Response.json({ error: "Internal server error" }, { status: 500 });
    }

    return Response.json({ hasOnePayment: Boolean(transaction) });
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
