// Kaia — landing page interactions

(function () {
  // ===========================================================
  // i18n — PT / EN. Strings keep inline HTML where the original
  // markup used <strong>, <code>, <br>, etc.
  // ===========================================================
  const STRINGS = {
    pt: {
      // Nav
      "nav-apps": "Apps",
      "nav-features": "Features",
      "nav-hardware": "Hardware",
      "nav-downloads": "Downloads",
      "nav-faq": "FAQ",
      "nav-pricing": "Preços",
      "nav-cta": "Descarregar",
      // Hero
      "hero-eyebrow": "Cidades procedurais · 2D → 3D",
      "hero-h1": "Desenha a cidade.<br/>Parametriza os prédios.<br/><span class=\"gradient-text\">Gera o mundo.</span>",
      "hero-lead": "Kaia é um ecossistema de duas ferramentas desktop que trabalham em conjunto: <strong>KaiaMalha</strong> para esculpir a cidade, <strong>KaiaDNA</strong> para definir as regras dos prédios que a habitam.",
      "hero-cta-start": "Começar",
      "hero-cta-apps": "Ver as apps →",
      // Apps section
      "apps-eyebrow": "Duas apps · um pipeline",
      "apps-h2": "Cidade e prédios, separados por uma razão.",
      "apps-lead": "Cada app faz uma coisa e fá-la bem. Trabalham em conjunto, mas podem ser usadas de forma independente.",
      "malha-tag": "Editor 2D → cidade 3D",
      "malha-desc": "Desenha o layout da cidade em 2D — ruas, quarteirões, zonas — e o KaiaMalha extrude tudo em 3D com terreno, calçadas, drenagem urbana e árvores.",
      "malha-f1": "Editor 2D com snap-to-grid + spline",
      "malha-f2": "Geração 3D realista com optimização automática",
      "malha-f3": "Export universal para Blender, Unreal e Maya",
      "malha-f4": "Adaptação automática ao terreno",
      "malha-cta": "Descarregar KaiaMalha →",
      "dna-tag": "Regras dos prédios",
      "dna-desc": "Define a geometria, parametrização e regras de validação dos prédios que vão povoar a cidade. Um prédio de cada vez, com inspector, asset manager e renderer de referência.",
      "dna-f1": "Rule editor com validação",
      "dna-f2": "Building inspector + asset manager",
      "dna-f3": "Reference renderer (preview 3D)",
      "dna-f4": "Templates partilháveis com o KaiaMalha",
      "dna-cta": "Descarregar KaiaDNA →",
      // Features
      "feat-eyebrow": "Features",
      "feat-h2": "Pensado para iteração rápida.",
      "feat-1-title": "Editor 2D estruturado",
      "feat-1-desc": "Desenha ruas e quarteirões com snap-to-grid, fillet e operações geométricas precisas. Cada decisão 2D propaga-se ao 3D sem trabalho manual.",
      "feat-2-title": "Render 3D em tempo real",
      "feat-2-desc": "Materiais realistas, sombras suaves e cenas de cidade completa a 60 FPS em hardware moderno. Inspecciona ao detalhe sem esperar renders.",
      "feat-3-title": "Terreno + drenagem",
      "feat-3-desc": "Terreno real, ruas que assentam no relevo e perfis com canais laterais. A cidade adapta-se ao terreno, não o contrário.",
      "feat-4-title": "Export universal",
      "feat-4-desc": "Exporta para Blender, Unreal Engine e Maya num formato standard da indústria. Materiais e geometria preservados.",
      "feat-5-title": "Configuração dinâmica",
      "feat-5-desc": "Sliders 3D em settings para ajustar densidade de árvores, semáforos, drenagem. Tweak em tempo real sem rebuild.",
      "feat-6-title": "DNA partilhado",
      "feat-6-desc": "Templates de prédios criados no KaiaDNA carregam directamente no KaiaMalha. Um único source-of-truth para as regras.",
      // Hardware
      "hw-eyebrow": "Requisitos de hardware",
      "hw-h2": "Que PC precisas?",
      "hw-lead": "Três tiers por aplicação. Se usares ambas, dimensiona pelo KaiaMalha — é o limitador.",
      "tier-min": "Mínimo",
      "tier-rec": "Recomendado",
      "tier-ideal": "Ideal",
      "hw-malha-min-h3": "Funciona, mas sente-se",
      "hw-malha-min-note": "Cenas com <code>Trees: dense</code> dão drops de FPS.",
      "hw-malha-rec-h3": "Experiência fluída",
      "hw-malha-rec-note": "Sweet spot: deixas de ter swap, viewport fluído.",
      "hw-malha-ideal-h3": "Maputo full-detail",
      "hw-malha-ideal-note": "Cidades grandes, floresta densa, sem compromissos.",
      "hw-dna-min-h3": "Templates simples",
      "hw-dna-min-note": "Validar e visualizar templates já existentes.",
      "hw-dna-rec-h3": "Trabalho diário",
      "hw-dna-rec-note": "Editar regras + asset manager activo sem fricção.",
      "hw-dna-ideal-h3": "Library grande",
      "hw-dna-ideal-note": "Iteração intensiva com ambas as apps abertas.",
      "hw-callout": "<strong>RAM é o factor mais sensível.</strong> Ambas as aplicações consomem facilmente 2–4 GB sozinhas em sessões de trabalho. 16 GB é o ponto onde deixas de ter swap.",
      // Pricing
      "price-eyebrow": "Preços",
      "price-h2": "Uma compra. Duas apps. Tuas.",
      "price-lead": "Sem subscrição. Licença vitalícia. Todos os tiers incluem KaiaMalha e KaiaDNA.",
      "price-popular": "Mais popular",
      "price-once": "compra única",
      "price-free": "Grátis",
      "price-personal-tier": "Personal",
      "price-personal-h3": "Para aprender e projectos pessoais",
      "price-personal-f1": "Ambas as apps, todas as features",
      "price-personal-f2": "Todos os formatos de export",
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
      "price-foot": "<strong>Grátis durante a beta v0.0.</strong> Os preços aplicam-se quando o Kaia 1.0 for lançado.",
      // Downloads
      "dl-eyebrow": "Downloads",
      "dl-h2": "Disponível para Windows, macOS e Linux.",
      "dl-lead": "Aplicações desktop nativas. Plataformas testadas: Windows 11 e macOS (Apple Silicon).",
      "dl-version": "v0.0 · em desenvolvimento",
      // FAQ
      "faq-eyebrow": "FAQ",
      "faq-h2": "Perguntas frequentes.",
      "faq-1-q": "Tenho que usar as duas apps?",
      "faq-1-a": "Não. O KaiaMalha funciona com templates de prédio default e consegues desenhar uma cidade inteira sem nunca abrir o KaiaDNA. O KaiaDNA é para quem quer criar regras de prédios personalizadas.",
      "faq-2-q": "Que formatos de export estão suportados?",
      "faq-2-a": "KaiaMalha exporta num formato universal aceite por Blender, Unreal Engine e Maya. Materiais e geometria são preservados.",
      "faq-3-q": "Posso correr em GPU integrada?",
      "faq-3-a": "Sim. Intel Iris Xe, AMD Radeon 680M e Apple Silicon (M1/M2/M3) correm muito bem o KaiaDNA e cenas pequenas do KaiaMalha. Para cidades grandes recomenda-se GPU dedicada.",
      "faq-4-q": "O ficheiro de export está enorme. O que faço?",
      "faq-4-a": "Reduz a densidade de árvores no Inspector → 3D View (Trees: Sparse ou Off). Também podes desactivar a opção de semáforos se não precisares.",
      "faq-5-q": "Há suporte para Linux?",
      "faq-5-a": "Tecnicamente sim, mas ainda não validámos oficialmente. Reports de bugs em Linux são bem-vindos.",
      // Footer
      "footer-desc": "Ferramentas para desenhar, parametrizar e gerar cidades procedurais.",
      "footer-meta": "© 2026 · Kaia Project · Todos os direitos reservados",
      // Page title
      "__title": "Kaia — Ferramentas para Cidades Procedurais",
    },
    en: {
      "nav-apps": "Apps",
      "nav-features": "Features",
      "nav-hardware": "Hardware",
      "nav-downloads": "Downloads",
      "nav-faq": "FAQ",
      "nav-pricing": "Pricing",
      "nav-cta": "Download",
      "hero-eyebrow": "Procedural cities · 2D → 3D",
      "hero-h1": "Sketch the city.<br/>Parametrise the buildings.<br/><span class=\"gradient-text\">Generate the world.</span>",
      "hero-lead": "Kaia is an ecosystem of two desktop tools that work together: <strong>KaiaMalha</strong> to shape the city, <strong>KaiaDNA</strong> to define the rules of the buildings that fill it.",
      "hero-cta-start": "Get started",
      "hero-cta-apps": "See the apps →",
      "apps-eyebrow": "Two apps · one pipeline",
      "apps-h2": "City and buildings, split by design.",
      "apps-lead": "Each app does one thing and does it well. They work together, but can also be used independently.",
      "malha-tag": "2D editor → 3D city",
      "malha-desc": "Sketch the city layout in 2D — streets, blocks, zones — and KaiaMalha extrudes everything in 3D with terrain, sidewalks, urban drainage and trees.",
      "malha-f1": "2D editor with snap-to-grid + spline",
      "malha-f2": "Realistic 3D generation with automatic optimisation",
      "malha-f3": "Universal export to Blender, Unreal and Maya",
      "malha-f4": "Automatic terrain adaptation",
      "malha-cta": "Download KaiaMalha →",
      "dna-tag": "Building rules",
      "dna-desc": "Define the geometry, parameters and validation rules for the buildings that populate the city. One building at a time, with inspector, asset manager and reference renderer.",
      "dna-f1": "Rule editor with validation",
      "dna-f2": "Building inspector + asset manager",
      "dna-f3": "Reference renderer (3D preview)",
      "dna-f4": "Templates shareable with KaiaMalha",
      "dna-cta": "Download KaiaDNA →",
      "feat-eyebrow": "Features",
      "feat-h2": "Designed for fast iteration.",
      "feat-1-title": "Structured 2D editor",
      "feat-1-desc": "Draw streets and blocks with snap-to-grid, fillets and precise geometric operations. Every 2D decision propagates to 3D with no manual work.",
      "feat-2-title": "Real-time 3D render",
      "feat-2-desc": "Realistic materials, soft shadows and full city scenes at 60 FPS on modern hardware. Inspect every detail without waiting for renders.",
      "feat-3-title": "Terrain + drainage",
      "feat-3-desc": "Real terrain, streets that conform to relief, profiles with side channels. The city adapts to the terrain, not the other way around.",
      "feat-4-title": "Universal export",
      "feat-4-desc": "Export to Blender, Unreal Engine and Maya in an industry-standard format. Materials and geometry preserved.",
      "feat-5-title": "Dynamic configuration",
      "feat-5-desc": "3D sliders in settings to tune tree density, traffic lights, drainage. Live tweaking with no rebuild.",
      "feat-6-title": "Shared DNA",
      "feat-6-desc": "Building templates created in KaiaDNA load directly in KaiaMalha. A single source of truth for the rules.",
      "hw-eyebrow": "Hardware requirements",
      "hw-h2": "What PC do you need?",
      "hw-lead": "Three tiers per app. If you use both, size for KaiaMalha — it's the limiter.",
      "tier-min": "Minimum",
      "tier-rec": "Recommended",
      "tier-ideal": "Ideal",
      "hw-malha-min-h3": "Works, but you'll feel it",
      "hw-malha-min-note": "Scenes with <code>Trees: dense</code> cause FPS drops.",
      "hw-malha-rec-h3": "Smooth experience",
      "hw-malha-rec-note": "Sweet spot: no more swap, fluid viewport.",
      "hw-malha-ideal-h3": "Maputo full-detail",
      "hw-malha-ideal-note": "Large cities, dense forest, no compromises.",
      "hw-dna-min-h3": "Simple templates",
      "hw-dna-min-note": "Validate and preview existing templates.",
      "hw-dna-rec-h3": "Daily work",
      "hw-dna-rec-note": "Edit rules + asset manager open without friction.",
      "hw-dna-ideal-h3": "Large library",
      "hw-dna-ideal-note": "Intensive iteration with both apps open.",
      "hw-callout": "<strong>RAM is the most sensitive factor.</strong> Both apps easily use 2–4 GB on their own during work sessions. 16 GB is where you stop swapping.",
      "price-eyebrow": "Pricing",
      "price-h2": "One purchase. Both apps. Yours.",
      "price-lead": "No subscription. Lifetime licence. All tiers include KaiaMalha and KaiaDNA.",
      "price-popular": "Most popular",
      "price-once": "one-time",
      "price-free": "Free",
      "price-personal-tier": "Personal",
      "price-personal-h3": "For learning and personal projects",
      "price-personal-f1": "Both apps, full features",
      "price-personal-f2": "All export formats",
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
      "price-foot": "<strong>Free during the v0.0 beta.</strong> Prices apply when Kaia 1.0 ships.",
      "dl-eyebrow": "Downloads",
      "dl-h2": "Available for Windows, macOS and Linux.",
      "dl-lead": "Native desktop apps. Tested platforms: Windows 11 and macOS (Apple Silicon).",
      "dl-version": "v0.0 · in development",
      "faq-eyebrow": "FAQ",
      "faq-h2": "Frequently asked questions.",
      "faq-1-q": "Do I have to use both apps?",
      "faq-1-a": "No. KaiaMalha ships with default building templates and you can draw an entire city without ever opening KaiaDNA. KaiaDNA is for those who want to author custom building rules.",
      "faq-2-q": "Which export formats are supported?",
      "faq-2-a": "KaiaMalha exports in a universal format accepted by Blender, Unreal Engine and Maya. Materials and geometry are preserved.",
      "faq-3-q": "Can I run on integrated GPU?",
      "faq-3-a": "Yes. Intel Iris Xe, AMD Radeon 680M and Apple Silicon (M1/M2/M3) handle KaiaDNA and small KaiaMalha scenes well. A discrete GPU is recommended for large cities.",
      "faq-4-q": "My export file is huge. What do I do?",
      "faq-4-a": "Reduce tree density in Inspector → 3D View (Trees: Sparse or Off). You can also disable the traffic-lights option if you don't need it.",
      "faq-5-q": "Is Linux supported?",
      "faq-5-a": "Technically yes, but it's not officially validated yet. Linux bug reports are welcome.",
      "footer-desc": "Tools to sketch, parametrise and generate procedural cities.",
      "footer-meta": "© 2026 · Kaia Project · All rights reserved",
      "__title": "Kaia — Tools for Procedural Cities",
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
  // Hardware tabs
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
