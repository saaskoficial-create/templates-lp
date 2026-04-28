import Link from "next/link";

interface FooterProps {
  logo: React.ReactNode;
  brandName: string;
  summary: string;
  contactHref: string;
  contactLabel: string;
  copyright: string;
  socialLinks?: Array<{ href: string; label: string }>;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.24-6.16-3.44-8.43Zm-8.46 18.3h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.86 9.86 0 0 1-1.51-5.25c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 7c0 5.45-4.44 9.88-9.89 9.88Zm5.42-7.4c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.78-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.25-1.46 1.5-1.46h1.73V4.96c-.3-.04-1.33-.12-2.54-.12-2.52 0-4.24 1.54-4.24 4.37V11H7v3h2.92v8h3.58Z" />
    </svg>
  );
}

const defaultSocialLinks = [
  { href: "#", label: "WhatsApp", icon: WhatsAppIcon },
  { href: "#", label: "Instagram", icon: InstagramIcon },
  { href: "#", label: "Facebook", icon: FacebookIcon },
];

export function Footer({
  logo,
  brandName,
  summary,
  contactHref,
  contactLabel,
  copyright,
  socialLinks,
}: FooterProps) {
  const links = (socialLinks?.length ? socialLinks : defaultSocialLinks).map((item) => {
    const icon =
      item.label === "Instagram"
        ? InstagramIcon
        : item.label === "Facebook"
          ? FacebookIcon
          : WhatsAppIcon;

    return { ...item, icon };
  });

  return (
    <footer className="pb-10 pt-12 lg:pb-12 lg:pt-16">
      <div className="rounded-[32px] border border-white/10 bg-white/4 px-5 py-8 backdrop-blur-sm sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              {logo}
              <span className="text-xl font-semibold text-white">{brandName}</span>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
              {summary}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <Link
              href={contactHref}
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
              style={{
                border: "1px solid color-mix(in srgb, var(--accent) 30%, white 8%)",
                backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
                color: "var(--accent)",
              }}
            >
              {contactLabel}
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-slate-500 sm:text-sm">{copyright}</span>
          <div className="flex items-center gap-2">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/14 text-slate-300 transition hover:bg-white/8"
                style={{ color: label === "WhatsApp" ? "var(--accent)" : undefined }}
              >
                <Icon className="size-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
