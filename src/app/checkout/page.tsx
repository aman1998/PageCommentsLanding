import Checkout from "@/components/checkout";

const CheckoutPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ email: string }>;
}) => {
  const params = await searchParams;
  return (
    <Checkout
      userEmail={params.email}
      // priceId={"pri_01kfq3agcqxkfkfav636s069kr"}
      priceId={"pri_01kfq3czyxayvpts4k0a32jyyx"} // one-payment
    />
  );
};

export default CheckoutPage;
