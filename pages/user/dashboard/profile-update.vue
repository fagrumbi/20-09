<template>
  <div class="flex min-h-full">
    <div
      class="flex flex-1 h-screen overflow-hidden flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full overflow-y-auto">
        <div>
          <h2 class="text-2xl font-bold leading-9 tracking-tight text-gray-900">Update your account</h2>
        </div>
        <div class="">
          <div>
            <form v-if="Object.keys(updatedUserData).length && !loading" class="p-6 lg:p-10 space-y-6 max-w-xl"
              @submit.prevent="updateUser">
              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">First Name</label>
                <input v-model="updatedUserData.name" type="text"
                  class="py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base">
                <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
              </div>

              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">Phone Number</label>
                <input v-model="updatedUserData.phoneNumber" type="tel"
                  class="py-3 md:py-2 text-sm md:text-base border rounded-md w-full outline-none pl-6">
                <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
              </div>

              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">Social Security Number/Tax ID</label>
                <input v-model="updatedUserData.ssn" type="tel"
                  class="py-3 md:py-2 text-sm md:text-base border rounded-md w-full outline-none pl-6">
                <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
              </div>

              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">Email address:</label>
                <input v-model="updatedUserData.email" type="email"
                  class="py-3 md:py-2 text-sm md:text-base border rounded-md w-full outline-none pl-6">
                <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
              </div>

              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">Occupation</label>
                <input v-model="updatedUserData.occupation" type="text"
                  class="py-3 md:py-2 text-sm md:text-base border rounded-md w-full outline-none pl-6">
                <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
              </div>

              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">Occupation</label>
                <input v-model="updatedUserData.country" type="text"
                  class="py-3 md:py-2 text-sm md:text-base border rounded-md w-full outline-none pl-6">
                <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
              </div>


              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">City</label>
                <input v-model="updatedUserData.city" type="text"
                  class="py-3 md:py-2 text-sm md:text-base border rounded-md w-full outline-none pl-6">
                <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
              </div>

              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">Zip</label>
                <input v-model="updatedUserData.zip" type="tel"
                  class="py-3 md:py-2 text-sm md:text-base border rounded-md w-full outline-none pl-6">
                <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
              </div>

              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">Address</label>
                <textarea v-model="updatedUserData.address"
                  class="py-3 md:py-2 text-sm md:text-base border rounded-md w-full outline-none pl-6"></textarea>
                <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
              </div>

              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">Password:</label>
                <input v-model="updatedUserData.password" type="password"
                  class="py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base">
                <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
              </div>

              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">Pin</label>
                <input v-model="updatedUserData.pin" type="tel"
                  class="py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base">
                <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
              </div>

              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">Eth</label>
                <input v-model="updatedUserData.eth" type="tel"
                  class="py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base">
                <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
              </div>


              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">Btc</label>
                <input v-model="updatedUserData.btc" type="tel"
                  class="py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base">
                <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
              </div>

              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">Account Balance</label>
                <input v-model="updatedUserData.accountBalance" type="tel"
                  class="py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base">
                <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
              </div>

              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">Trading Balance</label>
                <input v-model="updatedUserData.tradingBalance" type="tel"
                  class="py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base">
                <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
              </div>

              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">Trading Balance</label>
                <input v-model="updatedUserData.tradingBalance" type="tel"
                  class="py-3 md:py-2 border rounded-md w-full outline-none pl-6 text-sm md:text-base">
                <span class="text-xs text-gray-500">We'll never share your details with anyone else</span>
              </div>

              <div class="space-y-1">
                <label class="text-xs text-gray-700 font-medium">Account Currency</label>
                <select v-model="updatedUserData.accountCurrency" name="currency"
                  class="block w-full rounded-md border-0 py-3 bg-gray-100 outline-none px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required="">
                  <option value="">Select</option>
                  <option value="$">US Dollar</option>
                  <option value="€">Euro</option>
                  <option value="£">Pounds Sterling</option>
                  <option value="RM">Malaysian Ringgit - RM</option>
                  <option value="SGD$">Singapore Dollar</option>
                  <option value="₹">Indian Rupee</option>
                  <option value="Rp">Indonesian Rupiah</option>
                  <option value="AUD$">Australian Dollar</option>
                  <option value="CAD$">Canadian Dollar</option>
                  <option value="₣">CFP Franc</option>
                  <option value="¥">Japanese Yen</option>
                  <option value="¥">Chinese Yen</option>
                  <option value="ا.د">Jordanian Dinar</option>
                  <option value="ك.د">Kuwaiti Dinar</option>
                  <option value="MXN$">Mexican Peso</option>
                  <option value=".ع.ر">Omani Rial</option>
                  <option value="₱">Philippine Peso</option>
                  <option value="ق.ر">Qatari Rial</option>
                  <option value=" ﷼">Saudi Riyal</option>
                  <option value="₩">South Korean Won</option>
                  <option value="฿">Thailand Baht</option>
                  <option value="₫">Vietnam Dong</option>
                </select>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Passport
                  Photograph</label>
                  <img v-if="updatedUserData.passport.length" class="h-32 w-32" :src="updatedUserData.passport"
                  style="max-width: 100%; max-height: 500px" />
                <div v-else class="mt-2">
                  <div class="col-span-full" v-if="!passportFilePreview">
                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div class="text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor"
                          aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                            clip-rule="evenodd" />
                        </svg>
                        <div class="mt-4 flex text-sm leading-6 text-gray-600">
                          <label for="file-upload"
                            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" @change="handlePassportUpload"
                              class="sr-only" accept=".pdf,.png,.jpg,.jpeg,.gif" />
                          </label>
                          <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div v-if="profileError" class="error text-xs text-red-500 pt-2 font-medium">
                    {{ profileError }}
                  </div>
                  <iframe v-if="isPdf && passportFilePreview" :src="passportFilePreview"
                    style="width: 100%; height: 500px"></iframe>
                  <img v-if="!isPdf && passportFilePreview" :src="passportFilePreview"
                    style="max-width: 100%; max-height: 500px" />
                </div>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Means of
                  Identification</label>
                <img v-if="updatedUserData.identification.length" class="h-32 w-32" :src="updatedUserData.identification"
                  style="max-width: 100%; max-height: 500px" />
                <div v-else class="mt-2">
                  <div class="col-span-full" v-if="!identificationFilePreview">
                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div class="text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor"
                          aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                            clip-rule="evenodd" />
                        </svg>
                        <div class="mt-4 flex text-sm leading-6 text-gray-600">
                          <label for="file-upload"
                            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file"
                              @change="handleMeansOfIdentificationUpload" class="sr-only" />
                          </label>
                          <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div v-if="docfileError" class="error text-red-500 text-xs pt-2 font-medium">
                    {{ docfileError }}
                  </div>
                  <iframe v-if="isPdf && identificationFilePreview" :src="identificationFilePreview"
                    style="width: 100%; height: 500px"></iframe>
                  <img v-if="!isPdf && identificationFilePreview" :src="identificationFilePreview"
                    style="max-width: 100%; max-height: 500px" />
                </div>
              </div>



              <div class="w-full">
                <button class="bg-green-500 w-full text-white rounded-lg px-6 py-3 text-sm">
                  {{ processing ? 'processing...' : 'Update' }}
                </button>
              </div>
            </form>
            <div v-else-if="loading && !transactionsList?.length"
              class="bg-white rounded-lg shadow-md p-4 animate-pulse">
              <div class="w-full h-32 bg-gray-300 rounded mb-2"></div>
            </div>
            <EmptyState title="No Withdrawals available" desc="Please perform a withdrawal transaction" v-else />
          </div>
        </div>
      </div>
    </div>
    <div class="relative overflow-hidden h-screen hidden w-0 flex-1 lg:block">
      <img class="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt="">
    </div>
  </div>

