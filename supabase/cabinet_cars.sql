create table if not exists public.cabinet_cars (
  user_id uuid not null references auth.users (id) on delete cascade,
  id text not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  title text not null default '',
  make text not null default '',
  model text not null default '',
  year text not null default '',
  vin text not null default '',
  lot_number text not null default '',
  stock_number text not null default '',
  source_url text not null default '',
  auction text not null default '',
  status text not null default 'draft' check (status in ('draft', 'research', 'bidding', 'won', 'shipping', 'repair', 'ready', 'sold')),
  body_style text not null default '',
  body_code text not null default '',
  generation text not null default '',
  trim text not null default '',
  color_exterior text not null default '',
  color_interior text not null default '',
  engine_volume text not null default '',
  engine_code text not null default '',
  engine_power_hp text not null default '',
  fuel_type text not null default '',
  drivetrain text not null default '',
  transmission text not null default '',
  mileage_km text not null default '',
  odometer_unit text not null default '',
  location text not null default '',
  country_of_origin text not null default '',
  import_destination text not null default '',
  ownership_type text not null default '',
  keys_status text not null default '',
  start_condition text not null default '',
  damage_primary text not null default '',
  damage_secondary text not null default '',
  repair_estimate_usd text not null default '',
  target_budget_usd text not null default '',
  purchase_price_usd text not null default '',
  customs_and_fees_usd text not null default '',
  seller_name text not null default '',
  seller_phone text not null default '',
  description text not null default '',
  service_history text not null default '',
  modifications text not null default '',
  notes text not null default '',
  publication_status text not null default 'private' check (publication_status in ('private', 'published')),
  public_title text not null default '',
  public_slug text not null default '',
  public_description text not null default '',
  public_price_usd text not null default '',
  public_estimate_usd text not null default '',
  public_badge text not null default '',
  public_hot_offer boolean not null default false,
  published_at timestamptz,
  photos jsonb not null default '[]'::jsonb,
  primary key (user_id, id)
);

alter table public.cabinet_cars
  add column if not exists publication_status text not null default 'private' check (publication_status in ('private', 'published')),
  add column if not exists public_title text not null default '',
  add column if not exists public_slug text not null default '',
  add column if not exists public_description text not null default '',
  add column if not exists public_price_usd text not null default '',
  add column if not exists public_estimate_usd text not null default '',
  add column if not exists public_badge text not null default '',
  add column if not exists public_hot_offer boolean not null default false,
  add column if not exists published_at timestamptz,
  add column if not exists expires_at timestamptz,
  add column if not exists renewed_at timestamptz;

create index if not exists cabinet_cars_user_updated_idx
  on public.cabinet_cars (user_id, updated_at desc);

create index if not exists cabinet_cars_publication_idx
  on public.cabinet_cars (publication_status, published_at desc);

create unique index if not exists cabinet_cars_public_slug_idx
  on public.cabinet_cars (lower(public_slug))
  where publication_status = 'published' and public_slug <> '';

alter table public.cabinet_cars enable row level security;

create policy "cabinet_cars_select_own"
  on public.cabinet_cars
  for select
  to authenticated
  using (auth.uid() = user_id);

create policy "cabinet_cars_insert_own"
  on public.cabinet_cars
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "cabinet_cars_update_own"
  on public.cabinet_cars
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "cabinet_cars_delete_own"
  on public.cabinet_cars
  for delete
  to authenticated
  using (auth.uid() = user_id);

create or replace view public.public_inventory_lots as
select
  id,
  user_id,
  created_at,
  updated_at,
  title,
  make,
  model,
  year,
  vin,
  source_url,
  auction,
  status,
  body_style,
  generation,
  trim,
  color_exterior,
  engine_volume,
  engine_power_hp,
  fuel_type,
  drivetrain,
  transmission,
  mileage_km,
  odometer_unit,
  location,
  country_of_origin,
  keys_status,
  damage_primary,
  purchase_price_usd,
  target_budget_usd,
  repair_estimate_usd,
  seller_name,
  publication_status,
  public_title,
  public_slug,
  public_description,
  public_price_usd,
  public_estimate_usd,
  public_badge,
  public_hot_offer,
  published_at,
  photos
from public.cabinet_cars
where publication_status = 'published';

grant select on public.public_inventory_lots to anon, authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'cabinet-photos',
  'cabinet-photos',
  false,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/heic', 'image/heif']
)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'public-lot-photos',
  'public-lot-photos',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/heic', 'image/heif']
)
on conflict (id) do nothing;

create policy "cabinet_photos_select_own"
  on storage.objects
  for select
  to authenticated
  using (
    bucket_id = 'cabinet-photos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "cabinet_photos_insert_own"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'cabinet-photos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "cabinet_photos_update_own"
  on storage.objects
  for update
  to authenticated
  using (
    bucket_id = 'cabinet-photos'
    and (storage.foldername(name))[1] = auth.uid()::text
  )
  with check (
    bucket_id = 'cabinet-photos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "cabinet_photos_delete_own"
  on storage.objects
  for delete
  to authenticated
  using (
    bucket_id = 'cabinet-photos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );