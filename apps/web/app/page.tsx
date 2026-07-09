const menuItems = [
  "Dashboard",
  "Klanten",
  "Facturen",
  "Automatische facturen",
  "Documenten",
  "Taken",
  "AI Assistent",
  "Instellingen",
];

const stats = [
  ["Omzet deze maand", "€ 24.850", "+12,5% t.o.v. vorige maand"],
  ["Openstaande facturen", "€ 8.450", "6 facturen openstaand"],
  ["Betaald deze maand", "€ 16.400", "8 facturen betaald"],
  ["Te laat", "€ 2.150", "3 facturen te laat"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="flex min-h-screen">
        <aside className="w-72 border-r border-[var(--border)] bg-[var(--card)] p-6">
          <div className="rounded-2xl bg-[var(--primary)] p-5 text-slate-950">
            <div className="text-2xl font-bold tracking-tight">MYO</div>
            <div className="text-sm font-medium">Business OS</div>
          </div>

          <nav className="mt-8 space-y-2 text-sm font-medium">
            {menuItems.map((item, index) => (
              <div
                key={item}
                className={`rounded-xl px-4 py-3 ${
                  index === 0
                    ? "bg-[var(--primary)]/25 text-[var(--foreground)]"
                    : "text-[var(--muted)]"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <section className="flex-1 p-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="mt-2 text-[var(--muted)]">
                Goedemorgen Mert, hier is je overzicht.
              </p>
            </div>

            <button className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white shadow-sm">
              + Nieuw
            </button>
          </div>

          <div className="mt-10 grid grid-cols-4 gap-5">
            {stats.map(([title, value, sub]) => (
              <div
                key={title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
              >
                <div className="text-sm text-[var(--muted)]">{title}</div>
                <div className="mt-3 text-3xl font-bold">{value}</div>
                <div className="mt-2 text-sm text-[var(--muted)]">{sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-5">
            <div className="col-span-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <div className="font-bold">Omzet overzicht</div>
              <div className="mt-8 h-64 rounded-2xl bg-gradient-to-br from-[var(--primary)]/40 to-transparent" />
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <div className="font-bold">Facturen status</div>
              <div className="mx-auto mt-10 flex h-40 w-40 items-center justify-center rounded-full border-[18px] border-[var(--primary)]">
                <div className="text-center">
                  <div className="text-3xl font-bold">19</div>
                  <div className="text-xs text-[var(--muted)]">Totaal</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
