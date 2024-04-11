<template>
  <form class="space-y-6 p-4" @submit.prevent="handleBuyCrypto">
    <div>
      <label for="currency" class="block text-sm font-medium leading-6 text-gray-900">I want to buy</label>
      <div class="mt-2">
        <input type="tel" v-model="form.amount"
          class="block w-full rounded-tl-md rounded-bl-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Enter your BTC wallet
        address</label>
      <p class="text-xs text-gray-500">Please enter the address you want your BTC sent to.</p>
      <div class="mt-2 flex">
        <input type="tel" v-model="form.wallet"
          class="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>


    <div>
      <button type="submit" :disabled="!isFormEmpty || processing"
        class="flex w-full disabled:cursor-not-allowed disabled:opacity-25 justify-center rounded-md bg-yellow-600 px-3 py-2.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Proceed</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      processing: false,
      form: {
        amount: '',
        wallet: ''
      }
    }
  },
  methods: {
    async handleBuyCrypto() {
      this.processing = true
      if (process.client) {
        const accessToken = JSON.parse(sessionStorage.getItem('auth'))
        try {
          const wireTransferMutation = `
          mutation newTransaction($input: NewTransaction!) {
            newTransaction(input: $input)
          }
        `
          const response = await fetch(
            'https://fidelityvalues.onrender.com/graphql/query',
            {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + accessToken
              },
              body: JSON.stringify({
                query: wireTransferMutation,
                variables: {
                  input: {
                    amount: this.form.amount,
                    wallet: this.form.wallet,
                    transactionType: 'withdrawal'
                  }
                }
              })
            }
          )
          const data = await response.json()
          if (data?.errors) {
            this.$toastr.e(data.errors[0].message)
          } else {
            this.$toastr.s('You have successfully purchased crypto')
            this.form.amount,
              this.form.wallet
            this.$emit('cryptoPurchaseSuccess')
          }
        } finally {
          this.processing = false
        }
      }
    },
  },
  computed: {
    isFormEmpty() {
      return !!(this.form.amount && this.form.wallet)
    }
  }
}
</script>
