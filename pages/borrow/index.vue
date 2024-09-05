<template>
  <main>
    <!-- <ReuseableHeroSection>
      <template #title>
        <h1>Loans & Lines of Credit</h1>
      </template>
<template #description>
        <p>Bastion’s range of lending products makes it easy to access the money you need, when you need it.</p>
      </template>
</ReuseableHeroSection> -->
    <ReuseableMiniHero title="Loans & Lines of Credit" intro=""
      desc="Bastion’s range of lending products makes it easy to access the money you need, when you need it."
      imgUrl="hero4.jpg" />
    <div class="text-base px-4 lg:px-0 max-w-7xl mx-auto space-y-6 pt-16">
      <p class="mx-auto mt-5 max-w-full text-gray-800">Enjoy low rates on all our loan products. Business or personal,
        one-time or ongoing— Bastion is here to support all your financing needs. Whether looking for the best auto loan
        rates, low interest personal loans or our current mortgage interest rates, we're here to help!</p>
    </div>
    <ReuseableCardsSection :data="borrowTools" />
    <ReuseableContactSection />
  </main>
</template>

<script>
import ReuseableMiniHero from '@/components/core/ReuseableMiniHero.vue'
import ReuseableContactSection from '@/components/core/ReuseableContactSection.vue'
import ReuseableCardsSection from '@/components/core/ReuseableCardsSection.vue'
import ReuseableHeroSection from '@/components/core/ReuseableHeroSection.vue'
export default {
  head() {
    return {
      title: 'Bastons Banks | Borrow',
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO meta tags
        { hid: 'description', name: 'description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },

        // Open Graph / Facebook meta tags for rich sharing
        { hid: 'og:title', property: 'og:title', content: 'Bastons Banks | Borrow' },
        { hid: 'og:description', property: 'og:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: '' },
        { hid: 'og:image', property: 'og:image', content: '                   ' },

        // Twitter Card meta tags
        { hid: 'twitter:card', name: 'twitter:card', content: '' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Bastons Banks | Borrow' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'twitter:image', name: 'twitter:image', content: '' },
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
      borrowTools: [
        {
          title: 'Bastion Credit Cards',
          desc: `Compare the features of
          Bastion's
          credit cards to find the one that offers you the convenience, rewards, and
          low rates that meet your everyday needs. Learn More.`
        },
        {
          title: `Get aBastion Mortgage or Home Equity Loan`,
          desc: `Whether you're buying or refinancing or looking to take
          advantage of the equity in your home,
          Bastion is here
          to help. Visit
          Bastion’s
          Home Loan Center today!`
        },
        {
          title: 'Personal Loans',
          desc: `Finding the money you need is simple with
          Bastion’s
          personal borrowing options. Choose from a personal loan or a line of credit.
          Compare the features to see which is right for you.`
        },
        {
          title: 'Payment Protection',
          desc: `Bastion safeguards you and your family with our Member’s Choice™
          Borrower Security. Learn more about this valuable benefit.`
        },
        {
          title: `Auto Loans From Bastion`,
          desc: `Bastion offers
          some of the lowest rates on car loans in the area. View our car loan and
          refinance rates, estimate your payment with our calculator, and get
          pre-approved.`
        },
        {
          title: 'Auto Refinance',
          desc: `Looking to refinance your auto loan?
          Bastion offers
          some of the most competitive rates in the area. Use our auto refinance
          calculator below to understand your new monthly payment.`
        },
        {
          title: 'Student Loans From Bastion ',
          desc: `Bastion has
          partnered with Sallie Mae to offer the Smart Option Student Loan® and
          the Parent Loan for families to finance higher education expenses not
          covered by scholarships and federal loans.`
        }
      ]
    }
  }

}
</script>
