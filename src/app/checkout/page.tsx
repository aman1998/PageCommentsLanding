import Checkout from "@/components/checkout";
import { redirect } from "next/navigation";

const CheckoutPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ email: string; priceId: string }>;
}) => {
  const params = await searchParams;
  if (!params.email || !params.priceId) {
    return redirect("/");
  }
  return (
    <Checkout
      userEmail={params.email}
      priceId={params.priceId}
      // priceId={"pri_01kfq3agcqxkfkfav636s069kr"}
      // priceId={"pri_01kfq3czyxayvpts4k0a32jyyx"} // one-payment
      // priceId={"pri_01kq1wpxz0r79dhefk80hp8xm5"} // one-payment
    />
  );
};

export default CheckoutPage;
