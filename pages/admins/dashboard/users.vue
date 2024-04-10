<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Users</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email
          and role.</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button @click="downloadWithdrawals" type="button"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Download
          Users</button>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Title</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr>
                <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div class="flex items-center">
                    <div class="h-11 w-11 flex-shrink-0">
                      <img class="h-11 w-11 rounded-full"
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="">
                    </div>
                    <div class="ml-4">
                      <div class="font-medium text-gray-900">Lindsay Walton</div>
                      <div class="mt-1 text-gray-500">lindsay.walton@example.com</div>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <div class="text-gray-900">Front-end Developer</div>
                  <div class="mt-1 text-gray-500">Optimization</div>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <span
                    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">Member</td>
                <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay
                      Walton</span></a>
                </td>
              </tr>

              <!-- More people... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin-dashboard',
  data(){
    return {
      selectedUser: {},
      usersList: [],
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    downloadWithdrawals() {
      const myData = [
        { name: "John Doe", email: "john@example.com", age: 30 },
        { name: "Jane Doe", email: "jane@example.com", age: 25 },
        // More objects...
      ];
      this.$downloadCSV(myData, 'withdrawals-data.csv');
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
    getInitials(firstName, lastName) {
      const firstInitial = firstName ? firstName.charAt(0) : ''
      const lastInitial = lastName ? lastName.charAt(0) : ''
      return `${firstInitial}${lastInitial}`
    },
    formatNumberAsDollar(number) {
      return number?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
  },
}
</script>
