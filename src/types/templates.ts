export type ConversionGoal =
  | "trial"
  | "direct-purchase"
  | "consultative-demo"
  | "sales-conversation"
  | "signup-or-demo";

export type SectionType =
  | "hero"
  | "logo-wall"
  | "pain"
  | "feature-grid"
  | "feature-tabs"
  | "comparison"
  | "metrics"
  | "integrations"
  | "pricing"
  | "persona-grid"
  | "case-study"
  | "faq"
  | "final-cta";

export type AssetType =
  | "dashboard"
  | "workflow"
  | "module-screenshot"
  | "integration-map"
  | "team-photo"
  | "testimonial-video"
  | "product-video"
  | "pricing-visual"
  | "mobile-mockup";

export interface CopyGuide {
  headline: string;
  supportingCopy: string;
  bullets: string[];
  ctaNote: string;
}

export interface MockupGuide {
  layout: string;
  composition: string;
  highlightItems: string[];
  captureNotes: string[];
}

export interface MediaBrief {
  preferredAssetType: AssetType;
  productContext: string;
  featureFocus: string[];
  avoidGenericStock: boolean;
  videoSuggestion: string;
  altSuggestion: string;
}

export interface SectionDefinition {
  id: string;
  title: string;
  sectionType: SectionType;
  variant: string;
  eyebrow?: string;
  summary: string;
  copyGuide: CopyGuide;
  mockupGuide: MockupGuide;
  mediaGuide: MediaBrief;
  requiredInputs: string[];
  optionalInputs: string[];
}

export interface TemplateTheme {
  background: string;
  foreground: string;
  card: string;
  cardBorder: string;
  mutedForeground: string;
  accent: string;
  accentStrong: string;
  accentSoft: string;
  success: string;
  shadowColor: string;
}

export interface TemplateDefinition {
  slug: string;
  name: string;
  category: string;
  audience: string;
  summary: string;
  conversionGoal: ConversionGoal;
  primaryCta: string;
  secondaryCta: string;
  theme: TemplateTheme;
  sections: SectionDefinition[];
}
