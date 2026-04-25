import { createClient } from "@/config/supabase/server";

const EXTENSION_ORIGIN = `chrome-extension://${process.env.EXTENSION_ID}`; // chrome-extension://<your-extension-id>`

const buildCorsHeaders = (): HeadersInit => ({
  "Access-Control-Allow-Origin": EXTENSION_ORIGIN,
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  Vary: "Origin",
});

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: buildCorsHeaders(),
  });
}

export async function GET(): Promise<Response> {
  if (!EXTENSION_ORIGIN.startsWith("chrome-extension://")) {
    return Response.json(
      { error: "server_misconfigured_extension_origin" },
      { status: 500 },
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return Response.json(
      { authenticated: false },
      { status: 401, headers: buildCorsHeaders() },
    );
  }

  return Response.json(
    {
      authenticated: true,
      user: {
        id: user.id,
        email: user.email ?? null,
      },
    },
    { status: 200, headers: buildCorsHeaders() },
  );
}
