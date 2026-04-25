import {
  EventEntity,
  EventName,
  TransactionPaidEvent,
} from "@paddle/paddle-node-sdk";
import { createClient } from "../supabase/server-internal";
import { getPaddleInstance } from "./instance";

export class ProcessWebhook {
  async processEvent(eventData: EventEntity) {
    switch (eventData.eventType) {
      case EventName.TransactionPaid:
        await this.upsertTransactionData(eventData);
        break;
    }
  }

  private async upsertTransactionData(eventData: TransactionPaidEvent) {
    try {
      const customerId = eventData.data.customerId;
      if (!customerId) {
        throw new Error("Missing Paddle customer ID for one-time payment");
      }

      const paddle = getPaddleInstance();
      const customer = await paddle.customers.get(customerId);
      const supabase = await createClient();

      const { error } = await supabase
        .from("one_payments")
        .upsert(
          {
            transaction_id: eventData.data.id,
            email: customer.email,
            customer_id: customerId,
            status: eventData.data.status,
            price_id: eventData.data.items[0]?.price?.id ?? null,
            product_id: eventData.data.items[0]?.price?.productId ?? null,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "transaction_id" },
        )
        .select();

      if (error) throw error;
    } catch (error) {
      console.error("One-time payment upsert error:", error);
      throw error;
    }
  }
}
