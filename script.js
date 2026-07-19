// Kaia — landing page interactions

(function () {
  // ===========================================================
  // i18n — PT / EN. Strings keep inline HTML where the original
  // markup used <strong>, <code>, <br>, etc.
  // ===========================================================
  const STRINGS = {
    pt: {
      // Nav
      "nav-apps": "KaiaGen",
      "nav-features": "Features",
      "nav-hardware": "Hardware",
      "nav-downloads": "Downloads",
      "nav-faq": "FAQ",
      "nav-pricing": "Preços",
      "nav-cta": "Descarregar",
      // Hero
      "hero-eyebrow": "Cidades procedurais · 2D → 3D · IA",
      "hero-h1": "Desenha a cidade.<br/>Povoa os prédios.<br/><span class=\"gradient-text\">Gera o mundo.</span>",
      "hero-lead": "O <strong>KaiaGen</strong> é uma só aplicação desktop para cidades procedurais: desenha em 2D e gera em 3D, define zoneamentos e prédios na bancada <strong>Schema</strong>, comanda tudo com IA por <strong>MCP</strong>, e traz os teus próprios assets com o <strong>addon de Blender</strong>.",
      "hero-cta-start": "Começar",
      "hero-cta-apps": "Ver o que tem →",
      // Inside KaiaGen
      "apps-eyebrow": "Uma app · um pipeline",
      "apps-h2": "Tudo no KaiaGen.",
      "apps-lead": "O KaiaMalha e o KaiaDNA são agora uma só ferramenta. A grelha da cidade virou a <strong>Base</strong> do KaiaGen; o antigo DNA virou o <strong>Schema</strong>. Dois modos, uma app.",
      "base-tag": "Esboço 2D → cidade 3D",
      "base-desc": "A fundação do KaiaGen. Desenha o layout da cidade em 2D — ruas, quarteirões, zonas, água — e a Base gera tudo em 3D com terreno, passeios, drenagem urbana, iluminação e árvores.",
      "base-f1": "Editor 2D com snap-to-grid + splines",
      "base-f2": "Geração 3D realista com optimização automática",
      "base-f3": "Terreno, drenagem, pontes, túneis e viadutos",
      "base-f4": "Export universal para Blender, Unreal e USD",
      "base-cta": "Obter o KaiaGen →",
      "schema-tag": "Zoneamentos + prédios",
      "schema-desc": "A bancada que substituiu o KaiaDNA. Cria zoneamentos personalizados, importa os teus próprios GLBs de prédios, define andares e regras, e aplica-os à cidade — tudo dentro do KaiaGen, sem programar.",
      "schema-f1": "Zoneamentos data-driven (cria os teus)",
      "schema-f2": "Importa GLBs de prédios multiandares + sidecar",
      "schema-f3": "Galeria de assets, preview e lint",
      "schema-f4": "Os zoneamentos passam ao editor 2D ao vivo",
      "schema-cta": "Obter o KaiaGen →",
      // Features
      "feat-eyebrow": "Features",
      "feat-h2": "Pensado para iteração rápida.",
      "feat-1-title": "Editor 2D estruturado",
      "feat-1-desc": "Desenha ruas e quarteirões com snap-to-grid, fillet e operações geométricas precisas. Cada decisão 2D propaga-se ao 3D sem trabalho manual.",
      "feat-2-title": "Render 3D em tempo real",
      "feat-2-desc": "Materiais realistas, sombras suaves e cenas de cidade completa a 60 FPS em hardware moderno. Inspecciona ao detalhe sem esperar renders.",
      "feat-3-title": "Terreno + drenagem",
      "feat-3-desc": "Terreno real, ruas que assentam no relevo, canais laterais, pontes e túneis. A cidade adapta-se ao terreno, não o contrário.",
      "feat-4-title": "Export universal",
      "feat-4-desc": "Exporta para Blender, Unreal Engine e USD (Twinmotion / Omniverse) em formatos standard da indústria. Materiais e geometria preservados.",
      "feat-5-title": "IA por MCP",
      "feat-5-desc": "Liga um assistente de IA como o Claude através do servidor MCP integrado e constrói cidades em linguagem natural — \"adiciona uma avenida, um parque e um rio\" — directamente no editor.",
      "feat-6-title": "Addon de Blender",
      "feat-6-desc": "Modela os teus próprios prédios e props no Blender e exporta GLB + sidecar com o addon do KaiaGen. Caem directamente na biblioteca de assets do Schema.",
      // Hardware
      "hw-eyebrow": "Requisitos de hardware",
      "hw-h2": "Que PC precisas?",
      "hw-lead": "Três tiers para o KaiaGen. A geração 3D da cidade é o limitador — dimensiona por ela.",
      "tier-min": "Mínimo",
      "tier-rec": "Recomendado",
      "tier-ideal": "Ideal",
      "hw-min-h3": "Funciona, mas sente-se",
      "hw-min-note": "Cenas com <code>Trees: dense</code> dão drops de FPS.",
      "hw-rec-h3": "Experiência fluída",
      "hw-rec-note": "Sweet spot: deixas de ter swap, viewport fluído.",
      "hw-ideal-h3": "Detalhe máximo, sem compromissos",
      "hw-ideal-note": "Cidades grandes, floresta densa, sem compromissos.",
      "hw-callout": "<strong>RAM é o factor mais sensível.</strong> O KaiaGen consome facilmente 2–4 GB em sessões de trabalho, mais em cidades grandes. 16 GB é o ponto onde deixas de ter swap.",
      // Pricing
      "price-eyebrow": "Preços",
      "price-h2": "Brevemente.",
      "price-lead": "O KaiaGen ainda não foi lançado. Os preços serão anunciados no lançamento — grátis para experimentar durante a beta.",
      "soon-title": "Ainda não lançado",
      "soon-desc": "Estamos a dar os últimos retoques no KaiaGen. Os preços chegam no lançamento — a beta é grátis para experimentar.",
      "price-popular": "Mais popular",
      "price-once": "compra única",
      "price-free": "Grátis",
      "price-personal-tier": "Personal",
      "price-personal-h3": "Para aprender e projectos pessoais",
      "price-personal-f1": "KaiaGen completo, todas as features",
      "price-personal-f2": "Todos os formatos de export (incl. USD)",
      "price-personal-f3": "Uso não-comercial apenas",
      "price-personal-f4": "Suporte da comunidade",
      "price-personal-cta": "Descarregar grátis",
      "price-indie-tier": "Indie",
      "price-indie-h3": "Para freelancers e devs solo",
      "price-indie-f1": "Tudo do Personal",
      "price-indie-f2": "1 licença comercial",
      "price-indie-f3": "Licença vitalícia",
      "price-indie-f4": "Suporte por email",
      "price-indie-cta": "Comprar Indie",
      "price-studio-tier": "Studio",
      "price-studio-h3": "Para estúdios e agências",
      "price-studio-f1": "Tudo do Indie",
      "price-studio-f2": "Até 5 licenças comerciais",
      "price-studio-f3": "Suporte prioritário",
      "price-studio-f4": "Acesso antecipado a novas features",
      "price-studio-cta": "Comprar Studio",
      "price-foot": "<strong>Grátis durante a beta v0.0.</strong> Os preços aplicam-se quando o KaiaGen 1.0 for lançado.",
      // Downloads
      "dl-eyebrow": "Downloads",
      "dl-h2": "Disponível para Windows, macOS e Linux.",
      "dl-lead": "Aplicação desktop nativa. Plataformas testadas: Windows 11 e macOS (Apple Silicon).",
      "dl-version": "v0.0 · em desenvolvimento",
      "dl-addon-h3": "Addon de Blender",
      "dl-addon-version": "Blender 4.x · GLB + sidecar",
      "dl-addon-btn": "Descarregar addon · .py",
      "dl-addon-docs": "Como funciona →",
      // FAQ
      "faq-eyebrow": "FAQ",
      "faq-h2": "Perguntas frequentes.",
      "faq-1-q": "Qual a diferença entre Base e Schema?",
      "faq-1-a": "Vivem na mesma app, o KaiaGen. A Base é a cidade em si — desenhas em 2D, geras em 3D. O Schema é onde crias zoneamentos e importas os teus prédios. Podes desenhar uma cidade inteira na Base sem nunca abrir o Schema.",
      "faq-6-q": "Como funciona a IA / MCP?",
      "faq-6-a": "O KaiaGen traz um servidor MCP. Ligas um assistente como o Claude e descreves o que queres — ruas, zonas, POIs, água — e ele constrói directamente no editor 2D, que depois gera em 3D. Continuas no controlo e podes editar tudo à mão.",
      "faq-7-q": "Como adiciono os meus próprios prédios?",
      "faq-7-a": "Modela-os no Blender e exporta com o addon do KaiaGen — ele escreve o GLB mais um ficheiro sidecar com andares e regras. Importa-o no Schema e fica disponível para os teus zoneamentos. Sem programar.",
      "faq-2-q": "Que formatos de export estão suportados?",
      "faq-2-a": "O KaiaGen exporta GLB (metros ou centímetros) e USD, aceites por Blender, Unreal Engine, Twinmotion e Omniverse. Materiais e geometria são preservados.",
      "faq-3-q": "Posso correr em GPU integrada?",
      "faq-3-a": "Sim. Intel Iris Xe, AMD Radeon 680M e Apple Silicon (M1/M2/M3) correm bem o Schema e cidades pequenas. Para cidades grandes recomenda-se GPU dedicada.",
      "faq-4-q": "O ficheiro de export está enorme. O que faço?",
      "faq-4-a": "Reduz a densidade de árvores nas definições de colocação (Trees: sparse ou off). Também podes desactivar os cabos elétricos ou os semáforos se não precisares.",
      "faq-5-q": "Há suporte para Linux?",
      "faq-5-a": "Tecnicamente sim, mas ainda não validámos oficialmente. Reports de bugs em Linux são bem-vindos.",
      // Footer
      "footer-desc": "Uma app para desenhar, gerar e povoar cidades procedurais.",
      "footer-meta": "© 2026 · Kaia Project · Todos os direitos reservados",
      // Page title
      "__title": "Kaia — Cidades Procedurais numa só app",
    },
    en: {
      "nav-apps": "KaiaGen",
      "nav-features": "Features",
      "nav-hardware": "Hardware",
      "nav-downloads": "Downloads",
      "nav-faq": "FAQ",
      "nav-pricing": "Pricing",
      "nav-cta": "Download",
      "hero-eyebrow": "Procedural cities · 2D → 3D · AI",
      "hero-h1": "Sketch the city.<br/>Populate the buildings.<br/><span class=\"gradient-text\">Generate the world.</span>",
      "hero-lead": "<strong>KaiaGen</strong> is one desktop app for procedural cities: sketch in 2D and generate in 3D, define zonings and buildings in the <strong>Schema</strong> workbench, drive it all with AI over <strong>MCP</strong>, and bring your own assets with the <strong>Blender add-on</strong>.",
      "hero-cta-start": "Get started",
      "hero-cta-apps": "What's inside →",
      "apps-eyebrow": "One app · one pipeline",
      "apps-h2": "Everything in KaiaGen.",
      "apps-lead": "KaiaMalha and KaiaDNA are now one tool. The city grid became the <strong>Base</strong> of KaiaGen; the old DNA became the <strong>Schema</strong>. Two modes, one app.",
      "base-tag": "2D sketch → 3D city",
      "base-desc": "The foundation of KaiaGen. Sketch the city layout in 2D — streets, blocks, zones, water — and the Base generates it in 3D with terrain, sidewalks, urban drainage, lighting and trees.",
      "base-f1": "2D editor with snap-to-grid + splines",
      "base-f2": "Realistic 3D generation with auto-optimisation",
      "base-f3": "Terrain, drainage, bridges, tunnels and viaducts",
      "base-f4": "Universal export to Blender, Unreal and USD",
      "base-cta": "Get KaiaGen →",
      "schema-tag": "Zonings + buildings",
      "schema-desc": "The workbench that replaced KaiaDNA. Create custom zonings, import your own building GLBs, set floors and rules, and apply them to the city — all inside KaiaGen, no coding.",
      "schema-f1": "Data-driven zonings (create your own)",
      "schema-f2": "Import multi-floor building GLBs + sidecars",
      "schema-f3": "Asset gallery, preview and lint",
      "schema-f4": "Zonings flow to the 2D editor live",
      "schema-cta": "Get KaiaGen →",
      "feat-eyebrow": "Features",
      "feat-h2": "Designed for fast iteration.",
      "feat-1-title": "Structured 2D editor",
      "feat-1-desc": "Draw streets and blocks with snap-to-grid, fillets and precise geometric operations. Every 2D decision propagates to 3D with no manual work.",
      "feat-2-title": "Real-time 3D render",
      "feat-2-desc": "Realistic materials, soft shadows and full city scenes at 60 FPS on modern hardware. Inspect every detail without waiting for renders.",
      "feat-3-title": "Terrain + drainage",
      "feat-3-desc": "Real terrain, streets that conform to relief, side channels, bridges and tunnels. The city adapts to the terrain, not the other way around.",
      "feat-4-title": "Universal export",
      "feat-4-desc": "Export to Blender, Unreal Engine and USD (Twinmotion / Omniverse) in industry-standard formats. Materials and geometry preserved.",
      "feat-5-title": "AI over MCP",
      "feat-5-desc": "Connect an AI assistant like Claude through the built-in MCP server and build cities in natural language — \"add an avenue, a park and a river\" — straight into the editor.",
      "feat-6-title": "Blender add-on",
      "feat-6-desc": "Model your own buildings and props in Blender and export GLB + sidecar with the KaiaGen add-on. They drop straight into the Schema asset library.",
      "hw-eyebrow": "Hardware requirements",
      "hw-h2": "What PC do you need?",
      "hw-lead": "Three tiers for KaiaGen. The 3D city generation is the limiter — size for it.",
      "tier-min": "Minimum",
      "tier-rec": "Recommended",
      "tier-ideal": "Ideal",
      "hw-min-h3": "Works, but you'll feel it",
      "hw-min-note": "Scenes with <code>Trees: dense</code> cause FPS drops.",
      "hw-rec-h3": "Smooth experience",
      "hw-rec-note": "Sweet spot: no more swap, fluid viewport.",
      "hw-ideal-h3": "Full detail, no compromises",
      "hw-ideal-note": "Large cities, dense forest, no compromises.",
      "hw-callout": "<strong>RAM is the most sensitive factor.</strong> KaiaGen easily uses 2–4 GB during work sessions, more on large cities. 16 GB is where you stop swapping.",
      "price-eyebrow": "Pricing",
      "price-h2": "Coming soon.",
      "price-lead": "KaiaGen isn't launched yet. Pricing will be announced at launch — free to try during the beta.",
      "soon-title": "Not launched yet",
      "soon-desc": "We're putting the finishing touches on KaiaGen. Pricing lands at launch — the beta is free to try.",
      "price-popular": "Most popular",
      "price-once": "one-time",
      "price-free": "Free",
      "price-personal-tier": "Personal",
      "price-personal-h3": "For learning and personal projects",
      "price-personal-f1": "Full KaiaGen, all features",
      "price-personal-f2": "All export formats (incl. USD)",
      "price-personal-f3": "Non-commercial use only",
      "price-personal-f4": "Community support",
      "price-personal-cta": "Download free",
      "price-indie-tier": "Indie",
      "price-indie-h3": "For freelancers and solo devs",
      "price-indie-f1": "Everything in Personal",
      "price-indie-f2": "1 commercial seat",
      "price-indie-f3": "Lifetime licence",
      "price-indie-f4": "Email support",
      "price-indie-cta": "Buy Indie",
      "price-studio-tier": "Studio",
      "price-studio-h3": "For studios and agencies",
      "price-studio-f1": "Everything in Indie",
      "price-studio-f2": "Up to 5 commercial seats",
      "price-studio-f3": "Priority support",
      "price-studio-f4": "Early access to new features",
      "price-studio-cta": "Buy Studio",
      "price-foot": "<strong>Free during the v0.0 beta.</strong> Prices apply when KaiaGen 1.0 ships.",
      "dl-eyebrow": "Downloads",
      "dl-h2": "Available for Windows, macOS and Linux.",
      "dl-lead": "Native desktop app. Tested platforms: Windows 11 and macOS (Apple Silicon).",
      "dl-version": "v0.0 · in development",
      "dl-addon-h3": "Blender add-on",
      "dl-addon-version": "Blender 4.x · GLB + sidecar",
      "dl-addon-btn": "Download add-on · .py",
      "dl-addon-docs": "How it works →",
      "faq-eyebrow": "FAQ",
      "faq-h2": "Frequently asked questions.",
      "faq-1-q": "What's the difference between Base and Schema?",
      "faq-1-a": "Both live in the same app, KaiaGen. The Base is the city itself — sketch in 2D, generate in 3D. Schema is where you create zonings and import your own buildings. You can draw a whole city in the Base without ever opening Schema.",
      "faq-6-q": "How does the AI / MCP work?",
      "faq-6-a": "KaiaGen ships with an MCP server. Connect an assistant like Claude and describe what you want — roads, zones, POIs, water — and it builds straight into the 2D editor, which then generates in 3D. You stay in control and can edit everything by hand.",
      "faq-7-q": "How do I add my own buildings?",
      "faq-7-a": "Model them in Blender and export with the KaiaGen add-on — it writes the GLB plus a sidecar file describing floors and rules. Import it in Schema and it becomes available to your zonings. No coding.",
      "faq-2-q": "Which export formats are supported?",
      "faq-2-a": "KaiaGen exports GLB (metres or centimetres) and USD, accepted by Blender, Unreal Engine, Twinmotion and Omniverse. Materials and geometry are preserved.",
      "faq-3-q": "Can I run on integrated GPU?",
      "faq-3-a": "Yes. Intel Iris Xe, AMD Radeon 680M and Apple Silicon (M1/M2/M3) handle Schema and small cities well. A discrete GPU is recommended for large cities.",
      "faq-4-q": "My export file is huge. What do I do?",
      "faq-4-a": "Reduce tree density in the placement settings (Trees: sparse or off). You can also disable power cables or traffic lights if you don't need them.",
      "faq-5-q": "Is Linux supported?",
      "faq-5-a": "Technically yes, but it's not officially validated yet. Linux bug reports are welcome.",
      "footer-desc": "One app to sketch, generate and populate procedural cities.",
      "footer-meta": "© 2026 · Kaia Project · All rights reserved",
      "__title": "Kaia — Procedural Cities, one app",
    },
  };

  const LANG_KEY = "kaia.lang";
  const CUR_KEY = "kaia.currency";

  function applyLang(lang) {
    const dict = STRINGS[lang] || STRINGS.pt;
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    if (dict.__title) document.title = dict.__title;
    try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}
  }

  function initLang() {
    let stored = null;
    try { stored = localStorage.getItem(LANG_KEY); } catch (_) {}
    const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
    // Default to English. Only fall back to PT when the browser language is
    // explicitly Portuguese and the user has not picked otherwise.
    const lang = stored || (browser === "pt" ? "pt" : "en");
    applyLang(lang);

    const btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("data-lang") === "pt" ? "en" : "pt";
        applyLang(next);
      });
    }
  }

  // ===========================================================
  // Currency switcher (EUR / USD)
  // ===========================================================
  function applyCurrency(cur) {
    const c = cur === "USD" ? "USD" : "EUR";
    document.documentElement.setAttribute("data-cur", c);
    const attr = c === "USD" ? "data-usd" : "data-eur";
    document.querySelectorAll("[data-eur][data-usd]").forEach((el) => {
      const v = el.getAttribute(attr);
      if (v != null) el.textContent = v;
    });
    try { localStorage.setItem(CUR_KEY, c); } catch (_) {}
  }

  function initCurrency() {
    let stored = null;
    try { stored = localStorage.getItem(CUR_KEY); } catch (_) {}
    // Default to EUR unless the browser locale is US-style English.
    const locale = (navigator.language || "en").toLowerCase();
    const guess = locale === "en-us" ? "USD" : "EUR";
    applyCurrency(stored || guess);

    const btn = document.getElementById("cur-toggle");
    if (btn) {
      btn.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("data-cur") === "EUR" ? "USD" : "EUR";
        applyCurrency(next);
      });
    }
  }

  // ===========================================================
  // Hardware tabs (no-op when there's a single panel)
  // ===========================================================
  const tabs = document.querySelectorAll('.hw-tab');
  const panels = document.querySelectorAll('.hw-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;
      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      panels.forEach((p) => {
        p.classList.toggle('is-active', p.id === targetId);
      });
    });
  });

  // ===========================================================
  // Smooth scroll for in-page nav
  // ===========================================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  initLang();
  initCurrency();
})();
