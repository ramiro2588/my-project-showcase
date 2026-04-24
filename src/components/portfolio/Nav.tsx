import { useLang } from "@/i18n/LangContext";
import { Languages } from "lucide-react";

const sections = ["about", "skills", "experience", "projects", "contact"] as const;

export default function Nav() {
  const { lang, toggle, t } = useLang();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/70 backdrop-blur-xl border-b border-line">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-terminal">~/</span>ramiro<span className="text-muted-foreground">.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 font-mono text-sm">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              {t.nav[s]}
            </a>
          ))}
        </nav>

        <button
          onClick={toggle}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md font-mono text-xs border border-line hover:border-terminal/50 hover:text-terminal transition-colors"
          aria-label="Toggle language"
        >
          <Languages className="h-3.5 w-3.5" />
          <span className="font-semibold">{lang.toUpperCase()}</span>
          <span className="text-muted-foreground">/ {lang === "en" ? "ES" : "EN"}</span>
        </button>
      </div>
    </header>
  );
}
