# Kaia — landing page

Site estático que apresenta o ecossistema Kaia (CaiaGrelha + CaiaDNA).

## Estrutura

```
Kaia/
├── index.html      Landing page completa (hero, apps, features, hardware, downloads, FAQ)
├── styles.css      Estilos — dark theme, gradiente brand
├── script.js       Tabs do hardware + smooth scroll
└── README.md       Este ficheiro
```

## Correr localmente

Abrir o `index.html` directamente no browser, ou servir com um web server simples:

```bash
# Python 3
python -m http.server 8000

# Node
npx serve .
```

Depois abrir `http://localhost:8000`.

## Deploy

Site estático sem build step — funciona em:
- GitHub Pages (push para `gh-pages` ou pasta `/docs`)
- Netlify / Vercel (drag-and-drop ou ligar repo)
- Qualquer hosting estático (S3, Cloudflare Pages, etc.)

## Customizar

- **Cores brand:** ver `:root` em `styles.css` — `--grelha`, `--dna`, `--accent`
- **Tiers de hardware:** secção `#hardware` em `index.html`
- **Links de download:** secção `#downloads` (placeholders `href="#"`)
