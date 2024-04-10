<template>
  <form class="space-y-8" @submit.prevent="handleCardDeposit">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="cardNumber">Card Number</label>
      <input v-model.trim="cardNumber" :class="{ 'border-red-500': !isValidCardNumber }" type="text" id="cardNumber"
        name="cardNumber"
        class="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="1234 5678 9012 3456">
      <p v-if="!isValidCardNumber" class="text-red-500 text-xs italic">Please enter a valid card number.</p>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="expiryDate">Expiry Date</label>
      <input v-model.trim="expiryDate" :class="{ 'border-red-500': !isValidExpiryDate }" type="text" id="expiryDate"
        name="expiryDate"
        class="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="MM/YY">
      <p v-if="!isValidExpiryDate" class="text-red-500 text-xs italic">Please enter a valid expiry date (MM/YY).</p>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="cvv">CVV</label>
      <input v-model.trim="cvv" :class="{ 'border-red-500': !isValidCVV }" type="text" id="cvv" name="cvv"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="CVV">
      <p v-if="!isValidCVV" class="text-red-500 text-xs italic">Please enter a valid CVV.</p>
    </div>

    <div>
      <label for="card-holder-name" class="block text-sm font-medium leading-6 text-gray-900">Card Holder Name</label>
      <div class="mt-2">
        <input v-model="cardHolderName" id="card-holder-name" name="card-holder-name" type="text"
          class="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
    </div>

    <div>
      <button type="submit" :disabled="!isValidForm || processing"
      class="flex w-full disabled:cursor-not-allowed disabled:opacity-25 justify-center rounded-md bg-yellow-600 px-3 py-2.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
    processing ? 'saving..' : 'Submit' }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      processing: false,
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardHolderName: ''
    };
  },
  computed: {
    isValidCardNumber() {
      return /^\d{16}$/.test(this.cardNumber.replace(/\s/g, ''));
    },
    isValidExpiryDate() {
      return /^\d{2}\/\d{2}$/.test(this.expiryDate);
    },
    isValidCVV() {
      return /^\d{3,4}$/.test(this.cvv);
    },
    isValidForm() {
      return this.isValidCardNumber && this.isValidExpiryDate && this.isValidCVV && this.cardHolderName;
    }
  },
  methods: {
    async handleCardDeposit() {
      this.processing = true
      const accessToken = JSON.parse(window.localStorage.getItem('auth'))
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
                  transactionType: 'deposit',
                  cardNumber: this.cardNumber,
                  expiry: this.expiryDate,
                  cvv: this.cvv,
                  cardHolderName: this.cardHolderName,
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
          this.cardNumber,
          this.expiryDate
          this.cvv
          this.cardHolderName
          this.$emit('cardDepositSuccess')
        }
      } finally {
        this.processing = false
      }
    },
  }
};
</script>
