import { ReactNode } from "react";

interface SectionHeaderProps {
  kicker: string;
  title: string;
  children?: ReactNode;
}

export function SectionHeader({ kicker, title, children }: SectionHeaderProps) {
  return (
    <div className="mb-12 space-y-3">
      <p className="font-mono text-sm text-terminal terminal-prompt">{kicker}</p>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter">{title}</h2>
      {children}
    </div>
  );
}
