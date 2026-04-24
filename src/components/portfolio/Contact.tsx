import { useLang } from "@/i18n/LangContext";
import { SectionHeader } from "./SectionHeader";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const { t } = useLang();

  const items = [
    { icon: Mail, label: t.contact.emailLabel, value: "ramiro2588@hotmail.com", href: "mailto:ramiro2588@hotmail.com" },
    { icon: Phone, label: t.contact.phoneLabel, value: "+598 091 621 360", href: "tel:+598091621360" },
    { icon: MapPin, label: t.contact.locationLabel, value: "Montevideo, Uruguay" },
    { icon: Linkedin, label: t.contact.linkedin, value: "in/ramirogonzález-shkurti", href: "https://www.linkedin.com/in/ramirogonz%C3%A9lez-shkurti" },
    { icon: Github, label: t.contact.github, value: "@ramiro2588", href: "https://github.com/ramiro2588" },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-line">
      <div className="container">
        <SectionHeader kicker={t.contact.kicker} title={t.contact.title} />

        <div className="grid lg:grid-cols-12 gap-10">
          <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
            {t.contact.desc}
          </p>

          <div className="lg:col-span-7 space-y-2">
            {items.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center gap-4 p-4 surface-card rounded-lg group">
                  <div className="h-10 w-10 rounded-md bg-secondary flex items-center justify-center shrink-0 group-hover:bg-terminal/10 transition-colors">
                    <Icon className="h-4 w-4 text-terminal" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="font-mono text-sm truncate">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
