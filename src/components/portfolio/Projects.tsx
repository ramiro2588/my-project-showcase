import { useState } from "react";
import { useLang } from "@/i18n/LangContext";
import { SectionHeader } from "./SectionHeader";
import { projects, type ProjectCategory } from "@/data/projects";
import { Github, ExternalLink, Lock, Sparkles } from "lucide-react";

type Filter = "all" | ProjectCategory;

export default function Projects() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t.projects.filters.all },
    { key: "university", label: t.projects.filters.university },
    { key: "freelance", label: t.projects.filters.freelance },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-line">
      <div className="container">
        <SectionHeader kicker={t.projects.kicker} title={t.projects.title} />

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-3 py-1.5 rounded-md font-mono text-xs border transition-colors ${
                filter === f.key
                  ? "border-terminal text-terminal bg-terminal/10"
                  : "border-line text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
              <span className="ml-1.5 opacity-60">
                {f.key === "all" ? projects.length : projects.filter((p) => p.category === f.key).length}
              </span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((p) => {
            const desc = lang === "en" ? p.descriptionEn : p.descriptionEs;
            return (
              <article
                key={p.id}
                className={`surface-card rounded-lg p-6 flex flex-col ${
                  p.highlight ? "ring-1 ring-terminal/20" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    {p.highlight && <Sparkles className="h-4 w-4 text-terminal" />}
                    <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground shrink-0 mt-1">
                    {p.year}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-line">
                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-terminal transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                      {t.projects.viewCode}
                    </a>
                  ) : null}
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-terminal transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {t.projects.viewLive}
                    </a>
                  ) : null}
                  {p.isPrivate ? (
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                      <Lock className="h-3.5 w-3.5" />
                      {t.projects.private}
                    </span>
                  ) : null}
                  <span className="ml-auto font-mono text-[10px] text-muted-foreground uppercase">
                    {t.projects.filters[p.category]}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
