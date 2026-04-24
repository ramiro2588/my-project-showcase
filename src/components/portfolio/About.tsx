import { useLang } from "@/i18n/LangContext";
import { SectionHeader } from "./SectionHeader";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-line">
      <div className="container">
        <SectionHeader kicker={t.about.kicker} title={t.about.title} />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-3 gap-3">
            {t.about.stats.map((s) => (
              <div key={s.label} className="surface-card rounded-lg p-5 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-terminal glow-text">{s.value}</div>
                <div className="font-mono text-[11px] text-muted-foreground mt-2 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}

            <div className="col-span-3 surface-card rounded-lg p-5">
              <p className="font-mono text-xs text-terminal mb-3">{"// "}{t.education.title}</p>
              <div className="space-y-3">
                {t.education.items.map((e) => (
                  <div key={e.school} className="text-sm">
                    <p className="font-semibold">{e.degree}</p>
                    <p className="text-muted-foreground text-xs font-mono">
                      {e.school} · {e.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
