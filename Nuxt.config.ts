// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      viewport: "width=device-width, initial-scale=1, maximum-scale=5",
      charset: "utf-8",
      meta: [
        { name: "name", content: "iSabi Ai" },
        { name: "geo.region", content: "NG" },
        {
          property: "business:contact_data:email",
          content: "hello@isabi.ai",
        },
        {
          property: "business:contact_data:website",
          content: "https://isabi.ai",
        },
        { property: "business:contact_data:country_name", content: "Nigeria" },
        { property: "og:url", content: "https://isabi Ai" },
        { name: "title", content: "iSabi Ai" },
        {
          name: "description",
          content:
            "Your #1 Geo-Based Event Management System for event coverage and ticketing",
        },
        {
          name: "keywords",
          content:
            "multipurpose ai,ai bot,multipurpose ai bot,multipurpose bot,isabi bot, isabi ai bot,isabi ai , isabi multipurpose ai,multipurpose isabi bbot",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          media: "screen",
          href: "/assets/vendor/swiper/swiper-bundle.min.css",
        },
        {
          rel: "stylesheet",
          media: "screen",
          href: "/assets/vendor/lightgallery/css/lightgallery-bundle.min.css",
        },
        {
          rel: "stylesheet",
          media: "screen",
          href: "/assets/vendor/aos/dist/aos.css",
        },
        {
          rel: "stylesheet",
          media: "screen",
          href: "/assets/css/theme.min.css",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com/"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com/"
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap",
          rel: "stylesheet",
          id: "google-font"
        }
        // {
        //   rel: "apple-touch-icon",
        //   sizes: "180x180",
        //   href: "/img/apple-touch-icon.png",
        // },
        // {
        //   rel: "icon",
        //   type: "image/png",
        //   sizes: "32x32",
        //   href: "/img/favicon-32x32.png",
        // },
        // {
        //   rel: "icon",
        //   type: "image/png",
        //   sizes: "16x16",
        //   href: "/img/favicon-16x16.png",
        // },
        // { rel: "manifest", href: "/img/site.webmanifest" },
        // { rel: "shortcut icon", href: "/img/favicon.ico" },
        // { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
        // { rel: "dns-prefetch", href: "https://res.cloudinary.com" },
        // { rel: "dns-prefetch", href: "https://api.bigdatacloud.net" },
      ],
      script: [
        { src: "/assets/js/mik.js" },
        { src: "/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js", body: true },
        { src: "/assets/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js", body: true },
        { src: "/assets/vendor/parallax-js/dist/parallax.min.js", body: true },
        { src: "/assets/vendor/swiper/swiper-bundle.min.js", body: true },
        { src: "/assets/vendor/aos/dist/aos.js", body: true },
        { src: "/assets/js/theme.min.js", body: true }
      ],
    },
  },
})
