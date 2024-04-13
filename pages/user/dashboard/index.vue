<template>
  <main>
    <SlideOver :showSideOver="showSideOver" @close="closeSlideOver" v-if="showSideOver" />
    <Statistics :userData="userData" />
    <div class="lg:flex gap-x-6 mt-10 z-50">
      <div class="rounded-md hidden lg:block w-full border-[0.6px] p-6 bg-white shadow">
        <div class="border-b py-6 border-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button
            class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
            @click="handleSelectedAction('wire-transfer')">
            <img src="@/assets/img/transfer2.png" alt="" class="" />
            <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Wire Transfer</p>
          </button>
          <button
            class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
            @click="handleSelectedAction('local-transfer')">
            <img src="@/assets/img/transfer2.png" alt="" />
            <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Local Transfer</p>
          </button>
          <button
            class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
            @click="handleSelectedAction('internal-transfer')">
            <img src="@/assets/img/transfer2.png" alt="" />
            <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Internal Transfer</p>
          </button>
        </div>
        <div class="border-b py-6 border-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button
            class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
            @click="handleSelectedAction('buy-crypto')">
            <img src="@/assets/img/crypto.png" alt="" />
            <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Buy Crypto</p>
          </button>
          <button
            class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
            @click="handleSelectedExceptionAction('pay-bills')">
            <img src="@/assets/img/bills.png" alt="" />
            <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Pay Bills</p>
          </button>
          <button
            class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
            @click="handleSelectedExceptionAction('add-beneficiary')">
            <img src="@/assets/img/beneficiary.png" alt="" />
            <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Add Beneficiary</p>
          </button>
        </div>
        <div class="py-6 border-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button
            class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
            @click="handleSelectedAction('card-deposit')">
            <img src="@/assets/img/card-deposit.png" alt="" />
            <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Card Deposit</p>
          </button>
          <button
            class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
            @click="handleSelectedAction('crypto-deposit')">
            <img src="@/assets/img/crypto-deposit.png" alt="" />
            <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Crypto Deposit</p>
          </button>
          <button
            class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
            @click="handleSelectedAction('cheque-deposit')">
            <img src="@/assets/img/card-deposit.png" alt="" />
            <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Cheque Deposit</p>
          </button>
        </div>
      </div>
      <div class="rounded-md lg:hidden grid grid-cols-2 gap-8 w-full border-[0.6px] p-6 bg-white shadow">
        <button
          class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
          @click="handleSelectedAction('wire-transfer')">
          <img src="@/assets/img/transfer2.png" alt="" class="" />
          <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Wire Transfer</p>
        </button>
        <button
          class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
          @click="handleSelectedAction('local-transfer')">
          <img src="@/assets/img/transfer2.png" alt="" />
          <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Local Transfer</p>
        </button>
        <button
          class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
          @click="handleSelectedAction('internal-transfer')">
          <img src="@/assets/img/transfer2.png" alt="" />
          <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Internal Transfer</p>
        </button>
        <button
          class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
          @click="handleSelectedAction('buy-crypto')">
          <img src="@/assets/img/crypto.png" alt="" />
          <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Buy Crypto</p>
        </button>
        <button
          class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
          @click="handleSelectedExceptionAction('pay-bills')">
          <img src="@/assets/img/bills.png" alt="" />
          <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Pay Bills</p>
        </button>
        <button
          class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
          @click="handleSelectedExceptionAction('add-beneficiary')">
          <img src="@/assets/img/beneficiary.png" alt="" />
          <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Add Beneficiary</p>
        </button>
        <button
          class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
          @click="handleSelectedAction('card-deposit')">
          <img src="@/assets/img/card-deposit.png" alt="" />
          <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Card Deposit</p>
        </button>
        <button
          class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
          @click="handleSelectedAction('crypto-deposit')">
          <img src="@/assets/img/crypto-deposit.png" alt="" />
          <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Crypto Deposit</p>
        </button>
        <button
          class="flex group justify-center items-center flex-col border-[0.6px] border-gray-300 py-2.5 shadow rounded-md hover:bg-green-300"
          @click="handleSelectedAction('cheque-deposit')">
          <img src="@/assets/img/card-deposit.png" alt="" />
          <p class="font-semibold text-gray-600 text-sm group-hover:text-gray-400">Cheque Deposit</p>
        </button>
      </div>
      <!-- <div class="lg:w-4/12 border-[0.6px] rounded-md p-4 space-y-6">
        <div class="font-medium text-sm py-3 border-b border-gray-300">Your Account Debit</div>
        <DebitCard class="" />
      </div> -->
    </div>
    <Modal :isVisible.sync="isModalVisible">
      <main class="relative space-y-6">
        <div class="absolute right-0 top-0">
          <svg @click="isModalVisible = false" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="22"
            height="22" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="2.5" stroke-linecap="round"
            stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <div class="flex justify-center items-center">
          <img src="@/assets/img/sad.png" class="h-32 w-32" />
        </div>
        <h1 class="text-xl font-extrabold text-center">Oops! sorry</h1>
        <h1 class="text-base text-gray-500 text-center">This {{ computedModalHeader }} not currently supported. Please
          Contact Admin
        </h1>
        <div class="w-full">
          <button @click="isModalVisible = false" class="bg-green-600 text-white py-3 w-full rounded-md">Close</button>
        </div>
      </main>
    </Modal>

    <SlideOver :isVisible="isSlideOverVisible" @update:isVisible="isSlideOverVisible = $event">
      <div class="flex  flex-col justify-center">
        <div class="flex items-center gap-x-3 justify-center">
          <h2 class="text-center text-xl font-bold leading-9 tracking-tight text-blue-700">{{ computedModalHeader }}
          </h2>
        </div>

        <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <AddBeneficiary v-if="selectedItem === 'add-beneficiary'" />
          <BuyCrypto @cryptoPurchaseSuccess="closeModal" v-if="selectedItem === 'buy-crypto'" />
          <CardDeposit @cardDepositSuccess="closeModal" v-if="selectedItem === 'card-deposit'" />
          <CheckDeposit @chequeDepositSuccess="closeModal" v-if="selectedItem === 'cheque-deposit'" />
          <CryptoDeposit @cryptoDepositSuccess="closeModal" v-if="selectedItem === 'crypto-deposit'" />
          <PayBills v-if="selectedItem === 'pay-bills'" />
          <Transfer @transferSuccess="closeModal" @internalTransferSuccess="closeModal"
            @localTransferSuccess="closeModal"
            v-if="selectedItem === 'wire-transfer' || selectedItem === 'local-transfer' || selectedItem === 'internal-transfer'" />
        </div>
      </div>
    </SlideOver>
  </main>
