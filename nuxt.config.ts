// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@pinia/nuxt", "@nuxtjs/color-mode"],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix",
    locales: [
      {
        code: "tr-TR",
        iso: "tr-TR",
        name: "Türkçe(Türkiye)",
        file: "tr-TR.json",
      },
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json",
      },
    ],
    defaultLocale: "en-US",
  },
});
