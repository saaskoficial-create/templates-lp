import type { CSSProperties } from "react";

import type { TemplateTheme } from "@/types/templates";

export function getThemeStyle(theme: TemplateTheme): CSSProperties {
  return {
    ["--background" as string]: theme.background,
    ["--foreground" as string]: theme.foreground,
    ["--card" as string]: theme.card,
    ["--card-border" as string]: theme.cardBorder,
    ["--muted-foreground" as string]: theme.mutedForeground,
    ["--accent" as string]: theme.accent,
    ["--accent-strong" as string]: theme.accentStrong,
    ["--accent-soft" as string]: theme.accentSoft,
    ["--success" as string]: theme.success,
    ["--shadow-color" as string]: theme.shadowColor,
  };
}
