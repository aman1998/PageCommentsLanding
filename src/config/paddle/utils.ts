export async function createPaddlePortal(
  customerId: string,
  subscriptionIds: string[],
): Promise<string> {
  const apiKey = process.env.PADDLE_API_KEY;
  if (!apiKey) {
    throw new Error("Paddle API key is missing");
  }

  const isSandbox =
    process.env.NEXT_PUBLIC_PADDLE_ENV === "sandbox" ||
    process.env.NODE_ENV !== "production";

  const baseUrl = isSandbox
    ? "https://sandbox-api.paddle.com"
    : "https://api.paddle.com";

  const url = `${baseUrl}/customers/${customerId}/portal-sessions`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body:
      subscriptionIds.length > 0
        ? JSON.stringify({ subscription_ids: subscriptionIds })
        : undefined,
  });

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(`Failed to create portal session: ${responseText}`);
  }

  let data: { data: { urls: { general: { overview: string } } } };
  try {
    data = JSON.parse(responseText) as typeof data;
  } catch (error) {
    throw new Error(
      `Invalid JSON response from Paddle: ${(error as Error).message}. Body: ${responseText}`,
    );
  }

  return data.data.urls.general.overview;
}
