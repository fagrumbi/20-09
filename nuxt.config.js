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
    title: "Bastons Banks",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Mobile Banking, Credit Cards, Mortgages, Auto Loan",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Mobile Banking, Credit Cards, Mortgages, Auto Loan",
      },
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Mobile Banking, Credit Cards, Mortgages, Auto Loan",
      },
      { name: "format-detection", content: "telephone=no" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-touch-fullscreen", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-startup-image",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
        href: "/logo.png",
        hid: "apple-touch-startup-image-iphonese",
      },
      {
        rel: "apple-touch-startup-image",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
        href: "/logo.png",
        hid: "apple-touch-startup-image-iphone6",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap",
      },
      {
        rel: "apple-touch-startup-image",
        href: "/logo.png",
        media:
          "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
      {
        rel: "apple-touch-startup-image",
        href: "/logo.png",
        media:
          "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
      {
        rel: "apple-touch-startup-image",
        href: "/logo.png",
        media:
          "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
      {
        rel: "apple-touch-startup-image",
        href: "/logo.png",
        media:
          "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
      {
        rel: "apple-touch-startup-image",
        href: "/logo.png",
        media:
          "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
      {
        rel: "apple-touch-startup-image",
        href: "/logo.png",
        media:
          "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
      {
        rel: "apple-touch-startup-image",
        href: "/logo.png",
        media:
          "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
      {
        rel: "apple-touch-startup-image",
        href: "/logo.png",
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
      {
        rel: "apple-touch-startup-image",
        href: "/logo.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
      {
        rel: "apple-touch-startup-image",
        href: "/logo.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
      {
        rel: "apple-touch-startup-image",
        href: "/logo.png",
        media:
          "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
      {
        rel: "apple-touch-startup-image",
        href: "/logo.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
      {
        rel: "apple-touch-startup-image",
        href: "/logo.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
    ],
    script: [
      // {
      //   id: 'tidobot',
      //   src: '/js/chatbot.js'
      // },
      {
        id: 'tawk',
        src: '/js/chatbot.js'
      },
      // {
      //   id: 'tido',
      //   src: 'https://code.tidio.co/csbhyanzc4a0vgpoavxf7rj0xe7hr0j5.js'
      // },
      // {
      //   src: 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
      // },
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
    '~/plugins/csv-downloader.js',
    {
      src: '~/plugins/tawk-messenger.client.js',
      mode: 'client'
    }
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
