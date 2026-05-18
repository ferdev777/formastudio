# Portfolio — Fernando Hirschfeld

**Stack:** Astro 4 · TypeScript · Vanilla JS (zero frameworks) · CSS puro

## Instalación local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera /dist listo para deploy
npm run preview   # previsualiza el build
```

## Estructura

```
src/
├── i18n/
│   ├── ui.ts          # Todos los strings ES / EN
│   └── utils.ts       # getLangFromUrl, useTranslations, getLocalizedPath
├── data/
│   └── experience.ts  # Experiencia laboral tipada
├── layouts/
│   └── Layout.astro   # <html>, <head>, meta SEO, hreflang
├── components/
│   ├── NavBar.astro      # Navbar fija + switch de idioma (links puros)
│   ├── Hero.astro         # Sección presentación (estático)
│   ├── Experience.astro   # Experiencia laboral (render en build time)
│   ├── Projects.astro     # Repos GitHub (vanilla JS en cliente)
│   ├── Contact.astro      # Formulario Formspree (vanilla JS)
│   └── Footer.astro
├── pages/
│   ├── index.astro        # / → Español
│   └── en/
│       └── index.astro    # /en/ → English
└── styles/
    └── global.css         # Design tokens + todos los estilos
```

## Rutas de idioma

| URL    | Idioma  |
|--------|---------|
| `/`    | Español |
| `/en/` | English |

El switch de idioma en el navbar son **links estáticos** (sin JS).
Astro i18n routing se encarga del resto.

## Configurar el formulario de contacto

1. Registrarse en [formspree.io](https://formspree.io) (plan free: 50 envíos/mes)
2. Crear un nuevo form y copiar el ID
3. En `src/components/Contact.astro`, reemplazar:

```ts
const FORMSPREE_ENDPOINT = "https://formspree.io/f/TU_FORM_ID";
```

## Deploy en Vercel

```bash
# Primera vez
npx vercel

# Deploy a producción
npx vercel --prod
```

Vercel detecta Astro automáticamente, sin configuración adicional.

## Personalización rápida

- **Agregar/editar experiencia** → `src/data/experience.ts`
- **Cambiar textos** → `src/i18n/ui.ts`
- **Cambiar colores** → `src/styles/global.css` (variables en `:root`)
- **Cambiar dominio** → `astro.config.mjs` → `site:`
