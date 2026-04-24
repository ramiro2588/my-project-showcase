import { useLang } from "@/i18n/LangContext";
import { ArrowRight, MapPin, Circle } from "lucide-react";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-8 animate-fade-up">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="flex items-center gap-1.5 text-terminal">
              <Circle className="h-2 w-2 fill-current animate-pulse" />
              {t.hero.available}
            </span>
            <span className="text-muted-foreground">|</span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {t.hero.location}
            </span>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-sm text-terminal">{t.hero.greeting}</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
              <span className="text-gradient">Ramiro</span>
              <br />
              González <span className="text-muted-foreground/60">Shkurti</span>
            </h1>
            <p className="font-mono text-base sm:text-lg text-muted-foreground pt-2 blink-cursor">
              {t.hero.role}
            </p>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {t.hero.tagline}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 bg-terminal text-primary-foreground font-mono text-sm font-semibold rounded-md hover:shadow-glow transition-all"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 border border-line font-mono text-sm font-semibold rounded-md hover:border-terminal/50 hover:text-terminal transition-colors"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="surface-card rounded-lg p-1 shadow-card">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-line">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-terminal/60" />
              <span className="ml-2 font-mono text-[10px] text-muted-foreground">~/whoami</span>
            </div>
            <pre className="font-mono text-[11px] sm:text-xs leading-relaxed p-4 text-muted-foreground overflow-x-auto">
{`> whoami
ramiro@dev:~$ cat profile.json
{
  "name": "Ramiro González",
  "role": "Full-Stack Dev",
  "stack": [
    "Node.js", "Angular",
    "C#", "Java",
    "NetSuite", "SuiteScript",
    "SQL", "DevOps",
    "HTML", "CSS",
    "JavaScript", "TypeScript",
    "MongoDB", "Express.js", "SQL Server"
  ],
  "location": "Montevideo, UY",
  "languages": ["es", "en"],
  "status": "shipping ✦"
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
