import { createClient } from "@/config/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const user = await supabase.auth.getUser();
    if (user.data.user?.email) {
      const onePaymentData = await supabase
        .from("one_payments")
        .select("customer_id,email")
        .eq("email", user.data.user?.email)
        .limit(1)
        .maybeSingle();

      if (onePaymentData?.data?.customer_id) {
        return Response.json({ customerId: onePaymentData.data.customer_id });
      }

      return Response.json({ error: "Customer not found" }, { status: 404 });
    }
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
