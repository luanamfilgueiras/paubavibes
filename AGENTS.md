# Guia de Instruções para Agente de IA — Paúba Vibes

Este documento fornece todo o contexto técnico, padrões de arquitetura, regras de negócio e fluxos de desenvolvimento do projeto **Paúba Vibes** para que qualquer agente de IA (Antigravity ou outro) possa continuar o desenvolvimento sem perder consistência.

---

## 📌 1. Visão Geral do Projeto

- **Nome**: Paúba Vibes
- **Objetivo**: Landing page institucional de alto padrão (*Coastal Luxury*) para locação de casas por temporada na Praia de Paúba (São Sebastião - SP).
- **Modelo de Conversão**: Vitrine de consulta direta. Toda negociação/reserva é finalizada via WhatsApp (`wa.me`) através de mensagens pré-formatadas dinâmicas.
- **Fase Atual**: MVP com 2 casas reais cadastradas (**Casa 91** e **Casa 81**), suportando expansão para 4 a 8 imóveis.

---

## 🛠️ 2. Stack Tecnológica & Princípios de Engenharia

1. **Core**: HTML5 Semântico, JavaScript Modular (ES Modules) e Vanilla CSS.
2. **Bundler & Tooling**: Vite (`v6.x`) para build ultrarrápido, otimização e dev server local.
3. **Sem Framework Pesado / Sem Tailwind**: O projeto utiliza um Design System nativo em CSS com variáveis CSS (`var(--...)`), garantindo performance instantânea, zero dependências externas pesadas e controle total do layout.
4. **Sem Backend / Jamstack Estático**: Não há banco de dados relacional ou servidor Node/PHP dinâmico no MVP. Todos os dados residem no arquivo centralizado `src/data/imoveis.js`.

---

## 📁 3. Estrutura de Diretórios e Responsabilidades

```text
pauba-vibes/
├── public/
│   └── images/
│       └── casas/                # Fotos reais dos imóveis (Casa 91, Casa 81, etc.)
├── src/
│   ├── data/
│   │   └── imoveis.js            # ⚠️ FONTE DA VERDADE: dados dos imóveis, configs, FAQ e WhatsApp
│   ├── styles/
│   │   └── main.css              # Design System, cores, tipografia, grid, animações e responsividade
│   └── main.js                   # Lógica interativa: renderização de cards, carrossel, lightbox modal e WA
├── index.html                    # HTML5 base com meta tags SEO e OpenGraph para cards de WhatsApp
├── package.json                  # Dependências e scripts npm
├── AGENTS.md                     # Este arquivo de instruções para agentes de IA
└── Spec.md                       # PRD original do projeto
```

---

## 🧩 4. Padrões de Código & Modelagem de Dados

### 4.1. Como os Dados são Estruturados (`src/data/imoveis.js`)
Qualquer alteração de texto, preço, comodidades ou adição de novas casas deve ser feita **exclusivamente neste arquivo**:

```javascript
export const CONFIG_GERAL = {
  nome_site: "Paúba Vibes",
  slogan: "Seu refúgio de praia em Paúba • São Sebastião - SP",
  whatsapp_padrao: "5511995231996",
  whatsapp_formatado: "(11) 99523-1996",
  // ...
};

export const IMOVEIS = [
  {
    id: "casa-91",
    nome: "Casa 91",
    titulo: "Casa 91 • Charme Praiano & Amplo Espaço Integrado",
    preco: "A partir de R$ 400",
    capacidade_hospedes: 8,
    quartos: 3,
    banheiros: 2,
    distancia_praia: "300m da praia (5 min a pé)",
    pet_friendly: true,
    tags: ["Destaque", "Espaçosa"],
    comodidades: [ /* ... */ ],
    fotos: [
      { url: "/images/casas/casa-91-sala.jpg", titulo: "...", categoria: "Sala" },
      // Mínimo de 10 fotos por imóvel (requisito da Spec)
    ],
    numero_whatsapp: "", // Se vazio, herda CONFIG_GERAL.whatsapp_padrao automaticamente
    mensagem_whatsapp: "Olá! Vi a *Casa 91* no site Paúba Vibes e gostaria de consultar a disponibilidade..."
  }
];
```

### 4.2. Padrão de Geração de Links do WhatsApp
A função `gerarUrlWhatsapp(imovel)` no arquivo `src/main.js` sanitiza o telefone e codifica a mensagem via `encodeURIComponent`, suportando tanto o número global padrão quanto números específicos por casa/proprietário.

### 4.3. Galeria & Lightbox Modal (10+ fotos)
- Cada card de imóvel tem um **mini-carrossel** para navegação rápida das primeiras fotos.
- O botão **"Ver todas as 10 fotos"** dispara o modal em tela cheia (`#lightbox-modal`), que possui suporte a teclado (Esc, setas), swipe touch no mobile, fita de miniaturas e CTA direto de reserva.

---

## 🎨 5. Design System & Identidade Visual

- **Paleta de Cores (`src/styles/main.css`)**:
  - `var(--color-ocean-900)` (`#0a1e28`): Azul marinho profundo luxuoso.
  - `var(--color-sand-50)` / `var(--color-sand-100)`: Tons quentes de areia da praia.
  - `var(--color-sunset-500)` (`#e76f51`): Terracota pôr do sol de Paúba (destaque/botões secundários).
  - `var(--color-whatsapp)` (`#25d366`): Verde oficial de conversão.
  - `var(--color-emerald-500)` (`#2a9d8f`): Verde tropical para badges.
- **Tipografia**:
  - Títulos: `Outfit`, sans-serif moderno.
  - Textos corridos: `Plus Jakarta Sans`.

---

## 🚀 6. Comandos e Fluxo de Trabalho

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Gerar build de produção (pasta /dist)
npm run build

# Testar build de produção localmente
npm run preview
```

---

## 🔮 7. Próximos Passos Sugeridos para o Novo Agente / Desenvolvedora

1. **Adicionar novas casas**: Incluir mais 2 a 4 casas em `src/data/imoveis.js` se novas unidades forem disponibilizadas.
2. **Substituir fotos demonstrativas por fotos reais adicionais**: Quando a proprietária tirar fotos dos quartos/banheiros, basta salvar em `public/images/casas/` e referenciar no array `fotos[]`.
3. **Deploy em Produção**:
   - Conectar o repositório GitHub na **Vercel** ou **Cloudflare Pages** (Build Command: `npm run build`, Output Directory: `dist`).
   - Apontar o domínio próprio (ex: `paubavibes.com.br`).
