export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  server: {
    port: 3000,
    host: "0.0.0.0",
    timing: false,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt2-tailwind3-boilerplate",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        id: 'tidobot',
        src: '/js/chatbot.js'
      },
      {
        id: 'tido',
        src: 'https://code.tidio.co/csbhyanzc4a0vgpoavxf7rj0xe7hr0j5.js'
      },
      {
        src: 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
      },
      {
        id: 'tradingview',
        src: 'https://www.cryptohopper.com/widgets/js/script'
      }
    ]
  },

  // <script src="//code.tidio.co/csbhyanzc4a0vgpoavxf7rj0xe7hr0j5.js" async></script>

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/toastr.js', mode: 'client' },
    '~/plugins/csv-downloader.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  axios: {
    // proxy: true,
    baseURL: ''
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxt/postcss8",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/toast',
    '@nuxtjs/axios',
    [
      'nuxt-sweetalert2',
      {
        confirmButtonColor: '#000000'
      }
    ]
  ],
  sweetalert: {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674'
  },
  toast: {
    position: 'top-center',
    register: [
      // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: ''
    },
    graphql: {
      clients: {
        default: {
          endpoint: 'https://visionary-zpui.onrender.com/graphql/query'
        }
      }
    }
  },
};
