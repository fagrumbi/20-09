<template>
  <main>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">Users</h1>
          <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title,
            email
            and role.</p>
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
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name
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
                    <div class="text-gray-900">{{ formatNumberAsDollar(user.accountBalance) ?? 'Nil' }}</div>
                    <!-- <div class="mt-1 text-gray-500">Optimization</div> -->
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <span
                      class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{{
            user.Status
            ?? 'Nil' }}</span>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{ formatDateTime(user.timeAdded) ??
            'Nil' }}</td>
                  <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <button @click="previewUser(user)" type="button" class="bg-black text-white">
                      <img src="@/assets/icons/more.svg" alt="more" class="h-4" />
                    </button>
                  </td>
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
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
            <label class="text-xs text-gray-700 font-medium">Eth Address</label>
            <input v-model="selectedUser.eth" type="tel"
              class="py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base">
            <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
          </div>


          <div class="space-y-1">
            <label class="text-xs text-gray-700 font-medium">Btc Address</label>
            <input v-model="selectedUser.btc" type="tel"
              class="py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base">
            <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
          </div>

          <div class="space-y-1">
            <label class="text-xs text-gray-700 font-medium">Account Balance</label>
            <input v-model="selectedUser.accountBalance" type="tel"
              class="py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base">
            <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
          </div>

          <div class="space-y-1">
            <label class="text-xs text-gray-700 font-medium">Trading Balance</label>
            <input v-model="selectedUser.tradingBalance" type="tel"
              class="py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base">
            <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
          </div>
          <div class="w-full flex justify-between items-center gap-x-6">
            <button type="submit"
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
  components: {
    Modal,
    EmptyState
  },
  data() {
    return {
      loading: false,
      processing: false,
      isModalVisible: false,
      selectedUser: {},
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
      const accessToken = JSON.parse(window.localStorage.getItem('auth'))
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
    },
    getInitials(firstName) {
      const firstInitial = firstName ? firstName.charAt(0) : ''
      return `${firstInitial}`
    },
    formatNumberAsDollar(number) {
      return number?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    },
    async updateUserInfo() {
      this.processing = true
      const accessToken = JSON.parse(window.localStorage.getItem('auth'))
      try {
        const updateUserMutation = `
          mutation updateUser($userId: String!, $input: UpdateUser!) {
            updateUser(userId: $userId, input: $input) {
             btc
             eth
             accountBalance
             tradingBalance
            }
          }
        `
        const response = await fetch(
          'https://visionary-zpui.onrender.com/graphql/query',
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: 'Bearer ' + accessToken
            },
            body: JSON.stringify({
              query: updateUserMutation,
              variables: {
                userId: this.selectedUser.id ?? '',
                input: {
                  btc: this.selectedUser.btc,
                  eth: this.selectedUser.eth,
                  accountBalance: this.selectedUser.accountBalance,
                  tradingBalance: this.selectedUser.tradingBalance
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
    },
    previewUser(data) {
      this.isModalVisible = true
      this.selectedTransaction = data
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
      const accessToken = JSON.parse(window.localStorage.getItem('auth'))
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
          this.selectedUser = data.data.getUser
        }
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
