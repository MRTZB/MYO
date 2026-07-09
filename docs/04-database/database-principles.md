# MYO Database Principles

## Database
Supabase PostgreSQL.

## Belangrijkste uitgangspunt
MYO wordt multi-tenant. Iedere klant/organisatie krijgt eigen gescheiden data via company_id.

## Basisentiteiten
- companies
- users
- company_members
- roles
- permissions
- modules
- customers
- invoices
- invoice_items
- recurring_invoices
- documents
- tasks
- notifications
- audit_logs
- ai_logs
- settings
- themes
- languages

## Regels
- Elke bedrijfsdata-tabel krijgt company_id
- Elke belangrijke wijziging krijgt audit logging
- Geen gevoelige secrets in database zonder beveiliging
- Row Level Security verplicht
