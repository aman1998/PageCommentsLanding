import { createClient } from "@/config/supabase/server";

interface ITokenPayload {
  access_token: string;
  refresh_token: string;
}

const parseTokenPayload = async (
  req: Request,
): Promise<ITokenPayload | null> => {
  if (!req.headers.get("content-type")?.includes("application/json")) {
    return null;
  }

  const body = (await req
    .json()
    .catch(() => null)) as Partial<ITokenPayload> | null;
  if (!body?.access_token || !body.refresh_token) {
    return null;
  }

  return {
    access_token: body.access_token,
    refresh_token: body.refresh_token,
  };
};

export async function POST(req: Request) {
  const tokens = await parseTokenPayload(req);
  if (!tokens) {
    return Response.json({ error: "invalid_payload" }, { status: 400 });
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.setSession({
    access_token: tokens.access_token,
    refresh_token: tokens.refresh_token,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 401 });
  }

  if (!data.user) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  return Response.json({ user: data.user, session: data.session });
}
