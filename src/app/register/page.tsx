import type { Metadata } from "next";
import { OG_BASE, SITE_URL } from "@/lib/site";
import RegisterView from "./RegisterView";

const title = "Cadastre seu bar";
const description =
  "Coloque seu bar na WYG e apareça para quem está decidindo onde ir agora. Grátis nos 3 primeiros meses, sem cartão de crédito.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/register" },
  openGraph: {
    ...OG_BASE,
    title: `${title} | WYG`,
    description,
    url: `${SITE_URL}/register`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | WYG`,
    description,
  },
};

export default function RegisterPage() {
  return <RegisterView />;
}
