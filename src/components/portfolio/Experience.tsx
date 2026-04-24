import { useLang } from "@/i18n/LangContext";
import { SectionHeader } from "./SectionHeader";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-line">
      <div className="container">
        <SectionHeader kicker={t.experience.kicker} title={t.experience.title} />

        <ol className="relative border-l border-line ml-2 space-y-10">
          {t.experience.items.map((item, idx) => (
            <li key={idx} className="pl-8 relative">
              <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-background border-2 border-terminal" />
              <div className="surface-card rounded-lg p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold">
                    {item.role}
                    <span className="text-terminal"> @ </span>
                    {item.company}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2 py-1 rounded border border-line text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
