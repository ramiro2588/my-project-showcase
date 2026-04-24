import { useLang } from "@/i18n/LangContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-8">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
        <p>
          © {year} Ramiro González Shkurti. {t.footer.rights}
        </p>
        <p>
          {t.footer.built} <span className="text-terminal">♥</span>
        </p>
      </div>
    </footer>
  );
}
