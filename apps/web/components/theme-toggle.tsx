"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm font-bold"
    >
      {dark ? "Light mode" : "Dark mode"}
    </button>
  );
}