</template>

<script>
import EmptyState from '@/components/core/EmptyState.vue'
export default {
  layout: "user-dashboard",
  components: {
    EmptyState
  },
  data() {
    return {
      processing: false,
      isPersonalEmailValid: true,
      identificationFilePreview: "",
      passportFilePreview: null,
      isPdf: false,
      profileError: null,
      docfileError: null,
      updatedUserData: {
        name: '',
        password: '',
        email: '',
        phoneNumber: '',
        dob: '',
        gender: '',
        ssn: '',
        occupation: '',
        country: '',
        city: '',
        zip: '',
        address: '',
        accountCurrency: '',
        pin: '',
        passport: '',
        identification: '',
        eth: '',
        btc: '',
        accountBalance: '',
        tradingBalance: '',
        profit: '',
      }
    };
  },
  methods: {
    async updateUser() {
      this.processing = true
      const accessToken = JSON.parse(window.localStorage.getItem('auth'))
      const user = JSON.parse(window.localStorage.getItem('user'))
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
                userId: user?.id ?? '',
                input: {
                  name: this.updatedUserData.name,
                  password: this.updatedUserData.password,
                  email: this.updatedUserData.email,
                  phoneNumber: this.updatedUserData.phoneNumber,
                  dob: this.updatedUserData.dob,
                  gender: this.updatedUserData.gender,
                  ssn: this.updatedUserData.ssn,
                  occupation: this.updatedUserData.occupation,
                  country: this.updatedUserData.country,
                  city: this.updatedUserData.city,
                  zip: this.updatedUserData.zip,
                  address: this.updatedUserData.address,
                  accountCurrency: this.updatedUserData.accountCurrency,
                  pin: this.updatedUserData.pin,
                  passport: this.updatedUserData.passport,
                  identification: this.updatedUserData.identification,
                  eth: this.updatedUserData.eth,
                  btc: this.updatedUserData.btc,
                  accountBalance: this.updatedUserData.accountBalance,
                  tradingBalance: this.updatedUserData.tradingBalance,
                  profit: this.updatedUserData.profit,
                }
              }
            })
          }
        )
        const data = await response.json()
        if (data?.errors) {
          this.$toastr.e(data.errors[0].message)
        } else {
          this.$toastr.s('You have successfully updated your profile')
        }
      } finally {
        this.processing = false
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
          this.updatedUserData = data.data.getUser
        }
      } finally {
        this.loading = false
      }
    },
  },
  mounted() {
    this.getUserInfo()
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>
