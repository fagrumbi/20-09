<template>
  <main>
    <!-- <ReuseableHeroSection>
      <template #title>
        <h1>Insurance Services</h1>
      </template>
<template #description>
        <p>Enjoy lower premiums and priceless peace of mind when you secure your auto, home, and future with Bastion.
        </p>
      </template>
</ReuseableHeroSection> -->
    <ReuseableMiniHero title="Insurance Services" intro="Insure"
      desc="Enjoy lower premiums and priceless peace of mind when you secure your auto, home, and future with Bastion."
      imgUrl="https://bastionbanks.com/templates/bank-pro/invest-images/wealth-management-bucks-county-what-is-estate-planning.jpg" />
    <div class="text-base px-4 lg:px-0 max-w-7xl mx-auto space-y-6 pt-16">
      <p class="mx-auto mt-5 max-w-full text-gray-800">Bastion offers convenient, simple and free banking
        As a Bastion customer, you’ll enjoy lower insurance premiums on auto, renters, homeowners, life, and more. With
        Bastion’s full range of insurance services, you can get the comprehensive coverage you need and feel assured
        that
        your family’s financial stability is protected no matter what. Our premiums are affordable. Your security is
        priceless.</p>
    </div>
    <!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
    <div class="bg-gray-50">
      <div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 class="text-4xl font-bold tracking-tight text-gray-900">Bastion is dedicated to protecting the
                finances,
                privacy, and data of our customers.</h2>
              <p class="mt-4 text-gray-500">You Might Also Like</p>
            </div>
            <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
              <img src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg" alt=""
                class="object-cover object-center">
            </div>
          </div>
          <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div class="sm:flex lg:block">
              <div class="sm:flex-shrink-0">
                <!-- <img class="h-16 w-16" src="https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg" alt=""> -->
              </div>
              <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                <h3 class="text-base font-medium text-gray-900">Learn &amp; Plan | Financial Wellness &amp; Self-Care
                </h3>
                <p class="mt-2 text-sm text-gray-500">Practicing self-care and financial wellness go hand in hand with
                  keeping
                  your overall health in check. Here are some ways you can work healthy
                  financial habits into your regular routine.</p>
              </div>
            </div>
            <div class="sm:flex lg:block">
              <div class="sm:flex-shrink-0">
                <!-- <img class="h-16 w-16" src="https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg" alt=""> -->
              </div>
              <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                <h3 class="text-base font-medium text-gray-900">Learn &amp; Plan | What is Mobile Banking?</h3>
                <p class="mt-2 text-sm text-gray-500">Mobile banking is growing, and it’s normal to have concerns. With
                  Bastion,
                  learn about the benefits and added security of digital banking, today.</p>
              </div>
            </div>
            <div class="sm:flex lg:block">
              <div class="sm:flex-shrink-0">
                <!-- <img class="h-16 w-16" src="https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg" alt=""> -->
              </div>
              <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                <h3 class="text-base font-medium text-gray-900">Learn &amp; Plan | How to Avoid Getting Scammed</h3>
                <p class="mt-2 text-sm text-gray-500">Scammers are working non-stop to steal your personal information
                  and
                  commit fraud. Don’t fall victim to their tactics, learn how to spot red
                  flags and avoid scams. Learn more!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ReuseableCardsSection :data="bankingTools" />
    <ReuseableContactSection class="mt-10" />
  </main>
</template>

<script>
import ReuseableMiniHero from '@/components/core/ReuseableMiniHero.vue'
import ReuseableContactSection from '@/components/core/ReuseableContactSection.vue'
import ReuseableCardsSection from '@/components/core/ReuseableCardsSection.vue'
import ReuseableHeroSection from '@/components/core/ReuseableHeroSection.vue';
export default {
  head() {
    return {
      title: 'Bastons Banks | Insure',
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO meta tags
        { hid: 'description', name: 'description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },

        // Open Graph / Facebook meta tags for rich sharing
        { hid: 'og:title', property: 'og:title', content: 'Bastons Banks | Insure' },
        { hid: 'og:description', property: 'og:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.bastonsbanks.com/insure' },
        { hid: 'og:image', property: 'og:image', content: 'https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png' },

        // Twitter Card meta tags
        { hid: 'twitter:card', name: 'twitter:card', content: '' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Bastons Banks | Insure' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  components: {
    ReuseableHeroSection,
    ReuseableCardsSection,
    ReuseableContactSection,
    ReuseableMiniHero
  },
  data() {
    return {
      bankingTools: [
        {
          title: 'Medicare Insurance',
          desc: `At Bastion, we offer consultative services with a certified Medicare
      Specialist to help you and your family be prepared in retirement.`
        }, {
          title: 'Auto Insurance',
          desc: `Take the hassle out of insurance shopping. Bastion works with Travelers to
      bring our members quality coverage, special rates, and discounts on
      premiums. Get a free quote today.`
        }, {
          title: 'Homeowners and Renters Insurance',
          desc: `Protect your home from damage or loss with homeowners insurance from
      Bastion. We will work with you to help you get the coverage you need at a
      fair price. Get a free quote today.`
        },
        {
          title: 'Life Insurance',
          desc: ` Bastion offers affordable and flexible life insurance, and free guidance
      with an insurance expert.&nbsp;`
        },
        {
          title: 'Accidental Death &amp; Dismemberment (AD&amp;D) Insurance',
          desc: `&nbsp;Your accidental death can leave your family with a significant
      financial burden. Don’t leave them unprepared.`
        },
        {
          title: 'Hospital Accident Insurance',
          desc: `Hospital Accident Insurance protects you and your family in the event you
      are hospitalized due to an accident. Learn more and enroll today.`
        }
      ]
    }
  }
}
</script>
