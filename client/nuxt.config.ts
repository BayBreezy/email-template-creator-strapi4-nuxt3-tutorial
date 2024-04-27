// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@samk-dev/nuxt-vcalendar",
    "@vee-validate/nuxt",
    "@morev/vue-transitions/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/strapi",
    "nuxt-unlayer",
  ],

  tailwindcss: { exposeConfig: true },
  colorMode: { classSuffix: "" },
  experimental: { typedPages: true },
  imports: {
    imports: [
      { from: "tailwind-variants", name: "tv" },
      { from: "tailwind-variants", name: "VariantProps", type: true },
      {
        from: "vue-sonner",
        name: "toast",
        as: "useSonner",
      },
    ],
  },

  app: {
    head: {
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/pdfmake.min.js",
          defer: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/vfs_fonts.min.js",
          defer: true,
        },
      ],
    },
  },

  build: {
    transpile: ["vue-sonner"],
  },

  strapi: {
    auth: { populate: ["role"] },
    cookie: { maxAge: 60 * 60 * 24 * 30 },
    cookieName: "SOME_TOKEN",
    devtools: true,
    url: process.env.STRAPI_URL,
  },
});
