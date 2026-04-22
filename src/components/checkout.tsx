"use client";

import {
  type Environments,
  initializePaddle,
  type Paddle,
} from "@paddle/paddle-js";
import type { CheckoutEventsData } from "@paddle/paddle-js/types/checkout/events";
import { useEffect, useState } from "react";

interface Props {
  userEmail?: string;
  priceId: string;
}

const Checkout = ({ userEmail, priceId }: Props) => {
  const [paddle, setPaddle] = useState<Paddle | null>(null);
  const [checkoutData, setCheckoutData] = useState<CheckoutEventsData | null>(
    null,
  );

  const handleCheckoutEvents = (event: CheckoutEventsData) => {
    setCheckoutData(event);
  };

  useEffect(() => {
    if (
      paddle ||
      !process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN ||
      !process.env.NEXT_PUBLIC_PADDLE_ENV ||
      !priceId
    ) {
      return;
    }

    initializePaddle({
      token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
      environment: process.env.NEXT_PUBLIC_PADDLE_ENV as Environments,
      eventCallback: (event) => {
        if (event.data && event.name) {
          handleCheckoutEvents(event.data);
        }
      },
      checkout: {
        settings: {
          variant: "one-page",
          displayMode: "overlay",
          theme: "light",
          allowLogout: !userEmail,
          frameTarget: "paddle-checkout-frame",
          frameStyle:
            "width: 100%; background-color: transparent; border: none",
          successUrl: "/checkout/success",
        },
      },
    }).then((paddleInstance) => {
      if (paddleInstance && priceId) {
        setPaddle(paddleInstance);
        paddleInstance.Checkout.open({
          ...(userEmail && { customer: { email: userEmail } }),
          items: [{ priceId: priceId, quantity: 1 }],
        });
      }
    });
  }, [paddle, priceId, userEmail]);

  return null;
};

export default Checkout;