</template>

<script>
import AddBeneficiary from '@/components/dashboard/QuickActions/AddBeneficiary.vue';
import BuyCrypto from '@/components/dashboard/QuickActions/BuyCrypto.vue';
import CardDeposit from '@/components/dashboard/QuickActions/CardDeposit.vue';
import CheckDeposit from '@/components/dashboard/QuickActions/CheckDeposit.vue';
import CryptoDeposit from '@/components/dashboard/QuickActions/CryptoDeposit.vue';
import PayBills from '@/components/dashboard/QuickActions/PayBills.vue';
import Transfer from '@/components/dashboard/QuickActions/Transfer.vue';
import Modal from '@/components/core/Modal.vue'
import DebitCard from '@/components/dashboard/DebitCard.vue'
import QuickActions from '@/components/dashboard/QuickActions.vue';
import Statistics from '@/components/dashboard/Statistics.vue'
import SlideOver from '@/components/core/SlideOver.vue'
export default {
  layout: 'user-dashboard',
  head() {
    return {
      title: 'Bastons Banks | User Dashboard',
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO meta tags
        { hid: 'description', name: 'description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },

        // Open Graph / Facebook meta tags for rich sharing
        { hid: 'og:title', property: 'og:title', content: 'Bastons Banks | User Dashboard' },
        { hid: 'og:description', property: 'og:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.bastonsbanks.com/user/dashboard' },
        { hid: 'og:image', property: 'og:image', content: 'https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png' },

        // Twitter Card meta tags
        { hid: 'twitter:card', name: 'twitter:card', content: '' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Bastons Banks | User Dashboard' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  components: {
    SlideOver,
    Statistics,
    QuickActions,
    DebitCard,
    Modal,
    AddBeneficiary,
    BuyCrypto,
    CardDeposit,
    CheckDeposit,
    CryptoDeposit,
    PayBills,
    Transfer,
    // ReuseableSlideOver
  },
  data() {
    return {
      showSideOver: false,
      isSlideOverVisible: false,
      isModalVisible: false,
      selectedItem: '',
      loading: false,
      userData: {},
    }
  },
  methods: {
    closeModal() {
      // Use the $router to replace the current URL with one without query parameters
      this.$router.replace({ query: {} })
      this.isSlideOverVisible = false
    },
    closeSlideOver() {
      this.showSideOver = false
    },
    setQueryParams(params) {
      this.$router.push({
        path: this.$route.path,
        query: { page: params.page },
      });
      // this.$router.push({ query: { ...this.$route.query, ...params } });
    },
    handleSelectedAction(itm) {
      this.selectedItem = itm
      this.isSlideOverVisible = true
      this.setQueryParams({ page: itm });
    },
    handleSelectedExceptionAction(itm) {
      this.selectedItem = itm
      this.isModalVisible = true
    },
    async getUserInfo() {
      this.loading = true
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
            accountNumber
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
          this.userData = data.data.getUser
        }
      } finally {
        this.loading = false
      }
    },
    formatNumberAsDollar(number) {
      return number?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    },
    formatDateTime(date) {
      // Check if date is a string and convert it to a Date object
      if (typeof date === 'string') {
        date = new Date(date)
      }

      // Check if date is a valid Date object
      if (Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime())) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }
        return date.toLocaleDateString('en-US', options)
      } else {
        return 'Invalid Date'
      }
    }
  },
  computed: {
    computedModalHeader() {
      return this.selectedItem
        .split('-')
        // Capitalize the first letter of each word
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        // Join the words back into a single string with spaces
        .join(' ');

    }
  },
  mounted() {
    this.getUserInfo()
  }
}
</script>

<style></style>
