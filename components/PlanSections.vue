<template>
  <div class="border border-gray-300 rounded-md p-6 max-w-5xl mx-auto">
    <div class="max-w-2xl mx-auto">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select id="tabs" name="tabs"
          class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
          <option selected>My Account</option>
          <option>Company</option>
          <option>Team Members</option>
          <option>Billing</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
          <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" -->
          <a href="#" @click.prevent="activeTab = 'baston_rates'"
            :class="{ 'bg-green-500': activeTab === 'baston_rates', 'hover:bg-red-500': activeTab !== 'baston_rates' }"
            class="text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden py-6 px-4 text-center text-sm font-medium focus:z-10"
            aria-current="page">
            <span
              :class="{ 'text-white': activeTab === 'baston_rates', 'text-blue-600': activeTab !== 'baston_rates' }">BASTION
              RATES</span>
            <span aria-hidden="true"
              :class="{ 'bg-indigo-500': activeTab === 'baston_rates', 'bg-transparent': activeTab !== 'baston_rates' }"
              class="absolute inset-x-0 bottom-0 h-0.5"></span>
          </a>
          <a href="#" @click.prevent="activeTab = 'baston_member_care'"
            :class="{ 'bg-green-500': activeTab === 'baston_member_care', 'hover:bg-red-500': activeTab !== 'baston_member_care' }"
            class="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden py-6 px-4 text-center text-sm font-medium focus:z-10">
            <span
              :class="{ 'text-white': activeTab === 'baston_member_care', 'text-blue-600': activeTab !== 'baston_member_care' }">BASTION
              MEMBER CARE</span>
            <span aria-hidden="true"
              :class="{ 'bg-indigo-500': activeTab === 'baston_member_care', 'bg-transparent': activeTab !== 'baston_member_care' }"
              class="absolute inset-x-0 bottom-0 h-0.5"></span>
          </a>
        </nav>
        <div v-if="activeTab === 'baston_rates'" class="pt-16">
          <div class="flex justify-between items-center">
            <div v-for="itm in bastonMemberCare" :key="itm.name"
              class="flex gap-y-3 justify-center items-center flex-col">
              <img :src="require(`@/assets/icons/${itm.icon}.svg`)" class="h-14 w-14" />
              <p class="text-blue-600 font-medium text-sm">{{ itm.name }}</p>
            </div>
          </div>
        </div>
        <div v-if="activeTab === 'baston_member_care'" class="pt-16">
          <div class="flex justify-between items-center">
            <div v-for="itm in bastonMemberCare" :key="itm.name"
              class="flex gap-y-3 justify-center items-center flex-col">
              <img :src="require(`@/assets/icons/${itm.icon}.svg`)" class="h-14 w-14" />
              <p class="text-blue-600 font-medium text-sm">{{ itm.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      activeTab: 'baston_member_care',
      bastonMemberCare: [
        {
          name: 'SEND A MESSAGE',
          icon: 'send-message'
        },
        {
          name: 'CALL US',
          icon: 'call'
        },
        {
          name: 'SCHEDULE AN APPOINTMENT',
          icon: 'call'
        },
        {
          name: 'FAQS AND SUPPORT',
          icon: 'FAQs'
        }
      ]
    }
  }
}
</script>

<style></style>
