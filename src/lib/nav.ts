import { Info, Store, Gift, CreditCard, MessageCircle } from "lucide-react";

/** Single source of truth for the landing page's in-page sections. */
export const SECTIONS = [
  { label: "O que é", href: "#sobre", icon: Info },
  { label: "Para o bar", href: "#para-o-bar", icon: Store },
  { label: "Pontos", href: "#pontos", icon: Gift },
  { label: "Preços", href: "#precos", icon: CreditCard },
  { label: "Contato", href: "#contato", icon: MessageCircle },
] as const;

/**
 * The footer omits "Contato" because it already renders the contact channels
 * right next to this list.
 */
export const FOOTER_SECTIONS = SECTIONS.filter(
  (section) => section.href !== "#contato"
);
