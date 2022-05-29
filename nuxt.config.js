export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ignorePrefix: "_",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: "oisix-nuxt",
    // htmlAttrs: {
    //   lang: "en",
    // },
    // meta: [
    //   { charset: "utf-8" },
    //   { name: "viewport", content: "width=device-width, initial-scale=1" },
    //   { hid: "description", name: "description", content: "" },
    // ],
    // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap",
      },
    ],
  },
  srcDir: "src/",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/index.scss"],

  styleResources: {
    scss: ["@/assets/scss/index.scss"],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    "@nuxtjs/composition-api/module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    // server: process.env.SERVER || "http://localhost:81/recruit.oisixradaichi",
    // staticServer:
    //   process.env.STATIC_SERVER ||
    //   "http://localhost:3000/recruit.oisixradaichi",
    server: process.env.SERVER || "https://recruit.oisixradaichi.co.jp/",
    staticServer:
      process.env.STATIC_SERVER || "https://recruit.oisixradaichi.co.jp/",
  },
};
