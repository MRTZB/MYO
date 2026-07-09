export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7FAFA] text-[#0F172A]">
      <div className="flex min-h-screen">
        <aside className="w-72 border-r border-slate-200 bg-white p-6">
          <div className="rounded-2xl bg-[#81D8D0] p-5 text-slate-950">
            <div className="text-2xl font-bold tracking-tight">MYO</div>
            <div className="text-sm font-medium">Business OS</div>
          </div>

          <nav className="mt-8 space-y-2 text-sm font-medium">
            {["Dashboard", "Klanten", "Facturen", "Automatische facturen", "Documenten", "Taken", "AI Assistent", "Instellingen"].map((item, index) => (
              <div
                key={item}
                className={`rounded-xl px-4 py-3 ${
                  index === 0 ? "bg-[#81D8D0]/25 text-slate-950" : "text-slate-500"
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
              <p className="mt-2 text-slate-500">Goedemorgen Mert, hier is je overzicht.</p>
            </div>

            <button className="rounded-xl bg-[#F37021] px-5 py-3 text-sm font-bold text-white shadow-sm">
              + Nieuw
            </button>
          </div>

          <div className="mt-10 grid grid-cols-4 gap-5">
            {[
              ["Omzet deze maand", "€ 24.850", "+12,5% t.o.v. vorige maand"],
              ["Openstaande facturen", "€ 8.450", "6 facturen openstaand"],
              ["Betaald deze maand", "€ 16.400", "8 facturen betaald"],
              ["Te laat", "€ 2.150", "3 facturen te laat"],
            ].map(([title, value, sub]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm text-slate-500">{title}</div>
                <div className="mt-3 text-3xl font-bold">{value}</div>
                <div className="mt-2 text-sm text-slate-400">{sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-5">
            <div className="col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-bold">Omzet overzicht</div>
              <div className="mt-8 h-64 rounded-2xl bg-gradient-to-br from-[#81D8D0]/40 to-white" />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-bold">Facturen status</div>
              <div className="mx-auto mt-10 flex h-40 w-40 items-center justify-center rounded-full border-[18px] border-[#81D8D0]">
                <div className="text-center">
                  <div className="text-3xl font-bold">19</div>
                  <div className="text-xs text-slate-400">Totaal</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
