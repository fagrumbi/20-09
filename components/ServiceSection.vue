<template>
  <div class="bg-[#2548af] py-20 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8 space-y-14">
      <h2 class="lg:text-3xl text-center text-white">How Can We Help You Today?</h2>
      <dl class="grid grid-cols-1 gap-16 lg:grid lg:grid-cols-3">
        <div v-for="itm in services" :key="itm.name">
          <dt class="flex items-center gap-x-3">
            <!-- <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white"> -->
            <img :src="require(`@/assets/icons/${itm.icon}.svg`)" class="h-16 w-16" />
            <!-- </div> -->
            <p class="text-lg font-medium leading-8 tracking-tight text-white">{{ itm.name }}</p>
          </dt>
        </div>
      </dl>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          name: 'Instant Accounts',
          icon: 'check-account',
        },
        {
          name: 'Credit Cards',
          icon: 'about'
        },
        {
          name: 'Loans',
          icon: 'loans'
        },
        {
          name: 'Business Banking',
          icon: 'businessbanking'
        },
        {
          name: 'Wealth & Retire',
          icon: 'invest'
        },
        {
          name: 'About Bastion',
          icon: 'about'
        }
      ]
    }
  }
}
</script>

<style></style>
