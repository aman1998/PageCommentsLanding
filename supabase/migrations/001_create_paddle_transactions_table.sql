-- Store one-time Paddle payments from webhook events.
create table
  public.one_payments (
    transaction_id text not null,
    email text not null,
    customer_id text null,
    status text not null,
    price_id text null,
    product_id text null,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now(),
    constraint one_payments_pkey primary key (transaction_id)
  ) tablespace pg_default;

create index one_payments_email_idx on public.one_payments using btree (email) tablespace pg_default;

alter table "public"."one_payments" enable row level security;

create policy "Enable read access for authenticated users to one_payments" on "public"."one_payments" as PERMISSIVE for SELECT to authenticated using ( true );
