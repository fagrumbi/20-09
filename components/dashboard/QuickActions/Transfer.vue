<template>
  <form class="space-y-6 p-4" @submit.prevent="handleWireTransfer">
    <div>
      <label for="amount" class="block text-sm font-medium leading-6 text-gray-900">Amount</label>
      <div class="mt-2">
        <input id="amount" name="amount" type="tel" v-model="form.amount"
          class="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
    </div>

    <div>
      <label for="beneficiary-name" class="block text-sm font-medium leading-6 text-gray-900">Beneficiary Name</label>
      <div class="mt-2">
        <input id="beneficiary-name" name="beneficiary-name" type="text" v-model="form.beneficiaryName"
          class="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
    </div>
    <div>
      <label for="beneficiary-account" class="block text-sm font-medium leading-6 text-gray-900">Beneficiary Account
        Number / IBAN</label>
      <div class="mt-2">
        <input id="beneficiary-account" name="beneficiary-account" type="tel" v-model="form.beneficiaryAccountNumber"
          class="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
    </div>

    <div v-if="$route.query.page !== 'internal-transfer'">
      <label for="recieving-bank-name" class="block text-sm font-medium leading-6 text-gray-900">Receiving Bank
        Name</label>
      <div class="mt-2">
        <input id="recieving-bank-name" name="recieving-bank-name" type="text" v-model="form.receivingBankName"
          class="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
    </div>

    <div v-if="$route.query.page !== 'internal-transfer'">
      <label for="aba-routing-number" class="block text-sm font-medium leading-6 text-gray-900">ABA Routing
        Number</label>
      <div class="mt-2">
        <input id="aba-routing-number" name="aba-routing-number" type="tel" max="9" min="9" v-model="form.routingNumber"
          class="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
    </div>
    <div>
      <button v-if="$route.query.page === 'wire-transfer' || $route.query.page === 'local-transfer'"
        :disabled="!isFormEmpty || processing" type="submit"
        class="flex w-full justify-center rounded-md disabled:cursor-not-allowed disabled:opacity-25 bg-yellow-600 px-3 py-2.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
    processing
      ? 'processing..' : 'Submit' }}</button>
      <button v-if="$route.query.page === 'internal-transfer'" :disabled="!isInternalTransferFormEmpty || processing"
        type="submit"
        class="flex w-full justify-center rounded-md disabled:cursor-not-allowed disabled:opacity-25 bg-yellow-600 px-3 py-2.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
    processing
      ? 'processing..' : 'Submit'}}</button>
    </div>
  </form>
</template>

<script>
export default {
  layout: 'admin-auth',
  data() {
    return {
      processing: false,
      isEmailValid: true,
      form: {
        amount: "",
        beneficiaryName: "",
        beneficiaryAccountNumber: "",
        receivingBankName: "",
        routingNumber: ""
      }
    }
  },
  computed: {
    isFormEmpty() {
      return !!(this.form.amount && this.form.beneficiaryName && this.form.beneficiaryAccountNumber && this.form.receivingBankName && this.form.routingNumber)
    },
    isInternalTransferFormEmpty() {
      return !!(this.form.amount && this.form.beneficiaryName && this.form.beneficiaryAccountNumber)
    }
  },
  methods: {
    async handleWireTransfer() {
      this.processing = true
      if (process.client) {
        const accessToken = JSON.parse(sessionStorage.getItem('auth'))
        try {
          const basePayload = {
            amount: this.form.amount,
            transactionType: 'withdrawal',
            beneficiaryName: this.form.beneficiaryName,
            beneficiaryAccountNumber: this.form.beneficiaryAccountNumber,
            receivingBankName: this.form.receivingBankName,
            routingNumber: this.form.routingNumber
          }

          const internalTransferPayload = {
            amount: this.form.amount,
            transactionType: 'withdrawal',
            beneficiaryName: this.form.beneficiaryName,
            beneficiaryAccountNumber: this.form.beneficiaryAccountNumber
          }
          const payload = this.$route.query.page !== 'internal-transfer' ? basePayload : internalTransferPayload
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
                  input: payload
                }
              })
            }
          )
          const data = await response.json()
          if (data?.errors) {
            this.$toastr.e(data.errors[0].message)
          } else {
            this.$toastr.s(`You have successfully initiated a ${this.$route.query.page === 'wire-transfer' ? 'wire transfer' : this.$route.query.page === 'local-transfer' ? 'Local transfer' : this.$route.query.page === 'internal-transfer' ? 'Internal Transfer' : ''}`)
            this.form.amount,
              this.form.beneficiaryName,
              this.form.beneficiaryAccountNumber,
              this.form.receivingBankName,
              this.form.routingNumber
            this.$emit('transferSuccess')
          }
        } finally {
          this.processing = false
        }
      }
    },
  }
}
</script>
