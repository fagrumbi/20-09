<template>
  <div class="bg-white ">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">START BUILDING YOUR FINANCIAL STRENGTH
        </h2>
        <!-- <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p> -->
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <nuxt-link v-for="(itm, idx) in blogs" :key="idx" :to="itm.path"
          class="relative isolate flex flex-col justify-end overflow-hidden block rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
          <img :src="require(`@/assets/img/${itm.imgSrc}`)" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

          <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time datetime="2020-03-16" class="mr-8">{{ itm.tag }}</time>
          </div>
          <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
            <a href="#">
              <span class="absolute inset-0"></span>
              {{ itm.title }}
            </a>
            <p class="text-sm text-gray-200 font-thin">{{ itm.desc }}</p>
          </h3>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          title: 'Checklist: 5 Things to Remember',
          desc: `Tax season is quickly approaching—do
              you know what you need to claim, and what forms you need to submit? This tax
              checklist makes filing simple. Learn more today!`,
          tag: 'Starting Out',
          imgSrc: 'checklist.jpg',
          path: '/learn-and-plan/tax-checklist'
        },
        {
          title: `How to
                      Manage Your Checking`,
          desc: '',
          tag: 'Starting Out',
          imgSrc: 'manage-checking.jpg',
          path: '/learn-and-plan/manage-checking-account'
        },
        {
          title: `How to Save for
                      Summer Vacation`,
          desc: '',
          tag: 'Starting Out',
          imgSrc: 'group.jpg',
          path: '/learn-and-plan/summer-saving'
        },
        {
          title: `How
                      Rising Rates and Inflation Impact Businesses`,
          desc: '',
          tag: 'Running a Business',
          imgSrc: 'running-business.jpg',
          path: '/learn-and-plan/rising-rates-impact'
        }
      ]
    }
  }
}
</script>
