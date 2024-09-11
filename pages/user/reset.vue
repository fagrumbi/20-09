<template>
  <div class="flex min-h-full lg:h-screen">
    <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <section class="grid place-content-center h-screen space-y-6">
        <div>
          <h1 class="text-3xl font-bold">
            Almost Done!
          </h1>
          <p class="text-gray-500 text-sm leading-loose">
            Please enter your reset password token and your new password.
          </p>
        </div>
        <form class="space-y-4" @submit.prevent="login">
          <div class="space-y-1 text-sm w-full">
            <label for="token" class="block text-gray-900 font-medium">Token</label>
            <input id="token" v-model="form.resetCode" type="tel" name="token" placeholder="Enter token"
              class="border-[0.6px] bg-gray-100 border-gray-500 w-full outline-none px-4 py-3 rounded-md text-gray-900">
          </div>
          <div class="space-y-1 text-sm w-full">
            <label for="password" class="block text-gray-900 font-medium">New Password</label>
            <input id="password" v-model="form.password" type="password" name="password" placeholder="Enter password"
              class="border-[0.6px] bg-gray-100 border-gray-500 w-full outline-none px-4 py-3 rounded-md text-gray-900">
          </div>
          <div class="w-full pt-6">
            <button :disabled="!isFormEmpty" :class="[
          !isFormEmpty || processing ? 'opacity-25 cursor-not-allowed' : '',
        ]" class="w-full shrink-0 text-xs disabled:cursor-not-allowed disabled:opacity-25 rounded-md border border-green-500 bg-green-600 px-12 py-3.5 font-medium text-white transition">
              {{ processing ? "processing..." : "Submit" }}
            </button>
          </div>
        </form>
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
      title: 'Bastons Banks | User Reset Password',
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO meta tags
        { hid: 'description', name: 'description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },

        // Open Graph / Facebook meta tags for rich sharing
        { hid: 'og:title', property: 'og:title', content: 'Bastons Banks | User Reset Password' },
        { hid: 'og:description', property: 'og:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.bastonsbanks.com/user/reset' },
        { hid: 'og:image', property: 'og:image', content: '@/assets/img/preview.png' },

        // Twitter Card meta tags
        { hid: 'twitter:card', name: 'twitter:card', content: '' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Bastons Banks | User Reset Password' },
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
      user: '',
      processing: false,
      form: {
        resetCode: '',
        email: '',
        password: ''
      }
    }
  },
  computed: {
    isFormEmpty() {
      return !!(this.form.password && this.form.resetCode)
    }
  },
  mounted() {
    if (process.client) {
      this.user = JSON.parse(sessionStorage.getItem('user-email'))
    }
  },
  methods: {
    async login() {
      this.processing = true
      const resetPasswordMutation = `
      mutation resetPassword($email: String!, $newPassword: String!, $resetCode: String!) {
            resetPassword(email: $email, newPassword: $newPassword, resetCode: $resetCode)
          }
        `
      try {
        const response = await fetch(
          'https://api.bastonsbanks.com/graphql/query', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            query: resetPasswordMutation,
            variables: {
              email: this.user,
              newPassword: this.form.password,
              resetCode: this.form.resetCode
            }
          })
        }
        )
        const data = await response.json()
        if (data?.errors) {
          this.$toastr.e(data.errors[0].message)
        } else {
          sessionStorage.removeItem('user-email')
          this.$toastr.s('Password reset was successfully. Please Login')
          this.$router.push('/user/login')
        }
      } finally {
        this.processing = false
      }
    }
  }
}
</script>
