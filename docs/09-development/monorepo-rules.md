# MYO Monorepo Rules

## Basisregels
1. Business logic hoort niet in UI-componenten.
2. Herbruikbare code gaat naar packages.
3. Klantspecifieke instellingen komen uit configuratie, niet uit hardcoded code.
4. Alle modules moeten tenant-aware zijn.
5. Alle teksten moeten via translations lopen.
6. Alle kleuren moeten via theme tokens lopen.
7. Apps gebruiken packages; packages gebruiken geen apps.

## Package-verantwoordelijkheden
- ui: knoppen, kaarten, tabellen, modals, layouts
- database: types, queries, schema's
- auth: login, rollen, rechten
- ai: prompts, tools, agents, AI-logica
- api: server actions en API helpers
- shared: algemene helpers
- themes: light/dark/custom theme tokens
- translations: taalbestanden en vertaalfuncties
- notifications: e-mail, in-app alerts, reminders
- automation: workflows, triggers, acties
