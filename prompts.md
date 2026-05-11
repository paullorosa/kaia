# Kaia — Prompts para Imagens do Site

Prompts de geração de imagens (Midjourney, DALL-E, Stable Diffusion, Flux) para substituir os placeholders visuais do site.

**Brand colors:**
- `#5fb3ff` — azul KaiaMalha
- `#a78bfa` — roxo KaiaDNA
- `#f0a868` — laranja warm accent
- `#0a0e14` — preto background
- `#111721` — superfícies elevadas

**Estilo geral:** dark mode, technical, isometric/3D, gradients suaves entre azul e roxo, minimalista mas com detalhe técnico. Estética "design tool meets game engine" — pensa Figma, Linear, Houdini.

---

## 1. Hero — Visual principal

**Localização:** `index.html` → `.hero__visual` (substitui o `.grid-stack` CSS)

**Tamanho:** 960×960 px (quadrado, retina-ready)

**Prompt:**
```
Isometric 3D render of a procedural city grid floating on a dark navy
background (#0a0e14). Top-down 45° view. Three stacked translucent
layers: (1) a wireframe grid of city blocks glowing in cyan-blue
(#5fb3ff), (2) winding roads in purple-magenta (#a78bfa) overlaid,
(3) scattered tree dots in warm orange (#f0a868) on top. Soft volumetric
light from above-left. Subtle bloom and depth-of-field. The whole
composition feels like a hologram of a future city. Minimal,
architectural, technical. No text. 4K, octane render, ray-traced
reflections, ultra-detailed but clean.
```

**Alternativa abstrata:**
```
Abstract 3D scene: floating geometric primitives forming a stylized
city — cyan boxes for buildings, purple ribbons for roads, orange
spheres for vegetation. Dark background with subtle grid floor.
Isometric perspective. Glowing edges, soft neon rim lighting.
Minimal, editorial, futuristic. No text, no UI elements.
```

---

## 2. KaiaMalha — App card icon/screenshot

**Localização:** `index.html` → `.app-card--malha`

**Tamanho:** 800×500 px (16:10 ratio)

**Prompt:**
```
Screenshot mockup of a 2D urban planning editor on a dark UI
(#0a0e14 background, #111721 panels). Shows a top-down city plan
with intersecting roads, rectangular building blocks of various
sizes, sidewalks outlined, and trees as small circles. Cyan accent
(#5fb3ff) for selected elements, white lines for road centers, grey
fill for sidewalks. A left toolbar shows drawing tools (line, polygon,
rotate). A right inspector panel shows numeric properties. Style:
Figma-meets-AutoCAD, clean, technical. No real text — use placeholder
glyph blocks. 4K, sharp, professional.
```

**Alternativa (icon style):**
```
Flat isometric icon of a city grid with four square city blocks
arranged 2x2, separated by glowing cyan roads. Dark background.
Minimal, sharp edges, single light source from top-left. Brand
color #5fb3ff dominant. Suitable as a 200×200 app icon.
```

---

## 3. KaiaDNA — App card icon/screenshot

**Localização:** `index.html` → `.app-card--dna`

**Tamanho:** 800×500 px (16:10 ratio)

**Prompt:**
```
Screenshot mockup of a 3D building rules editor on a dark UI
(#0a0e14 background). Shows a single procedural building in the
center — a parametric apartment block with visible "rule lines"
overlaid: dashed purple (#a78bfa) lines marking facade divisions,
window placements, floor heights, setback rules. A left panel lists
parameters (Height: 24m, Floors: 8, Window grid: 4×6...). A right
panel shows a 3D wireframe preview. The aesthetic blends CAD,
Grasshopper, and modern design tools. Purple accents dominant. No
real text, use placeholder glyphs. 4K, technical, clean.
```

**Alternativa (icon style):**
```
Flat 3D icon: a single tall building made of stacked translucent
floors with a DNA helix wrapped around it in purple (#a78bfa) and
cyan (#5fb3ff). Dark background. Minimal, glowing edges. Suitable
as a 200×200 app icon. Represents parametric building rules.
```

---

## 4. Features section — 6 feature illustrations

**Localização:** `index.html` → `.features-grid` (substitui os divs `.feature__icon` com texto "2D", "3D", etc.)

**Tamanho:** 240×240 px cada (quadrado)

**Estilo unificado:** ícones isométricos, line art com fill subtil, brand colors, dark background. Devem parecer uma família coerente.

