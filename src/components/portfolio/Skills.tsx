import { useLang } from "@/i18n/LangContext";
import { SectionHeader } from "./SectionHeader";

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-line">
      <div className="container">
        <SectionHeader kicker={t.skills.kicker} title={t.skills.title} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.skills.groups.map((g) => (
            <div key={g.name} className="surface-card rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono text-sm font-semibold">{g.name}</h3>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {String(g.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                    <span className="text-terminal">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
