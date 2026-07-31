import type { Metadata } from "next";
import LoginView from "./LoginView";

export const metadata: Metadata = {
  title: "Entrar",
  description:
    "Acesse o painel de parceiro WYG e acompanhe consumo, fidelização e lotação do seu bar em tempo real.",
  alternates: { canonical: "/login" },
  // Gated page: no search value, and it should not compete with the landing.
  robots: { index: false, follow: true },
};

export default function LoginPage() {
  return <LoginView />;
}
