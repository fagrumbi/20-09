<template>
  <main>
    <ReuseableHeroSection
      imgUrl="https://bastionbanks.com/templates/bank-pro/bank-images/Citadel_AlkemyX_03546_bank_tony_1600x650.jpg">
      <template #title>
        <h1>Bank Accounts, Credit Cards & Digital Tools</h1>
      </template>
      <template #description>
        <p>Check out our safe and secure checking accounts with free debit cards for everyday spending, plus rewarding
          credit cards, and helpful Online & Mobile Banking tools.</p>
      </template>
      <template #actions>
        <div class="lg:flex items-center px-6 space-y-6 lg:space-y-0">
          <button type="button"
            class="rounded-full w-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">OPEN
            AN ACCOUNT</button>
          <button type="button"
            class="rounded-full w-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">SCHEDULE
            AN APPOINTMENT</button>
        </div>
      </template>
    </ReuseableHeroSection>
    <div class="text-base max-w-7xl px-4 lg:px-0 mx-auto space-y-6 pt-16">
      <p class="mx-auto mt-5 max-w-full text-gray-800">Bastion offers convenient, simple and free banking
        solutions
        that make your experience more valuable and rewarding. Choose from credit cards with low interest rates and cash
        back and checking accounts loaded with debit card rewards you can earn from everyday spending.</p>
      <p class="mx-auto mt- max-w-full text-gray-800">You can bank with us at any time, from anywhere with
        Bastion’s online and mobile banking solutions. If you’d rather come in and bank face-to-face, we’re conveniently
        located near you. Can't make it into a branch? Schedule an appointment with a local Bastion team member
        in-person or
        over the phone.

      </p>
      <p class="mx-auto mt-5 max-w-full text-gray-800">Learn more about Bastion's credit cards with low
        interest,
        checking accounts, cash back rewards, and more by contacting us today!</p>
    </div>
    <ReuseableCardsSection :data="bankingTools" />
    <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg
          class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true">
          <defs>
            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1"
              patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Bastion?</h1>
            </div>
          </div>
        </div>
        <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="@/assets/img/focused.jpg" alt="">
        </div>
        <div
          class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>Bastion is a not-for-profit credit union that exists to serve the people, businesses, and neighborhoods
                of
                Greater Philadelphia, so they can prosper. We provide our members with all things banking, plus the
                educational resources and guidance to build and maintain financial security.</p>
              <h1 class="font-semibold text-gray-800 text-lg">Here’s why you should join us:</h1>
              <ul role="list" class="mt-8 space-y-8 text-gray-600">
                <li v-for="itm in reasonsToJoin" :key="itm" class="flex gap-x-3">
                  <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                      clip-rule="evenodd" />
                  </svg>
                  <span>{{ itm }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ReuseableContactSection />
  </main>
</template>

<script>
import ReuseableContactSection from '@/components/core/ReuseableContactSection.vue'
import ReuseableCardsSection from '@/components/core/ReuseableCardsSection.vue'
import ReuseableHeroSection from '@/components/core/ReuseableHeroSection.vue';
export default {
  components: {
    ReuseableHeroSection,
    ReuseableCardsSection,
    ReuseableContactSection
  },
  data() {
    return {
      bankingTools: [
        {
          title: 'Checking Accounts',
          desc: `Bastion’s checking accounts offer 24/7 account management with online bill pay, mobile deposit, account alerts, and more. Compare the benefits of each Bastion Checking Account to find the right one for you.`
        }, {
          title: 'Teen Debit Accounts',
          desc: `Help your teenager get real world ready with a free debit card starting at age 13. Practice everyday saving and spending skills, and monitor activity in Online & Mobile Banking.`
        }, {
          title: 'Compare Credit Cards',
          desc: `Choosing the credit card that makes financial sense is easy when you compare Bastion's Mastercard® credit cards. You get low rates, security, and rewards—no matter which you choose.`
        },
        {
          title: 'Credit Card Rewards',
          desc: ` Bastion offers
                      a variety of credit card rewards and redemption options. Learn more about
                      the types of rewards available and how to redeem.&nbsp;`
        },
        {
          title: 'Contactless Payments',
          desc: `Contactless payments make paying faster, easier, and more
                      secure. Simply tap to pay with your
                      Bastion debit
                      or credit card at checkout when you’re on-the-go.`
        },
        {
          title: 'Bank by Phone with Adel',
          desc: `Introducing Voice Banking With Adel! Get quick answers to
                      common banking questions, complete account inquiries, and conduct routine
                      transactions in a secure environment. Learn more!`
        },
        {
          title: 'Online &amp; Mobile Banking at Bastion',
          desc: `Bastion has
                      digital banking tools to meet your needs. Deposit checks with your mobile
                      device, pay bills online, check balances on the go, and more.`
        },
        {
          title: 'Bastion Express Banking',
          desc: `Bastion offers
                      Express Banking Machines, letting customers transact conveniently and
                      securely. Learn more about how our Express Banking offers more than the
                      typical ATM.`
        },
        {
          title: 'Bastion Video Connect',
          desc: `Connect with us from the comfort of home with our
                          secure, video banking tool. Chat face-to-face with a representative
                          using your computer or mobile device. Learn more.&nbsp;`
        },
        {
          title: 'Online Appointment Scheduling',
          desc: `Book an appointment with a local
                      Bastion Team
                      member in-person or over the phone. We look forward to meeting with you!`
        },
        {
          title: 'Why Bank With Bastion Credit Union?',
          desc: `Our members enjoy great rates, lower fees, exclusive
                      benefits, superior customer service, and so much more.`
        },
        {
          title: 'Superior Member Service',
          desc: `Bastion, we
                      promise to go beyond merely meeting your banking needs to deliver a better
                      experience with every interaction. Find out how we fulfill this promise
                      every day.`
        }
      ],
      reasonsToJoin: ['Better rates & low (or no!) fees', 'No tricks or hidden selling tactics', 'Personalized banking experiences, online & in-person', 'Open to anyone who lives or spends time in Southeast PA', 'All you need to do is open a savings account to join']
    }
  }
}
</script>
