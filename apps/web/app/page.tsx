import { Sidebar } from "@/components/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { invoices, stats } from "@/lib/dashboard-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1 p-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="mt-2 text-[var(--muted)]">
                Goedemorgen Mert, hier is je overzicht.
              </p>
            </div>

            <div className="flex gap-3">
              <ThemeToggle />
              <button className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white shadow-sm">
                + Nieuw
              </button>
            </div>
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

          <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <div className="mb-5 font-bold">Laatste facturen</div>
            <div className="space-y-4">
              {invoices.map(([name, amount, status]) => (
                <div key={name} className="flex items-center justify-between border-b border-[var(--border)] pb-4 last:border-0">
                  <div>
                    <div className="font-semibold">{name}</div>
                    <div className="text-sm text-[var(--muted)]">Factuur 2026-045</div>
                  </div>
                  <div className="font-bold">{amount}</div>
                  <div className="rounded-full bg-[var(--primary)]/20 px-3 py-1 text-xs font-bold">
                    {status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
