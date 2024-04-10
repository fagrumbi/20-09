<template>
  <main>
    <div class="space-y-6">
      <ReuseableMiniHero title="The Smart Place to Save"
        desc="Bastion Bank is a highly ranked global financial institution" intro="Save"
        imgUrl="https://bastionbanks.com/templates/bank-pro/save-images/Citadel_AlkemyX_06578_save_family_1600x650.jpg" />

      <section class="max-w-7xl px-4 lg:px-0 mx-auto space-y-8 pb-10">
        <div class="space-y-10">
          <p class="text-gray-600"> Whether you are saving toward short- or long- term goals, or creating a retirement
            nest
            egg, we can help you
            find
            the savings plan that works best for you. Enjoy competitive savings account rates on products for the entire
            family.</p>

          <p class="text-gray-600"> At Bastion, we have an array of products to meet your savings goals — from <span
              class="text-[#1e75a4] font-semibold">High Yield
              Savings accounts</span> to <span class="text-[#1e75a4] font-semibold">Kids
              Savings Accounts</span> and <span class="text-[#1e75a4] font-semibold">Holiday Club, Money Market Savings
              Accounts</span> and more!</p>
          <p class="text-gray-600">
            <span class="text-[#1e75a4] font-semibold"> Open a Savings Account</span> online with Bastion today! Not
            sure
            sure which account is right for you?
            <span class="text-[#1e75a4] font-semibold">Schedule an
              appointment</span> to speak with a representative today.
          </p>
        </div>

        <div class="space-y-8">
          <div>
            <h1 class="text-[#185a7d] font-semibold text-lg">The Smart Place to Save</h1>
            <p class="text-xs italic text-gray-600"> **Bastion is recognized as a Forbes 2021 Best-in-State Credit Union
              and
              in the top 1 percent for returning
              value
              nationwide in the 2021 Callahan & Associates Return to Member scoring.</p>
          </div>

          <div class="">
            <h1 class="text-[#185a7d] font-semibold text-base">High Yield Savings Account</h1>
            <p class="font-light">If a savings account with continuous high returns and flexible access to your money
              makes
              sense for you,
              learn
              more about our High Yield Savings Account today!</p>

          </div>
          <div class="">
            <h1 class="text-[#185a7d] font-semibold text-base">Star Savings</h1>
            <p class="font-light">The Bastion Savings account makes it easy to save for your short- or long-term goals.
              Open
              an account today,
              and
              enjoy better rates, online and mobile banking, and much more.</p>
          </div>

          <div class="">
            <h1 class="text-[#185a7d] font-semibold text-base">Certificates</h1>
            <p class="font-light">Bastion Certificates – commonly referred to as CDs or certificates of deposit by other
              financial institutions
              –
              offer high rates and flexible terms. Lock in a great rate today!</p>

          </div>
          <div class="">
            <h1 class="text-[#185a7d] font-semibold text-base">Holiday Club & Auxiliary Savings</h1>
            <p class="font-light">Our Holiday Club Savings account lets you put money aside and grow with no minimum
              balance. Each year, the
              funds
              are transferred to your Bastion Savings account for the holidays. Learn more.</p>
          </div>

          <div class="">

            <h1 class="text-[#185a7d] font-semibold text-base">Kids Club Star Savings</h1>
            <p class="font-light">Learn more about the Bastion Kids Club, which is the perfect savings account for
              children.
              Your child will
              learn
              smart saving habits and receive $10 each birthday.</p>

          </div>
          <div class="">
            <h1 class="text-[#185a7d] font-semibold text-base">Money Market Account</h1>
            <p class="font-light">Bastion’s Money Market account has consistently higher rates that increase as your
              balance
              grows. Open an
              account
              and start saving more today.</p>
          </div>
        </div>
      </section>
      <div class="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
        <div class="absolute inset-0 overflow-hidden">
          <img src="https://bastionbanks.com/templates/bank-pro/images/assets/citadel-customer-support.jpg" alt=""
            class="h-full w-full object-cover object-center">
        </div>
        <div aria-hidden="true" class="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to speak with a representative
            about
            a Bastion savings
            account?</h2>
          <a href="mailto:support@bastionbanks.com"
            class="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Schedule
            an appointment</a>
        </div>
      </div>
    </div>
    <ReuseableContactSection />
  </main>
</template>

<script>
import ReuseableMiniHero from "@/components/core/ReuseableMiniHero.vue";
import ReuseableContactSection from '@/components/core/ReuseableContactSection.vue'
export default {
  components: {
    ReuseableMiniHero,
    ReuseableContactSection
  },
};
</script>
