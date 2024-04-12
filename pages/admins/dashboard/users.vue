<template>
  <main>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">Users</h1>
          <p class="mt-2 text-sm text-gray-700">A list of all the users available,
            account details, status
            and date added.</p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button @click="downloadUsers" type="button"
            class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Download
            Users</button>
        </div>
      </div>
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div v-if="usersList?.length && !loading" class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">User
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Account</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date Added</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="user in usersList" :key="user.id">
                  <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div class="flex items-center">
                      <div class="h-11 w-11 flex-shrink-0">
                        <img v-if="user.passport?.length" class="h-11 w-11 rounded-full" :src="user.passport" alt="">
                        <p v-else class="h-10 w-10 flex justify-center items-center bg-black text-white rounded-full">{{
            getInitials(user.name) ?? 'Nil' }}</p>
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">{{ user.name?.length ? user.name : 'Nil' }}</div>
                        <div class="mt-1 text-gray-500">{{ user.email?.length ? user.email : 'Nil' }}</div>
                        <div class="mt-1 text-gray-500">{{ user.phoneNumber?.length ? user.phoneNumber : 'Nil' }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div class="text-gray-900">
                      {{ user.accountCurrency ?? 'Nil' }}
                      {{ formatNumberAsDollar(user.accountBalance) ?? 'Nil' }} (account balance)
                    </div>
                    <div class="mt-1 text-gray-500">
                      {{ user.accountCurrency ?? 'Nil' }}
                      {{ formatNumberAsDollar(user.cardBalance) ?? 'Nil' }} (card balance)
                    </div>
                    <div class="mt-1 text-gray-500">{{ user.cardNumber?.length ? user.cardNumber : 'Nil' }}</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <span
                      class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{{
            user.Status ?? 'Nil' }}</span>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{ formatDateTime(user.timeAdded) ??
            'Nil' }}</td>
                  <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <a href="#" @click.prevent="previewUser(user)"
                      class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay
                        Walton</span></a>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Full
                    Name
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Account Balance</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date Added</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="user in usersList" :key="user.id">
                  <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div class="flex items-center">
                      <div class="h-11 w-11 flex-shrink-0">
                        <img v-if="user.passport?.length" class="h-11 w-11 rounded-full" :src="user.passport" alt="">
                        <p v-else class="h-10 w-10 flex justify-center items-center bg-black text-white rounded-full">{{
            getInitials(user.name) ?? 'Nil' }}</p>
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">{{ user.name ?? 'Nil' }}</div>
                        <div class="mt-1 text-gray-500">{{ user.email ?? 'Nil' }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div class="text-gray-900">
                      {{ user.accountCurrency ?? 'Nil' }}
                      {{ formatNumberAsDollar(user.accountBalance) ?? 'Nil' }}
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <span
                      class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {{user.Status ?? 'Nil' }}
                    </span>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    {{ formatDateTime(user.timeAdded) ?? 'Nil' }}
                  </td>
                  <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <button @click="previewUser(user)" type="button">
                      <img src="@/assets/icons/more.svg" alt="more" class="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table> -->
          </div>
          <div v-else-if="loading && !usersList?.length" class="bg-white rounded-lg shadow-md p-4 animate-pulse">
            <div class="w-full h-32 bg-gray-300 rounded mb-2"></div>
          </div>
          <EmptyState title="No Users available" desc="" v-else />
        </div>
      </div>
    </div>
    <Modal :isVisible.sync="isModalVisible">
      <div class="overflow-hidden">
        <div class="sm:px-6">
          <h3 class="text-base font-semibold leading-7 text-gray-900">Update User Information</h3>
        </div>
        <form @submit.prevent="updateUserInfo" class="p-4  space-y-6 max-w-xl">
          <div class="space-y-1">
            <label class="text-xs text-gray-700 font-medium">Account Balance</label>
            <input v-model="selectedUserData.accountBalance" type="tel"
              class="py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base">
            <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
          </div>

          <div class="space-y-1">
            <label class="text-xs text-gray-700 font-medium">CVV</label>
            <input v-model="selectedUserData.cvv" type="tel"
              class="py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base">
            <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
          </div>

          <div class="space-y-1">
            <label class="text-xs text-gray-700 font-medium">Card Balance</label>
            <input v-model="selectedUserData.cardBalance" type="tel"
              class="py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base">
            <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
          </div>
          <div class="w-full flex justify-between items-center gap-x-6">
            <button type="submit" :disabled="processing"
              class="bg-green-500 disabled:cursor-not-allowed disabled:opacity-25 w-full text-white rounded-lg px-6 py-3 text-sm">
              {{ processing ? 'processing...' : 'Update' }}
            </button>
            <button @click="isModalVisible = false" type="button"
              class="bg-black text-white w-full py-3 rounded-md">Close</button>
          </div>
        </form>
      </div>
    </Modal>
  </main>
</template>

<script>
import EmptyState from '@/components/core/EmptyState.vue'
import Modal from '@/components/core/Modal.vue'
export default {
  layout: 'admin-dashboard',
  head() {
    return {
      title: 'Bastons Banks | Admin Users List',
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO meta tags
        { hid: 'description', name: 'description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },

        // Open Graph / Facebook meta tags for rich sharing
        { hid: 'og:title', property: 'og:title', content: 'Bastons Banks | Admin Users List' },
        { hid: 'og:description', property: 'og:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.bastonsbanks.com/admin/dashboard/users' },
        { hid: 'og:image', property: 'og:image', content: 'https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png' },

        // Twitter Card meta tags
        { hid: 'twitter:card', name: 'twitter:card', content: '' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Bastons Banks | Admin Users List' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  components: {
    Modal,
    EmptyState
  },
  data() {
    return {
      loading: false,
      processing: false,
      isModalVisible: false,
      loggedInAdmin: {},
      selectedUserData: {},
      usersList: [],
    }
  },
  created() {
    this.fetchUsers()
    this.getUserInfo()
  },
  methods: {
    downloadUsers() {
      this.$downloadCSV(this.usersList, 'users-data.csv');
    },
    async fetchUsers() {
      this.loading = true
      if (process.client) {
        const accessToken = JSON.parse(sessionStorage.getItem('auth'))
        this.loading = true
        const query = `
        query {
          getUsers {
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
        }
      `
        try {
          const response = await fetch('https://fidelityvalues.onrender.com/graphql/query', {
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
            this.usersList = data.data.getUsers
            this.totalRows = data.data.getUsers.length
          }
        } finally {
          this.loading = false
        }
      }
    },
    getInitials(firstName) {
      const firstInitial = firstName ? firstName.charAt(0) : ''
      return `${firstInitial}`
    },
    formatNumberAsDollar(number) {
      return number?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    },
    async updateUserInfo() {
      this.processing = true
      if (process.client) {
        const accessToken = JSON.parse(sessionStorage.getItem('auth'))
        try {
          const updateUserMutation = `
          mutation updateUser($userId: String!, $input: UpdateUser!) {
            updateUser(userId: $userId, input: $input) {
              name
              email
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
              cardBalance
              cvv
              pin
              passport
              identification
              eth
              btc
              accountBalance
            }
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
                query: updateUserMutation,
                variables: {
                  userId: this.selectedUserData.id ?? '',
                  input: {
                    accountBalance: this.selectedUserData.accountBalance,
                    cvv: this.selectedUserData.cvv,
                    cardBalance: this.selectedUserData.cardBalance
                  }
                }
              })
            }
          )
          const data = await response.json()
          if (data?.errors) {
            this.$toastr.e(data.errors[0].message)
          } else {
            this.$toastr.s('User Information was updated successfully')
            this.isModalVisible = false
          }
        } finally {
          this.processing = false
        }
      }
    },
    previewUser(data) {
      console.log(data, 'data here')
      this.isModalVisible = true
      this.selectedUserData = data
    },
    formatDateTime(date) {
      if (typeof date === 'string') {
        date = new Date(date)
      }

      if (Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime())) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }
        return date.toLocaleDateString('en-US', options)
      } else {
        return 'Invalid Date'
      }
    },
    async getUserInfo() {
      this.loading = true
      if (process.client) {
        const accessToken = JSON.parse(sessionStorage.getItem('auth'))
        this.loading = true
        const query = `
        query {
          getUser {
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
      `

        try {
          const response = await fetch('https://fidelityvalues.onrender.com/graphql/query', {
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
            this.loggedInAdmin = data.data.getUser
          }
        } finally {
          this.loading = false
        }
      }
    },
  },
}
</script>
