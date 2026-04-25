import { createClientWithToken } from "@/config/supabase/server-internal";

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return Response.json({ error: "unauthorized header" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");
    const supabase = await createClientWithToken(token);

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user || !user.email) {
      return Response.json({ error: "unauthorized user" }, { status: 401 });
    }

    return Response.json([]);
  } catch (error) {
    console.error("Subscriptions lookup error:", error);
    return Response.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
