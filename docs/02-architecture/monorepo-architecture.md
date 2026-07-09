# MYO Monorepo Architecture

## Doel
MYO gebruikt een enterprise monorepo zodat web, admin, mobile, desktop, UI-componenten, database, AI, API en gedeelde logica vanuit één centrale codebase beheerd worden.

## Structuur

- apps/web: hoofdapplicatie voor klanten
- apps/admin: intern beheerportaal
- apps/mobile: toekomstige mobiele app
- apps/desktop: toekomstige desktop app

- packages/ui: gedeelde UI-componenten
- packages/database: database schema's, types en queries
- packages/auth: authenticatie en permissies
- packages/ai: AI-services en agents
- packages/api: gedeelde API-logica
- packages/shared: gedeelde utilities
- packages/themes: thema-engine
- packages/translations: language engine
- packages/notifications: notificaties
- packages/automation: workflow en automation engine

## Architectuurregel
Apps mogen packages gebruiken, maar packages mogen niet afhankelijk zijn van apps.
