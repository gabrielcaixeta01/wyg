export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://wyg.com.br";

export const SITE_NAME = "WYG";

/**
 * Metadata `openGraph` is shallow-merged: a page that declares its own
 * `openGraph` replaces the root one entirely. Pages spread this base so the
 * shared fields survive.
 */
export const OG_BASE = {
  type: "website",
  siteName: SITE_NAME,
  locale: "pt_BR",
} as const;
