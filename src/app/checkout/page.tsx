import Checkout from "@/components/checkout";

const CheckoutPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ priceId: string; email: string }>;
}) => {
  const params = await searchParams;
  return (
    <Checkout
      userEmail={params.email}
      priceId={params.priceId}
      // priceId={"pri_01kfq3agcqxkfkfav636s069kr"}
      // priceId={"pri_01kfq3czyxayvpts4k0a32jyyx"}
    />
  );
};

export default CheckoutPage;
