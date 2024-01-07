// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    'floating-vue/nuxt',
    
  ],



  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: "TheTobi"
    }
  }
})