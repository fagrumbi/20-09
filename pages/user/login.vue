<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-32 w-auto" src="@/assets/img/preview.png"
        alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleLogin">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" v-model="form.email" name="email" type="email" autocomplete="email" required
              class="block py-3 px-3 w-full rounded-md border-[0.6px] bg-gray-100 border-gray-500 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <nuxt-link to="/user/forgot" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot
                password?</nuxt-link>
            </div>
          </div>
          <div class="mt-2 relative">
            <input id="password" v-model="form.password" name="password" :type="showPassword ? 'text' : 'password'"
              autocomplete="current-password" required
              class="block py-3 px-3 w-full rounded-md border-[0.6px] bg-gray-100 border-gray-500 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6" />
            <img @click="showPassword = !showPassword" :src="require(`@/assets/icons/${eye}`)" alt=""
              class="absolute cursor-pointer top-2 right-4 h-6 w-6">
          </div>
        </div>

        <div>
          <button :disabled="!isFormEmpty || processing" type="submit"
            class="flex w-full disabled:cursor-not-allowed disabled:opacity-25 justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {{ processing ? 'processing...' : 'Sign in' }}
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <nuxt-link to="/user/signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign
          Up</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin-auth",
  head() {
    return {
      title: 'Bastons Banks | User Login',
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO meta tags
        { hid: 'description', name: 'description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },

        // Open Graph / Facebook meta tags for rich sharing
        { hid: 'og:title', property: 'og:title', content: 'Bastons Banks | User Login' },
        { hid: 'og:description', property: 'og:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.bastonsbanks.com/user/login' },
        { hid: 'og:image', property: 'og:image', content: '@/assets/img/preview.png' },

        // Twitter Card meta tags
        { hid: 'twitter:card', name: 'twitter:card', content: '' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Bastons Banks | User Login' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'twitter:image', name: 'twitter:image', content: '@/assets/img/preview.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  data() {
    return {
      processing: false,
      isEmailValid: true,
      showPassword: false,
      form: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    isFormEmpty() {
      return !!(this.form.email && this.form.password);
    },
    eye() {
      return !this.showPassword ? 'eye-close.svg' : 'eye-open.svg'
    }
  },
  watch: {
    "form.email"(value) {
      this.form.email = value;
      this.validateEmail(value);
    },
  },
  methods: {
    async handleLogin() {
      this.processing = true;
      const loginMutation = `
        mutation {
          userLogin(email: "${this.form.email}", password: "${this.form.password}") {
            jwt
            user {
              id
              name
              email
              role
              phoneNumber
              dob
              gender
              ssn
              occupation
              country
              city
              zip
              address
              accountCurrency
              pin
              passport
              identification
              Status
              PlanType
              accountBalance
              cardBalance
              cardNumber
              expiry
              cvv
              eth
              btc
              timeAdded
              admin {
                id
                email
                role
                Status
                timeAdded
                btc
                eth
                name
              }
            }
          }
        }
      `;
      try {
        const response = await fetch(
          "https://api.bastonsbanks.com/graphql/query",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              query: loginMutation,
              variables: {
                email: this.form.email,
                password: this.form.password,
              },
            }),
          }
        );
        const data = await response.json();
        if (data?.errors) {
          this.$toastr.e(data.errors[0].message);
        } else {
          if (process.client) {
            sessionStorage.setItem(
              "auth",
              JSON.stringify(data?.data?.userLogin?.jwt)
            );
            sessionStorage.setItem(
              "user",
              JSON.stringify(data?.data?.userLogin?.user)
            );
          }
          this.$toastr.s("Login was successful");
          this.$router.push("/user/dashboard");
        }
      } finally {
        this.processing = false;
      }
    },
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.isEmailValid = true;
      } else {
        this.isEmailValid = false;
      }
    },
  },
  mounted() {
    if (window.process) {
      const user = sessionStorage.getItem('user')
      const parsedUser = JSON.parse(user)
      if (Object.keys(parsedUser)?.length) {
        this.$router.push('/user/dashboard')
      }
    }
  }
};
</script>
