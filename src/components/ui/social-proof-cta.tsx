import Link from "next/link";
import type { CustomLandingContent } from "@/content/custom-landing";

const avatarStack = [
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
  "https://randomuser.me/api/portraits/men/75.jpg",
];

export function SocialProofCta({
  content,
}: {
  content: CustomLandingContent["socialProof"];
}) {
  return (
    <section className="section-block-tight relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 14%, transparent), transparent 62%)" }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
      </div>

      <div className="layout-container relative">
        <div className="mx-auto max-w-5xl px-2 text-center sm:px-6 md:px-10">
        <div
          className="mx-auto inline-flex flex-wrap items-center justify-center gap-3 rounded-full px-4 py-2 text-sm text-slate-200"
          style={{
            border: "1px solid color-mix(in srgb, var(--accent) 20%, white 8%)",
            backgroundColor: "color-mix(in srgb, var(--accent) 8%, transparent)",
          }}
        >
          {content.showAvatars === false ? null : (
            <div className="flex -space-x-3">
              {avatarStack.map((image, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={image}
                  src={image}
                  alt={`Avatar ${index + 1}`}
                  className="h-9 w-9 rounded-full border-2 object-cover"
                  style={{ borderColor: "var(--background)" }}
                />
              ))}
            </div>
          )}
          <span className="font-medium">
            {content.bannerText}
          </span>
        </div>

        <h3 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          {content.title}
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {content.description}
        </p>

        <div className="mt-8 flex items-center justify-center">
          <Link
            href={content.ctaHref}
            className="inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold transition"
            style={{ backgroundColor: "var(--accent)", color: "var(--background)" }}
          >
            {content.ctaLabel}
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}