### 4.1 Editor 2D estruturado
```
Isometric icon, 240×240, dark background #111721. Top-down view of
a 2D drawing tool: rectangles being snapped to a grid with cyan
(#5fb3ff) snap-points glowing at corners. A small cursor arrow.
Clean line art with translucent fill. Minimal, technical.
```

### 4.2 Render 3D em tempo real
```
Isometric icon, 240×240, dark background. A small 3D scene rendered
inside a transparent cube: a couple of geometric buildings with
realistic materials, soft shadows, ambient occlusion. Cyan and purple
accents. Represents real-time 3D rendering. Clean and minimal.
```

### 4.3 Terreno + drenagem
```
Isometric icon, 240×240, dark background. A cross-section slice of
terrain: layered ground (brown to grey gradient), a curved road on
top with subtle drainage channels on each side, water flowing.
Orange (#f0a868) for the road surface. Educational diagram style.
```

### 4.4 Export universal
```
Isometric icon, 240×240, dark background. A stylized 3D file icon
with the letters "USD" on it, glowing in cyan. Three arrows point
outward from it to three smaller icons representing Blender (orange),
Unreal Engine (blue), and Maya (teal). Represents export pipeline.
```

### 4.5 Configuração dinâmica
```
Isometric icon, 240×240, dark background. A floating control panel
with three sliders glowing cyan, hovering above a small 3D scene
that's morphing in response. Cyan and purple accents. Represents
real-time parametric control.
```

### 4.6 DNA partilhado
```
Isometric icon, 240×240, dark background. A double helix in purple
(#a78bfa) connecting two small building icons. The helix represents
shared template data flowing between two apps. Minimal, clean.
```

---

## 5. Open Graph / social share image

**Localização:** `<meta property="og:image">` (adicionar ao `index.html`)

**Tamanho:** 1200×630 px

**Prompt:**
```
Wide banner, 1200×630 px, dark background #0a0e14. On the left side:
the word "Kaia" in bold white sans-serif (Inter Black), with a small
gradient K logo (cyan to purple) above it. Subtitle below in muted
grey: "Ferramentas para cidades procedurais". On the right side:
an isometric 3D scene of a small procedural city — geometric
buildings with cyan glowing edges, purple road ribbons winding
between them, scattered orange tree dots. Soft volumetric lighting.
Editorial, minimal, technical. No other text.
```

---

## 6. Favicon

**Localização:** `favicon.ico` ou `favicon.svg`

**Tamanho:** 512×512 px (SVG vector preferred)

**Prompt:**
```
A bold letter "K" in white, set on a rounded square background with
a diagonal gradient from cyan (#5fb3ff) top-left to purple (#a78bfa)
bottom-right. Letter is geometric, slightly heavier than Inter Black.
Suitable for app icon and favicon. Crisp at 16×16 px. Flat design,
no shadows, no gradients on the letter itself — only on the
background square.
```

---

## 7. Downloads section — Platform icons (opcional)

**Localização:** `.dl-buttons` (junto a "Windows · .exe" etc.)

**Estilo:** ícones monocromáticos brancos/cinza, 24×24 px, line art

- **Windows:** logotipo Windows 11 oficial em line art
- **macOS:** maçã estilizada (line art)
- **Linux:** pinguim Tux simplificado (line art geométrico)

Estes podem vir de bibliotecas existentes como Lucide, Tabler, ou Simple Icons — não precisam de IA.

---

## Notas de geração

- **Aspect ratio importa:** especifica sempre no prompt. Midjourney usa `--ar 16:10`, DALL-E aceita widths.
- **Background:** força `#0a0e14` ou "dark navy background" para coerência.
- **Sem texto:** modelos generativos escrevem texto mal. Adiciona texto via CSS/HTML depois.
- **Iteração:** gera 3-4 variantes por prompt, escolhe a melhor.
- **Pós-produção:** passa por Figma ou Photoshop para ajustes finais — niveis de preto, recorte, alinhamento.

## Onde colocar as imagens

Criar pasta:
```
Kaia/
└── images/
    ├── hero.webp           # 1
    ├── kaiamalha.webp     # 2
    ├── kaiadna.webp        # 3
    ├── features/
    │   ├── editor-2d.svg   # 4.1
    │   ├── render3d.svg    # 4.2
    │   ├── terrain.svg     # 4.3
    │   ├── export.svg      # 4.4
    │   ├── dynamic.svg     # 4.5
    │   └── dna.svg         # 4.6
    ├── og-image.webp       # 5
    └── favicon.svg         # 6
```

**Formato:** WebP para fotos/renders (melhor compressão), SVG para ícones (escala perfeita).
