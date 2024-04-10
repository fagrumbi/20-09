<template>
  <main>
    <div>
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
          <dt>
            <div class="absolute rounded-md bg-indigo-500 p-3">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <p class="ml-16 truncate text-sm font-medium text-gray-500">Total Users</p>
          </dt>
          <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p class="text-2xl font-semibold text-gray-900">71,897</p>
            <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
              <svg class="h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                  clip-rule="evenodd" />
              </svg>
              <span class="sr-only"> Increased by </span>
              122
            </p>
            <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div class="text-sm">
                <nuxt-link to="/admins/dashboard/users" class="font-medium text-indigo-600 hover:text-indigo-500">View
                  all<span class="sr-only"> Total Users stats</span></nuxt-link>
              </div>
            </div>
          </dd>
        </div>
        <div class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
          <dt>
            <div class="absolute rounded-md bg-indigo-500 p-3">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
              </svg>
            </div>
            <p class="ml-16 truncate text-sm font-medium text-gray-500">Total Transactions</p>
          </dt>
          <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p class="text-2xl font-semibold text-gray-900">58.16%</p>
            <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
              <svg class="h-5 w-5 flex-shrink-0 self-center text-green-500" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                  clip-rule="evenodd" />
              </svg>
              <span class="sr-only"> Increased by </span>
              5.4%
            </p>
            <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div class="text-sm">
                <nuxt-link to="/admins/dashboard/transactions"
                  class="font-medium text-indigo-600 hover:text-indigo-500">View all<span class="sr-only">Total
                    Transactions</span></nuxt-link>
              </div>
            </div>
          </dd>
        </div>
      </dl>
    </div>
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
import SlideOver from '@/components/dashboard/SlideOver.vue';
export default {
  layout: 'admin-dashboard',
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
    Transfer
  },
  data() {
    return {
      showSideOver: false,
      isModalVisible: false,
      selectedItem: '',
      stats: {},
      loading: false
    }
  },
  methods: {
    closeSlideOver() {
      this.showSideOver = false
    },
    handleSelectedAction(itm) {
      this.selectedItem = itm
      this.isModalVisible = true
      // this.showSideOver = true
    },
    async fetchAdminStats() {
      this.loading = true
      const accessToken = JSON.parse(window.localStorage.getItem('auth'))
      this.loading = true
      const query = `
        query {
          getAdminStats {
            totalProfit
            totalWithdrawal
            totalUsers
            totalDeposits
            tradingBalance
          }
        }
      `

      try {
        const response = await fetch('https://visionary-zpui.onrender.com/graphql/query', {
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
          this.stats = data.data.getAdminStats
        }
      } finally {
        this.loading = false
      }
    },
    goBack() {
      this.$router.go(-1)
    },
    formatNumberAsDollar(number) {
      return number?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
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
  }
}
</script>

<style></style>
