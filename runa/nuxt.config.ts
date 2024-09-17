export default defineNuxtConfig({
  routeRules: {
    // Установите prerender в true, чтобы настроить предварительный рендеринг.
    "/rss.xml": { prerender: true },
    "/this-DOES-NOT-get-prerendered": { prerender: false },
  },
});