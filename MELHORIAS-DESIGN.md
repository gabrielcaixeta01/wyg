# Melhorias de design — WYG Landing

Backlog de design levantado em **31/07/2026**, a partir de uma auditoria visual da página
completa (desktop 1440×900 e mobile 390×844, seção por seção).

Não são bugs — a página funciona, passa em build, lint, typecheck e numa suíte de 22 testes
de acessibilidade e comportamento. São decisões de design e de conteúdo para deixar o site
menos genérico e converter melhor.

**Como usar:** cada item tem o problema, a evidência que o sustenta, os passos concretos e um
critério de pronto. Dá para executar um de cada vez, em commits separados. Os itens 1 a 4 são
independentes entre si; o 5 mexe em estrutura e é melhor fazer depois deles.

---

## Diagnóstico geral

> Está bem executado e muito consistente, mas é consistente **demais**: parece um dashboard
> SaaS genérico, não um produto de vida noturna. E o ativo mais forte da página está escondido
> justamente de quem mais vai vê-la.

Medições da página no estado atual:

| métrica | valor |
|---|---|
| Altura no mobile (390px) | **9.917px — 11,8 telas** |
| Altura no desktop (1440px) | 6.569px — 7,3 telas |
| Aplicações de `gradient-text` na landing | **6** |
| Elementos `glass-card` / `glass-card-purple` | **30** |
| `padding-top` das seções | 112px em **todas** (`py-28`) |
| CTAs para `/register` na página inteira | **3** |
| Provas sociais (logo, depoimento, número real) | **0** |

---

## Ordem sugerida

