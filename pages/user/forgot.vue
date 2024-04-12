<template>
  <div class="flex min-h-full lg:h-screen">
    <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div v-if="!token_sent" class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img class="h-10 w-auto" src="https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png"
            alt="Your Company">
          <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot Your Password?</h2>
          <p class="mt-2 text-sm leading-6 text-gray-500">
            We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your
            password!
          </p>
        </div>

        <div class="mt-10">
          <div>
            <form @submit.prevent="handleForgetPassword" class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" v-model="form.email" required
                    class="block w-full rounded-md border-0 py-3 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
              </div>

              <div>
                <button :disabled="!isFormEmpty" type="submit"
                  class="flex w-full disabled:opacity-25 disabled:cursor-not-allowed justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
        processing ? "processing..." : "Submit" }}</button>
              </div>
              <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <nuxt-link to="/user/signup"
                  class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Create an account</nuxt-link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <section v-else class="grid place-content-center h-screen">
        <div class="flex justify-center items-center flex-col gap-y-3">
          <img src="@/assets/img/joy.jpg" class="h-60 w-60" alt="">
          <p class="text-gray-600 font-medium">
            Reset password token has been sent to your email.
          </p>
          <div class="w-full flex justify-center items-center pt-6">
            <nuxt-link to="/user/reset"
              class="bg-green-600 flex justify-center items-center text-white px-6 py-3 w-full rounded-md text-sm">Proceed
              to
              reset</nuxt-link>
          </div>
        </div>
      </section>
    </div>
    <div class="relative hidden w-0 flex-1 lg:block">
      <img class="absolute inset-0 h-full w-full object-cover" src="@/assets/img/forgot.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin-auth',
  head() {
    return {
      title: 'Bastons Banks | User Forgot Password',
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO meta tags
        { hid: 'description', name: 'description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },

        // Open Graph / Facebook meta tags for rich sharing
        { hid: 'og:title', property: 'og:title', content: 'Bastons Banks | User Forgot Password' },
        { hid: 'og:description', property: 'og:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.bastonsbanks.com/user/forgot' },
        { hid: 'og:image', property: 'og:image', content: 'https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png' },

        // Twitter Card meta tags
        { hid: 'twitter:card', name: 'twitter:card', content: '' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Bastons Banks | User Forgot Password' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  data() {
    return {
      processing: false,
      token_sent: false,
      form: {
        email: ''
      }
    }
  },
  computed: {
    isFormEmpty() {
      return !!(this.form.email)
    }
  },
  mounted() {
    if (window.process) {
      const user = sessionStorage.getItem('user')
      const parsedUser = JSON.parse(user)
      if (Object.keys(parsedUser)?.length) {
        this.$router.push('/user/login')
      }
    }
  },
  methods: {
    async handleForgetPassword() {
      this.processing = true
      const resetPassword = `
          mutation SendResetPasswordCode($email: String!) {
            sendResetPasswordCode(email: $email)
          }
        `
      try {
        const response = await fetch(
          'https://fidelityvalues.onrender.com/graphql/query', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            query: resetPassword,
            variables: {
              email: this.form.email
            }
          })
        }
        )
        const data = await response.json()
        if (data?.errors) {
          this.$toastr.e(data.errors[0].message)
        } else {
          this.token_sent = true
          if (process.client) {
            sessionStorage.setItem('user-email', JSON.stringify(this.form.email))
          }
        }
      } finally {
        this.processing = false
      }
    }
  }

}
</script>
