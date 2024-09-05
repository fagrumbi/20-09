<template>
  <main>
    <!-- <ReuseableHeroSection>
      <template #title>
        <h1>Helping You Invest in Your Future</h1>
      </template>
<template #description>
        <p>Whether you’re starting to save or ready to retire, we have investment solutions to help meet your needs.</p>
      </template>
</ReuseableHeroSection> -->
    <ReuseableMiniHero title="Helping You Invest in Your Future" intro="Wealth & Retire"
      desc="Whether you’re starting to save or ready to retire, we have investment solutions to help meet your needs."
      imgUrl="hero3.jpg" />
    <div class="text-base px-4 lg:px-0 max-w-7xl mx-auto space-y-6 pt-16">
      <p class="mx-auto mt-5 max-w-full text-gray-800">From building college savings and growing your retirement during
        working years to retirement planning and asset management—our CFS Financial Advisors offer personalized
        financial
        services and investment advice to help you prepare for every stage of life. Whether you're interested in rolling
        over an IRA, estate planning or simply how to manage money - our investment advisors are here to help.</p>
      <p class="mx-auto mt- max-w-full text-gray-800">Being a Bastion customer, you'll have access to your very own
        personal
        finance advisor to help guide you through process of financial budgeting, retirement savings and more. Contact
        an
        investment advisor today to schedule a complimentary consultation.
      </p>
      <p class="mx-auto mt-5 max-w-full text-gray-800">Manage your portfolio, check quotes, make trades, and more
        online.
        Take full control of your future and manage your investments anywhere, at any time with Bastion’s convenient
        online
        investing and brokerage tools.
      </p>

      <p class="mx-auto mt-5 max-w-full text-gray-800">Check the background of this firm on FINRA’s BrokerCheck.
      </p>

      <p class="mx-auto mt-5 max-w-full text-gray-800">CFS does not provide legal or tax advice. Please consult a
        qualified
        tax or legal professional.
      </p>


      <p class="mx-auto mt-5 max-w-full text-gray-800">*Non-deposit investment products and services are offered through
        CUSO Financial Services, L.P. ("CFS"), a registered broker-dealer (Member FINRA/SIPC) and SEC Registered
        Investment
        Advisor. Products offered through CFS: are not NCUA/NCUSIF or otherwise federally insured, are not guarantees or
        obligations of Bastion, and may involve investment risk including possible loss of principal . Investment
        Representatives are registered through CFS. Bastion has contracted with CFS to make non-deposit investment
        products
        and services available to Bastion members. CUSO Financial Services, L.P. (CFS) does not provide tax or legal
        advice.
        For such guidance, please consult your tax and/or legal advisor.
      </p>
    </div>
    <ReuseableCardsSection :data="investmentsTools" class="pb-10" />
    <ReuseableContactSection />
  </main>
</template>

<script>
import ReuseableMiniHero from '@/components/core/ReuseableMiniHero.vue'
import ReuseableCardsSection from '@/components/core/ReuseableCardsSection.vue'
import ReuseableHeroSection from '@/components/core/ReuseableHeroSection.vue'
import ReuseableContactSection from '@/components/core/ReuseableContactSection.vue'
export default {
  components: { ReuseableHeroSection, ReuseableCardsSection, ReuseableContactSection, ReuseableMiniHero, ReuseableContactSection, },
  data() {
    return {
      investmentsTools: [
        {
          title: 'Our Investment Team',
          desc: `Schedule a complimentary consultation with a CFS advisor at Bastion to
      help you manage your assets, create your retirement plan, and guide you
      toward your financial goals.`
        },
        {
          title: 'Retirement Planning',
          desc: `The experienced CFS* investment advisors at Bastion can help you plan for
      your future with investment strategies and retirement income planning
      customized for your needs.`
        },
        {
          title: 'Financial Planning',
          desc: `CFS Financial Advisors at Bastion offer professional analysis, sound
      financial guidance, and personalized, professional planning services to
      help you meet your short- and long-term financial goals.`
        },
        {
          title: 'Estate Planning &amp; Wealth Transfer',
          desc: `We’ll help plan your estate allocation and work to ensure a smooth
      transition when a loved one passes away. We assist in transferring wealth
      to beneficiaries through tax-efficient strategies.`
        },
        {
          title: 'IRA Rollover Assistance',
          desc: `Together we’ll navigate how to best initiate your rollover, if
      appropriate, and help reduce tax liability in the event of severance from
      employment, termination, or retirement after years of service.`
        },
        {
          title: 'Talk to An Investment Advisor',
          desc: ` Our financial advisors, available through CUSO Financial Services, L.P.
      (CFS*), can help you develop a personalized plan for the years ahead to
      build wealth, protect your assets, and make sound decisions that move you
      closer to your financial goals.`
        },
        {
          title: 'Online Investing &amp; Brokerage',
          desc: `Smart tools for smarter investing. Manage your portfolio, check quotes,
      make trades, and more online. Get started with our suite of tools today..`
        },
      ]
    }
  },
  head() {
    return {
      title: 'Bastons Banks | Invest',
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO meta tags
        { hid: 'description', name: 'description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },

        // Open Graph / Facebook meta tags for rich sharing
        { hid: 'og:title', property: 'og:title', content: 'Bastons Banks | Invest' },
        { hid: 'og:description', property: 'og:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.bastonsbanks.com/invest' },
        { hid: 'og:image', property: 'og:image', content: '@/assets/img/preview.png' },

        // Twitter Card meta tags
        { hid: 'twitter:card', name: 'twitter:card', content: '' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Bastons Banks | Invest' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'twitter:image', name: 'twitter:image', content: '@/assets/img/preview.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
}
</script>
