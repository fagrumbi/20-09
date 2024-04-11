<template>
  <ul role="list" class="grid grid-cols-1 gap-x-6 gap-y-8 overflow-x-visible lg:grid-cols-3 xl:gap-x-8">
    <li class="overflow-hidden rounded-xl border border-gray-200">
      <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
        <img src="@/assets/img/current-balance.png" alt="Tuple"
          class="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10">
        <div class="text-sm font-medium leading-6 text-gray-900">Account Balance</div>
        <div class="relative ml-auto">
          <button type="button" class="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500" id="options-menu-0-button"
            aria-expanded="false" aria-haspopup="true">
            <span class="sr-only">Open options</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
            </svg>
          </button>
        </div>
      </div>
      <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
        <div class="flex justify-between gap-x-4 py-3">
          <dt class="text-gray-500">Last balance</dt>
          <dd class="text-gray-700"><time datetime="2022-12-13">
              {{ userData.accountCurrency ?? 'Nil' }}
              {{ formatNumber(userData.accountBalance) ?? 'Nil' }}</time></dd>
        </div>
        <div class="flex justify-between gap-x-4 py-3">
          <dt class="text-gray-500">Currency</dt>
          <dd class="flex items-start gap-x-2">
            <div class="font-medium text-gray-900">{{ userData.accountCurrency ?? 'Nil' }}</div>
          </dd>
        </div>
      </dl>
    </li>
    <li class="overflow-hidden rounded-xl border border-gray-200">
      <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
        <img src="@/assets/img/card-balance.png" alt="SavvyCal"
          class="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10">
        <div class="text-sm font-medium leading-6 text-gray-900">Card Balance</div>
        <div class="relative ml-auto">
          <button type="button" class="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500" id="options-menu-1-button"
            aria-expanded="false" aria-haspopup="true">
            <span class="sr-only">Open options</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
            </svg>
          </button>
        </div>

      </div>
      <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
        <div class="flex justify-between gap-x-4 py-3">
          <dt class="text-gray-500">Last balance</dt>
          <dd class="text-gray-700"><time datetime="2023-01-22">
              {{ userData.accountCurrency ?? 'Nil' }}
              {{ formatNumber(userData.cardBalance) ?? 'Nil' }}
            </time></dd>
        </div>
        <div class="flex justify-between gap-x-4 py-3">
          <dt class="text-gray-500">Currency</dt>
          <dd class="text-gray-700"><time datetime="2023-01-22">{{ userData.accountCurrency ?? 'Nil' }}</time></dd>
        </div>
      </dl>
    </li>
    <li class="overflow-hidden rounded-xl border border-gray-200 mr-[-20px]">
      <DebitCard :userData="userData" class="" />
    </li>
  </ul>

</template>

<script>
import DebitCard from '@/components/dashboard/DebitCard.vue'
export default {
  components: {
    DebitCard,
  },
  props: {
    userData: {
      type: Object,
      default: {}
    }
  },
  methods: {
    formatNumber(number) {
      return number?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    },
  }
}
</script>

<style></style>
