-- Store one-time Paddle transactions from webhook events
create table
  public.paddle_transactions (
    transaction_id text not null,
    customer_id text not null,
    status text not null,
    price_id text null,
    product_id text null,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now(),
    constraint paddle_transactions_pkey primary key (transaction_id),
    constraint paddle_transactions_customer_id_fkey foreign key (customer_id) references customers (customer_id)
  ) tablespace pg_default;

create index paddle_transactions_customer_id_idx on public.paddle_transactions using btree (customer_id) tablespace pg_default;

alter table "public"."paddle_transactions" enable row level security;

create policy "Enable read access for authenticated users to paddle_transactions" on "public"."paddle_transactions" as PERMISSIVE for SELECT to authenticated using ( true );
