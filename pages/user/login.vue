<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png"
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
              class="block py-3 px-3 w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
          <div class="mt-2">
            <input id="password" v-model="form.password" name="password" type="password" autocomplete="current-password"
              required
              class="block py-3 px-3 w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <img @click="showPassword = !showPassword" :src="require(`@/assets/icons/${eye}`)" alt=""
              class="absolute cursor-pointer top-9 right-4 h-6 w-6">
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
          "https://fidelityvalues.onrender.com/graphql/query",
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
          window.localStorage.setItem(
            "auth",
            JSON.stringify(data?.data?.userLogin?.jwt)
          );
          window.localStorage.setItem(
            "user",
            JSON.stringify(data?.data?.userLogin?.user)
          );
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
      const user = window.localStorage.getItem('user')
      const parsedUser = JSON.parse(user)
      if (Object.keys(parsedUser)?.length) {
        this.$router.push('/user/dashboard')
      }
    }
  }
};
</script>
