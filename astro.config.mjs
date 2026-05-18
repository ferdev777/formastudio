import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://fernandohirschfeld.dev", // cambiá por tu dominio
  compressHTML: true,
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false, // /  → ES   |   /en/ → EN
    },
  },
});
