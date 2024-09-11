<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Transactions</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all the transactions including withdrawals and deposits,
          title, email and role.</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button type="button"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Export
          Transactions</button>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div v-if="transactionsList?.length && !loading"
          class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">User</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Account Name</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Transaction Type
                </th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Transaction Status
                </th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr class="even:bg-gray-50" v-for="transaction in transactionsList" :key="transaction.id">
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                  <div>
                    <span v-if="transaction.user.name">{{ transaction.user.name }}</span>
                    <span v-else>Nil</span>
                  </div>
                  <div>
                    <span v-if="transaction.user.email">{{ transaction.user.email }}</span>
                    <span v-else>Nil</span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <!-- {{ transaction.beneficiaryAccountNumber ?? 'Nil' }} -->
                  <div>
                    <span v-if="transaction.beneficiaryAccountNumber">{{ transaction.beneficiaryAccountNumber }}</span>
                    <span v-else>Nil</span>
                  </div>
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <!-- {{ transaction.receivingBankName ?? 'Nil'
                  }} -->
                  <span v-if="transaction.transactionType">{{ transaction.transactionType }}</span>
                  <span v-else>Nil</span>
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ transaction.transactionStatus ?? 'Nil'
                  }}</td>
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  <div class="py-4 flex justify-center items-center">
                    <div v-if="transaction?.transactionStatus === 'Pending'"
                      class="lg:flex items-center lg:gap-x-3 space-y-3 flex-wrap">
                      <button class="text-white text-xs bg-green-500 w-full py-1.5 rounded-lg"
                        @click="handleAction(transaction, 'approve')">
                        Approve
                      </button>
                      <button class="text-white text-xs bg-red-500 w-full py-1.5 rounded-lg"
                        @click="handleAction(transaction, 'reject')">
                        Reject
                      </button>
                    </div>
                    <div v-else>
                      <button disabled class="bg-black text-white py-2 text-xs px-3 rounded-lg">
                        Completed
                      </button>
                    </div>
                  </div>
                </td>
              </tr>

              <!-- More people... -->
            </tbody>
          </table>
        </div>
        <div v-else-if="loading && !transactionsList?.length" class="bg-white rounded-lg shadow-md p-4 animate-pulse">
          <!-- Header -->
          <!-- <div class="w-2/3 h-4 bg-gray-300 rounded mb-2"></div> -->
          <!-- Body -->
          <div class="w-full h-32 bg-gray-300 rounded mb-2"></div>
          <!-- <div class="w-full h-8 bg-gray-300 rounded mb-2"></div>
          <div class="w-1/2 h-8 bg-gray-300 rounded"></div> -->
        </div>
        <EmptyState title="No Transactions available" desc="" v-else />
      </div>
    </div>
  </div>
</template>

<script>
import EmptyState from '@/components/core/EmptyState.vue';
import Swal from 'sweetalert2/dist/sweetalert2.js'
export default {
  layout: 'admin-dashboard',
  head() {
    return {
      title: 'Bastons Banks | Admin Transactions List',
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO meta tags
        { hid: 'description', name: 'description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },

        // Open Graph / Facebook meta tags for rich sharing
        { hid: 'og:title', property: 'og:title', content: 'Bastons Banks | Admin Transactions List' },
        { hid: 'og:description', property: 'og:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.bastonsbanks.com/admin/dashboard/transactions' },
        { hid: 'og:image', property: 'og:image', content: '@/assets/img/preview.png' },

        // Twitter Card meta tags
        { hid: 'twitter:card', name: 'twitter:card', content: '' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Bastons Banks | Admin Transactions List' },
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
      loading: false,
      transactionsList: [],
    }
  },
  methods: {
    downloadWithdrawals() {
      this.$downloadCSV(this.transactionsList, 'withdrawals-data.csv');
    },
    async fetchTransactions() {
      this.loading = true
      if (process.client) {
        const accessToken = JSON.parse(sessionStorage.getItem('auth'))
        this.loading = true
        const query = `
        query {
          getTransactions {
            id
            amount
            beneficiaryName
            beneficiaryAccountNumber
            receivingBankName
            routingNumber
            wallet
            transactionType
            transactionStatus
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
            }
            proof
            timeAdded
          }
        }
      `

        try {
          const response = await fetch('https://api.bastonsbanks.com/graphql/query', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: 'Bearer ' + accessToken
            },
            body: JSON.stringify({
              query
            })
          })
          const data = await response.json()
          if (data?.errors) {
            this.$toastr.e(data.errors[0].message)
          } else {
            this.transactionsList = data.data.getTransactions
          }
        } finally {
          this.loading = false
        }
      }
    },
    handleAction(data, type) {
      Swal.fire({
        title: `${type === 'approve' ? 'Approve' : 'Reject'} Withdrawal`,
        text: "Please Note: You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Proceed!'
      }).then((result) => {
        if (result.value) {
          this.processTransaction(data.id, type)
        } else {
          this.$swal('Cancelled', 'Action was cancelled', 'info')
        }
      })
    },
    async processTransaction(transactionId, status) {
      this.processing = true
      if (process.client) {
        const accessToken = JSON.parse(sessionStorage.getItem('auth'))
        const statusType = status === 'approve' ? 'Approved' : status === 'reject' ? 'Declined' : 'Pending'
        try {
          const processTransactionQuery = `
            mutation ProcessTransaction($transactionID: String!, $status: TransactionStatus!) {
              processTransaction(transactionID: $transactionID, status: $status)
            }
          `
          const response = await fetch(
            'https://api.bastonsbanks.com/graphql/query',
            {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + accessToken
              },
              body: JSON.stringify({
                query: processTransactionQuery,
                variables: {
                  transactionID: transactionId,
                  status: statusType
                }
              })
            }
          )
          const data = await response.json()
          if (data?.errors) {
            this.$toastr.e(data.errors[0].message)
          } else {
            this.$toastr.s(`You have successfully ${status === 'approve' ? 'Approved' : 'Rejected'} this transaction.`)
          }
        } finally {
          this.processing = false
        }
      }
    },
  },
  mounted() {
    this.fetchTransactions()
  },
  component: {
    EmptyState
  }
}
</script>