| # | Item | Impacto | Esforço | Tipo |
|---|---|---|---|---|
| 1 | [Mockup visível no mobile](#1-mockup-do-app-visível-no-mobile) | 🔴 Alto | Médio | Design |
| 2 | [Preencher o card do painel](#2-preencher-o-card-painel-de-gestão-completo) | 🔴 Alto | Médio | Design |
| 3 | [Gradiente só no hero + cortar eyebrows](#3-gastar-menos-o-gradiente-e-cortar-os-eyebrows-redundantes) | 🟠 Médio | **Baixo** | Design |
| 4 | [Adicionar FAQ](#4-adicionar-uma-seção-de-faq) | 🔴 Alto | Médio | Conteúdo |
| 5 | [Fundir About + ForTheBar](#5-fundir-about--forthebar) | 🟠 Médio | Alto | Estrutura |
| 6 | [Hierarquia de materiais nos cards](#6-criar-hierarquia-de-materiais-nos-cards) | 🟠 Médio | Médio | Design |
| 7 | [Acento quente + tipografia](#7-acento-quente-e-revisão-de-tipografia) | 🟡 Alto se der certo | Alto | Identidade |
| — | [Prova social](#8-prova-social-quando-houver-material) | 🔴 Alto | Bloqueado | Conteúdo |

**Se você só fizer três coisas:** 1, 3 e 4.

---

## 1. Mockup do app visível no mobile

### Problema

O mockup do iPhone com mapa, pinos e lotação ao vivo é **a única coisa na página que mostra o
produto existindo**. Todo o resto é texto afirmando benefícios.

Ele está invisível abaixo de 1024px:

```
src/components/Hero.tsx:159
className="relative hidden lg:flex flex-col items-center justify-center"
                    ^^^^^^^^^^^^^
```

O público é dono de bar em Brasília, que vai receber o link no WhatsApp e abrir no celular. O
que ele vê hoje: headline, parágrafo, dois botões, fundo escuro. O que ele não vê: o produto.

"Lotação ao vivo" é abstrato até a pessoa ver a barrinha de 87% no Bar do Conde.

### O que fazer

1. Trocar `hidden lg:flex` por exibição em todas as larguras.
2. No mobile, escalar o mockup e **cortá-lo na base** — não precisa caber inteiro. Um telefone
   entrando pela borda inferior costuma funcionar melhor que um telefone inteiro e minúsculo:
   ```
   ┌──────────────────┐
   │  Conecte seu bar │
   │  a quem quer     │
   │  sair agora.     │
   │                  │
   │  [Cadastrar]     │
   │  [Entender]      │
   │   ┌──────────┐   │
   │   │ 9:41     │   │  ← mockup entra aqui,
   │   │ [mapa]   │   │     cortado na base
   │   │ Bar do…87│   │
   └───┴──────────┴───┘
   ```
3. O mockup tem largura fixa em `w-67.5 h-142.5`. Aplicar `scale` via wrapper com
   `origin-top` é mais seguro que remapear todas as medidas internas.
4. Revisar o `min-h-dvh` do hero: com o mockup entrando, a seção provavelmente precisa crescer
   no mobile.
5. Considerar reduzir o conteúdo interno no mobile (a lista de 3 bares pode virar 2).

### Arquivos

- `src/components/Hero.tsx` — coluna direita, a partir da linha 155

### Pronto quando

- [ ] O mockup aparece em 390px de largura
- [ ] A dobra inicial do mobile mostra headline + CTA + pelo menos parte do mapa
- [ ] Nada de scroll horizontal em 390px (`document.body.scrollWidth <= 390`)
- [ ] Os 22 testes existentes continuam passando

---

## 2. Preencher o card "Painel de gestão completo"

### Problema

O card em destaque da seção "Para o bar" ocupa 2×2 na grade e tem um vazio de ~200px no meio:

```
┌─────────────────────────────────┐
│ [ícone]                   DADOS │
│ Painel de gestão completo       │
│ Dados reais dos seus clientes…  │
│                                 │
│      ← ~200px de vazio →        │
│                                 │
│ (Horário de pico)(Ticket médio) │
└─────────────────────────────────┘
```

É o card mais importante da seção e **promete um painel sem mostrar painel nenhum**. É o melhor
espaço vago da página inteira.

### O que fazer

Desenhar um minipainel inline no espaço vazio, no mesmo espírito do mockup do iPhone (SVG/divs,
sem imagem externa). Sugestões, da mais simples para a mais elaborada:

- **Gráfico de barras de horário de pico** — 7 barras (18h às 00h), a de 22h destacada.
  Comunica "horário de pico" instantaneamente e é o dado mais fácil de entender.
- Minitabela de ticket médio por dia da semana.
- Sparkline de consumo dos últimos 7 dias.

Recomendo o gráfico de barras: é o mais legível em pouco espaço e reaproveita a linguagem visual
das barras de lotação que já existem no mockup do hero.

Usar dados fictícios plausíveis e **rotular como exemplo**, para não parecer número real de
cliente.

### Arquivos

- `src/components/ForTheBar.tsx:80` — o card com `lg:col-span-2 lg:row-span-2`
- `PANEL_STATS` na linha 8 pode virar rótulo dos eixos em vez de pills soltas

### Pronto quando

- [ ] O card não tem mais vazio estrutural
- [ ] O visual é legível em ≤400px de largura (o card vira coluna única no mobile)
- [ ] Fica claro que o dado é ilustrativo

---

## 3. Gastar menos o gradiente e cortar os eyebrows redundantes

**O item de melhor relação impacto/esforço da lista.** São duas mudanças pequenas com efeito
grande de limpeza.

### Problema A — o gradiente está gasto

`gradient-text` aparece **6 vezes** na landing:

| arquivo | linha |
|---|---|
| `src/components/Hero.tsx` | 110 |
| `src/components/About.tsx` | 108 |
| `src/components/ForTheBar.tsx` | 60 |
| `src/components/PointsSystem.tsx` | 64 |
| `src/components/Pricing.tsx` | 42 |
| `src/components/Contact.tsx` | 37 |

Quando a assinatura aparece em toda headline, ela deixa de ser assinatura e vira textura de fundo.

### Problema B — os eyebrows repetem a headline

```
eyebrow  "O QUE É A WYG"      → h2 "O que é a WYG?"
eyebrow  "PARA O SEU BAR"     → h2 "O que a WYG entrega para o seu bar"
eyebrow  "MODELO DE COBRANÇA" → h2 "Simples, transparente e ligado ao resultado"
eyebrow  "CONTATO"            → h2 "Fale com a equipe WYG."
```

Um eyebrow que repete a headline não estrutura nada, só ocupa espaço. Eyebrow bom carrega
informação que a headline **não** tem.

### O que fazer

1. Manter `gradient-text` **só no Hero** (linha 110). Nas outras 5 headlines, trocar o `<span>`
   por texto branco puro.
2. Remover os eyebrows que só repetem a headline: About, ForTheBar, Pricing, Contact.
3. Manter o de PointsSystem (`"Sistema de pontos"`) — ali a headline é
   *"Clientes que gastam mais, voltam mais"*, que não diz do que a seção trata. O eyebrow está
   fazendo trabalho de verdade.

Linhas dos eyebrows: `About.tsx:46`, `ForTheBar.tsx:47`, `PointsSystem.tsx:52`,
`Pricing.tsx:30`, `Contact.tsx:25`.

### Pronto quando

- [ ] `grep -rn "gradient-text" src/components` retorna só o Hero
- [ ] Sobrou no máximo 1 eyebrow na página
- [ ] O hero ficou visivelmente mais dominante que as outras seções

---

## 4. Adicionar uma seção de FAQ

### Problema

A página pede que um dono de bar aceite **comissão de 4% a 12% sobre o consumo dele**. É uma
decisão comercial séria, sustentada só por adjetivos.

E o modelo levanta perguntas óbvias que ficam sem resposta:

- Como registro o CPF na prática? Trava a fila do caixa?
- E se o cliente não quiser dar o CPF?
- Tem contrato? Tem fidelidade? Posso sair quando quiser?
- Como é definido se pago 4% ou 12%?
- Preciso de algum equipamento ou integração com o meu PDV?
- Depois dos 3 meses grátis, o que acontece exatamente?

**Objeção não respondida vira desistência silenciosa.** Se você só puder acrescentar uma seção
nesta página, que seja essa.

### O que fazer

1. Nova seção entre **Preços** e **Contato** — é onde a dúvida nasce e onde o leitor está
   decidindo.
2. Acordeão com `<details>`/`<summary>` nativos: acessível de graça, funciona sem JS, e o
   conteúdo fica no HTML para o Google indexar.
3. 6 a 8 perguntas. Escrever na voz de quem pergunta ("Preciso trocar meu sistema de caixa?"),
   não na voz institucional ("Sobre a integração de sistemas").
4. Respostas curtas e diretas. Se a resposta for desconfortável, responder mesmo assim — é o que
   constrói confiança.
5. Adicionar `#faq` ao `SECTIONS` em `src/lib/nav.ts` para entrar na navbar e no footer.
6. **Bônus de SEO:** structured data `FAQPage` (JSON-LD). Rende rich snippet no Google e é
   barato de fazer.

### Arquivos

- `src/components/Faq.tsx` (novo)
- `src/app/page.tsx` — inserir entre `<Pricing />` e `<Contact />`
- `src/lib/nav.ts` — adicionar a entrada

### Pronto quando

- [ ] 6+ perguntas respondidas, incluindo as desconfortáveis (contrato, cancelamento, % exato)
- [ ] Funciona com JavaScript desligado
- [ ] `scroll-margin-top` aplicado (o CSS global já cobre `section[id]`)
- [ ] Aparece na navbar e no footer

---

## 5. Fundir About + ForTheBar

### Problema

Boa parte dos 9.917px do mobile é **repetição de conteúdo**, não densidade:

| tema | aparece em |
|---|---|
| Visibilidade | About **e** ForTheBar |
| Dados dos clientes | About **e** ForTheBar |
| Sistema de pontos | ForTheBar, PointsSystem **e** lista de inclusos do Pricing |
| E-mail / Instagram / WhatsApp | Contact **e** Footer (logo abaixo) |

About e ForTheBar dizem quase a mesma coisa em sequência, com o mesmo layout.

### O que fazer

1. Fundir numa seção só, mais densa e mais curta. O material do About (o radar, "Não é anúncio.
   É presença no momento certo") é o mais forte conceitualmente — usaria ele como espinha.
2. Manter da ForTheBar: o card do painel (já com o gráfico do item 2) e as avaliações por GPS.
3. Cortar as duplicatas de "visibilidade" e "dados".
4. No Contact, remover a lista de canais **ou** simplificar o bloco equivalente do Footer. Dois
   blocos fazendo o mesmo trabalho, colados, é desperdício.
5. Decidir o `id` da seção resultante e atualizar `src/lib/nav.ts` — hoje `#sobre` e
   `#para-o-bar` são entradas separadas na navbar.

> ⚠️ Este item mexe em âncoras. Se a página já estiver recebendo tráfego, links externos para
> `#sobre` ou `#para-o-bar` vão quebrar. Considere manter um dos dois ids.

### Pronto quando

- [ ] Altura no mobile abaixo de ~8.000px
- [ ] Nenhum benefício explicado duas vezes
- [ ] Navbar e footer atualizados, sem link para âncora inexistente

---

## 6. Criar hierarquia de materiais nos cards

### Problema

**30 elementos** com `glass-card`/`glass-card-purple`, todos com o mesmo
`rgba(255,255,255,0.03)` + borda `white/7` + blur.

Distribuição: Pricing 8, Contact 5, ForTheBar 5, PointsSystem 5, About 3, Hero 1, Navbar 1.

Consequência: **o card de preço tem o mesmo peso visual que um card de benefício secundário.**
Não existe hierarquia por material, só por tamanho e posição. Quando tudo tem a mesma
profundidade, nada se destaca.

### O que fazer

Definir três níveis explícitos e aplicar com disciplina:

| nível | tratamento | onde usar (máx. 3 lugares) |
|---|---|---|
| **Destaque** | `border-gradient` + glow + fundo mais denso | Preço, CTA principal, mockup |
| **Padrão** | glass-card atual | Cards de benefício |
| **Discreto** | sem card — só texto sobre o fundo, com espaçamento | Listas de itens inclusos, passos |

A lista "Sempre incluso, sem custo adicional" do Pricing e os 3 passos do PointsSystem são
candidatos claros a **discreto** — hoje são cards porque tudo é card, não porque precisam ser.

### Pronto quando

- [ ] No máximo 3 elementos com tratamento de destaque na página
- [ ] Contagem total de glass cards caiu de forma relevante (meta: < 20)
- [ ] Rolando a página, dá para dizer em 1 segundo qual é o card mais importante de cada seção

---

## 7. Acento quente e revisão de tipografia

> Item mais arriscado e mais subjetivo da lista. É mudança de identidade, não de CSS. Deixaria
> por último e não faria sem olhar junto.

### Problema A — a paleta é inteiramente fria

Azul-noite + roxo está correto e coerente com a marca. Mas o verde só aparece em selo de
"Grátis" e o laranja **só existe dentro do mockup**.

Bar à noite tem calor: neon, âmbar, luz de sódio, o laranja do "Bombando". Essa temperatura
existe no mockup e não vaza para a página. É boa parte do motivo de o site parecer ferramenta de
analytics e não produto de saída noturna.

### Problema B — tipografia neutra

Geist em tudo, pesos 400 a 900. Competente, legível — e é a fonte de metade dos dashboards do
mundo. Hoje a tipografia entrega o conteúdo sem carregar personalidade nenhuma.

### O que fazer

1. Introduzir **um** acento quente (âmbar/laranja) usado com muita parcimônia — só em sinais de
   lotação alta e talvez no CTA principal. Se aparecer em tudo, o problema só troca de cor.
2. Testar uma display face com mais caráter só para as headlines, mantendo Geist no corpo. Duas
   famílias, papéis claros.
3. Ver o resultado lado a lado com o atual antes de decidir.

> ⚠️ **Restrição de acessibilidade.** Os tokens `--color-muted` (`#6C7E9D`) e
> `--color-purple-light` (`#4F79F7`) em `src/app/globals.css` foram calibrados para passar em
> WCAG AA (4.5:1) contra o fundo `#06070F` **e** contra a superfície dos glass cards
> (`~#0D0E16`). Qualquer cor nova precisa ser verificada nos dois fundos antes de entrar.

---

## 8. Prova social (quando houver material)

**Bloqueado por conteúdo, não por código.**

Não existe na página: nenhum nome de bar parceiro, nenhum depoimento, nenhum número real
("X bares em Brasília"), nenhum print do painel de verdade.

`"24h Resposta garantida"` e `"100% Gratuito"` na página de cadastro são promessas, não
evidências.

Assim que tiver **um** bar parceiro disposto a dar nome e uma frase, isso vale mais que qualquer
item de design desta lista. Enquanto não tiver, não invente placeholder — depoimento falso é
pior que depoimento nenhum.

Bom lugar: entre Preços e FAQ, ou logo abaixo do hero.

---

## Pendências fora de design

Levantadas na auditoria e conscientemente deixadas de fora por enquanto.

### 🔴 Os formulários não enviam nada

- `src/app/login/LoginView.tsx` — `handleSubmit` só faz `preventDefault()`
- `src/app/register/RegisterView.tsx` — `handleSubmit` só faz `setSubmitted(true)`

O usuário vê *"Mensagem enviada! Nossa equipe vai entrar em contato"* e **o lead é perdido em
silêncio**.

> **Atenção:** `/register` agora é indexável, tem título e canonical próprios, e está no
> sitemap. Quando começar a receber tráfego de busca, esse formulário passa a queimar lead de
> verdade. **É o bloqueador de deploy da página.**

Solução mínima enquanto não há backend: Server Action + webhook (Formspree, Resend) com estado
de `loading` e `error`. Resolve em pouco tempo.

### 🟡 Copy inconsistente no sistema de pontos

`src/components/PointsSystem.tsx:148-154` — *"R$120 consumido → 12.000 pontos (10%)"*.

10% de 120 é 12, não 12.000. Imagino que a regra seja 100 pontos por real, mas o "(10%)" ao lado
de "12.000" não fecha para quem lê. Vale explicitar a taxa de conversão.

### 🟢 Sem testes no repositório

Os scripts de auditoria (focus trap, scroll lock, reduced-motion, `activeSection`, navegação
client-side) foram descartáveis. Se quiser, dá para trazê-los para o repo como base de E2E — o
projeto não tem nenhum teste hoje.

---

## Não regredir

Garantias já implementadas. Ao mexer no design, manter:

- **Contraste AA** — `--color-muted` e `--color-purple-light` calibrados contra os dois fundos
- **`prefers-reduced-motion`** — bloco em `globals.css` + `MotionProvider` para o framer-motion
- **Menu mobile** — Escape, focus trap, scroll lock, foco devolvido ao toggle
- **SEO** — canonical por página, títulos únicos, 1 `<h1>` por página, `/login` noindex
- **Navegação client-side** — CTAs internos usam `<Link>`/`MotionLink`, não `<a>`
- **Fonte única de navegação** — `src/lib/nav.ts` alimenta navbar e footer

Antes de commitar: `npm run typecheck && npm run lint && npm run build`.
