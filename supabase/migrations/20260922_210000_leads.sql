-- =============================================================================
-- 20260922_210000_leads.sql
-- Tabla de captura de leads del sitio comercial (lcacciatore.com)
-- =============================================================================
-- Contexto: `index.html` (bloque "Lead capture (C4)") insertaba en `public.leads`
-- con la anon key, pero la config quedó vacía en producción desde el lanzamiento:
-- el formulario mostraba el estado de éxito sin guardar nada.
--
-- Esta migración crea la tabla y la policy que el código ya esperaba.
-- Aplicar con el SQL Editor de Supabase o `supabase db push`.
-- =============================================================================

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  email       text not null,
  gym         text,
  created_at  timestamptz not null default now(),

  constraint leads_email_len check (char_length(email) between 5 and 254),
  constraint leads_gym_len   check (gym is null or char_length(gym) <= 200)
);

comment on table public.leads is
  'Leads del sitio comercial lcacciatore.com (formulario de checklist de retención).';

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx      on public.leads (lower(email));

-- -----------------------------------------------------------------------------
-- RLS: el sitio es estático y escribe con la anon key (pública por diseño).
-- Solo INSERT. Sin policy de SELECT, `anon` no puede leer los leads.
-- -----------------------------------------------------------------------------
alter table public.leads enable row level security;

drop policy if exists leads_insert_anon on public.leads;
create policy leads_insert_anon
  on public.leads
  for insert
  to anon
  with check (true);

-- Sin policy de select/update/delete para anon ni authenticated:
-- el acceso de lectura queda reservado a service_role y al dashboard.

-- -----------------------------------------------------------------------------
-- Verificación (correr después de aplicar; debe devolver insert permitido y
-- select denegado desde el rol anon):
--
--   set local role anon;
--   insert into public.leads (email, gym) values ('test@example.com', 'gym test');
--   select count(*) from public.leads;   -- debe fallar por RLS
--   reset role;
--   delete from public.leads where email = 'test@example.com';
-- -----------------------------------------------------------------------------

-- -----------------------------------------------------------------------------
-- Pendiente conocido (ticket aparte, NO bloquea este fix):
-- `with check (true)` deja un endpoint de INSERT abierto a spam. Mitigar con
-- honeypot en el formulario + rate limit por IP, o mover la escritura a una
-- función serverless de Vercel que use la service key del lado servidor.
-- -----------------------------------------------------------------------------
