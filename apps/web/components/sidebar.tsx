import { menuItems } from "@/lib/dashboard-data";

export function Sidebar() {
  return (
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

      <div className="mt-auto pt-10 text-xs text-[var(--muted)]">
        Mert Özbek<br />Administrator
      </div>
    </aside>
  );
}
