import { Info, Gift, CreditCard, CircleHelp, MessageCircle } from "lucide-react";

/** Single source of truth for the landing page's in-page sections. */
export const SECTIONS = [
  { label: "O que é", href: "#sobre", icon: Info },
  { label: "Pontos", href: "#pontos", icon: Gift },
  { label: "Preços", href: "#precos", icon: CreditCard },
  { label: "Dúvidas", href: "#faq", icon: CircleHelp },
  { label: "Contato", href: "#contato", icon: MessageCircle },
] as const;

/**
 * The footer omits "Contato" because it already renders the contact channels
 * right next to this list.
 */
export const FOOTER_SECTIONS = SECTIONS.filter(
  (section) => section.href !== "#contato"
);
