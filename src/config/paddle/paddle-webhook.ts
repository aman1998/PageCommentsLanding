import {
  CustomerCreatedEvent,
  CustomerUpdatedEvent,
  EventEntity,
  EventName,
  SubscriptionCanceledEvent,
  SubscriptionCreatedEvent,
  SubscriptionPastDueEvent,
  SubscriptionPausedEvent,
  SubscriptionResumedEvent,
  SubscriptionUpdatedEvent,
} from "@paddle/paddle-node-sdk";
import { createClient } from "../supabase/server-internal";

export class ProcessWebhook {
  async processEvent(eventData: EventEntity) {
    switch (eventData.eventType) {
      case EventName.SubscriptionCreated:
      case EventName.SubscriptionUpdated:
        await this.updateSubscriptionData(eventData);
        break;
      case EventName.CustomerCreated:
      case EventName.CustomerUpdated:
        await this.updateCustomerData(eventData);
        break;
      case EventName.SubscriptionPaused:
        await this.pauseSubscriptionData(eventData);
        break;
      case EventName.SubscriptionCanceled:
        await this.cancelSubscriptionData(eventData);
        break;
      case EventName.SubscriptionResumed:
        await this.resumeSubscriptionData(eventData);
        break;
      case EventName.SubscriptionPastDue:
        await this.pastDueSubscriptionData(eventData);
        break;
    }
  }

  private async updateSubscriptionData(
    eventData: SubscriptionCreatedEvent | SubscriptionUpdatedEvent,
  ) {
    try {
      const supabase = await createClient();
      const { error } = await supabase
        .from("subscriptions")
        .upsert({
          subscription_id: eventData.data.id,
          subscription_status: eventData.data.status,
          price_id: eventData.data.items[0].price?.id ?? "",
          product_id: eventData.data.items[0].price?.productId ?? "",
          scheduled_change: eventData.data.scheduledChange?.effectiveAt,
          customer_id: eventData.data.customerId,
        })
        .select();

      if (error) throw error;
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "Subscription update failed",
      };
    }
  }

  private async updateCustomerData(
    eventData: CustomerCreatedEvent | CustomerUpdatedEvent,
  ) {
    try {
      const supabase = await createClient();
      const { error } = await supabase
        .from("customers")
        .upsert({
          customer_id: eventData.data.id,
          email: eventData.data.email,
        })
        .select();

      if (error) throw error;
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "Customer update failed",
      };
    }
  }

  private async pauseSubscriptionData(
    eventData: SubscriptionPausedEvent,
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const supabase = await createClient();

      const { error } = await supabase
        .from("subscriptions")
        .update({
          subscription_status: eventData.data.status,
          paused_at:
            eventData.data.scheduledChange?.effectiveAt ??
            new Date().toISOString(),
          scheduled_change: eventData.data.scheduledChange?.effectiveAt ?? null,
          updated_at: new Date().toISOString(),
        })
        .eq("subscription_id", eventData.data.id);

      return {
        success: !error,
        error: error?.message,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "Subscription pause failed",
      };
    }
  }

  private async cancelSubscriptionData(
    eventData: SubscriptionCanceledEvent,
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const supabase = await createClient();

      const { error } = await supabase
        .from("subscriptions")
        .update({
          subscription_status: eventData.data.status,
          canceled_at:
            eventData.data.scheduledChange?.effectiveAt ??
            new Date().toISOString(),
          paused_at: null,
          updated_at: new Date().toISOString(),
        })
        .eq("subscription_id", eventData.data.id);

      return {
        success: !error,
        error: error?.message,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Subscription cancellation failed",
      };
    }
  }

  private async resumeSubscriptionData(
    eventData: SubscriptionResumedEvent,
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const supabase = await createClient();

      const { error } = await supabase
        .from("subscriptions")
        .update({
          subscription_status: eventData.data.status,
          paused_at: null,
          canceled_at: null,
          scheduled_change: eventData.data.scheduledChange?.effectiveAt ?? null,
          updated_at: new Date().toISOString(),
        })
        .eq("subscription_id", eventData.data.id);

      return {
        success: !error,
        error: error?.message,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "Subscription resume failed",
      };
    }
  }

  private async pastDueSubscriptionData(
    eventData: SubscriptionPastDueEvent,
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const supabase = await createClient();

      const { error } = await supabase
        .from("subscriptions")
        .update({
          subscription_status: eventData.data.status,
          past_due_notified_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq("subscription_id", eventData.data.id);

      return {
        success: !error,
        error: error?.message,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Past due status update failed",
      };
    }
  }
}
