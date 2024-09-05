<template>
  <main>
    <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <img
        src="https://bastionbanks.com/templates/bank-pro/business-banking/business-banking-sectionlanding-1600x650_NEW_hero.jpg"
        alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
      <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl"> Join the Bastion Bank Team
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">As a not-for-profit credit union, we’re committed to caring for
          our people and communities so they can prosper.</p>
      </div>
    </div>
    <section class="max-w-7xl mx-auto space-y-6 py-20">
      <div class="space-y-6">
        <h1 class="font-light text-4xl text-[#dc7a09]">Careers</h1>
        <p class="font-light">With <a href="/" class="font-medium text-[#1e75a4]">positions available</a> in both our
          corporate and
          retail offices, Bastion employees can find the right fit
          in
          a
          variety of remote, hybrid, and in-person settings to create their own version of work-life harmony.</p>

        <p class="font-light"> The culture at Bastion Credit Union is all about <a href="/"
            class="font-medium text-[#1e75a4]">giving back </a>to the community where our
          members live and
          work.
          Our
          team is at the heart of what we do, so we want working here to be just as rewarding as banking here. During
          this
          exciting period of growth, we’re thrilled to welcome talented, new employees to get involved with our mission
          of
          Building Strength Together.</p>

        <p class="font-light"> We welcome diversity, innovative ideas, and new ways of thinking in a challenging yet
          friendly environment.
        </p>
      </div>

      <div class="space-y-6">
        <h1 class="text-lg font-semibold text-gray-600">A Great Place to Work</h1>
        <p class="font-light">At Bastion, we recognize that our employees are what make Bastion not only a great place
          to bank but also a
          great
          place to work. As our company continues to grow, we remain committed to constantly improving our internal
          culture.
          It is also the reason we are proud to be a certified Great Place to Work by the <a href="/"
            class="font-medium text-[#1e75a4]">Great Places to Work</a>
          Institute.
        </p>

        <p class="font-light"> Our Employee Activity Committee plans social events and outings for our team to enjoy
          together. We host
          wellness
          events such as virtual cooking demos, Wellbeing Week, and we recognize outstanding employees on a regular,
          ongoing
          basis with an Annual Awards Dinner and President’s Council to continually encourage our team members to strive
          for
          their very best.</p>
      </div>
      <div class="space-y-6">

        <h2 class="text-lg font-semibold text-gray-600">Build Your Career</h2>
        <p class="font-light"> We are committed to hiring qualified and motivated employees at all levels within the
          organization. <a href="/" class="font-medium text-[#1e75a4]">Our
            competitive benefits & compensation packages</a> are designed to support this commitment and to make life
          easier
          and
          happier for employees and their families.
        </p>
        <p class="font-light"> After joining the team, our employees have many opportunities for growth and often enjoy
          long careers that
          span
          multiple departments. We understand the value in helping our team grow professionally, and we’re proud to
          offer
          numerous promotions each year.</p>
      </div>
      <div class="space-y-6">
        <h2 class="text-lg font-semibold text-gray-600">Community Commitment</h2>
        <p class="font-light"> Bastion isn’t just a business in the community. Our members and employees live and work
          here, too. And
          that’s
          what
          inspires us to <a href="/" class="font-medium text-[#1e75a4]">give back</a>. We take part in a wide variety of
          community initiatives and programs and make a
          difference in a very real way.</p>

        <p class="font-light">Our commitment to community runs deep. We host and sponsor community events, make regular
          financial
          contributions,
          and encourage our employees to volunteer for causes that are important to them.
        </p>
        <p class="font-light"> Our partners include the <a href="/" class="font-medium text-[#1e75a4]">Children’s
            Hospital of Philadelphia</a>, the <a href="/" class="font-medium text-[#1e75a4]">United Way</a>, the <a
            href="/" class="font-medium text-[#1e75a4]">Chester
            County Food Bank,</a>
          Good
          Works and many more. In total, we’ve contributed millions of dollars and we’re not stopping there.</p>
      </div>
    </section>
    <ReuseableContactSection />
  </main>
</template>

<script>
import ReuseableContactSection from '@/components/core/ReuseableContactSection.vue'
export default {
  head() {
    return {
      title: 'Bastons Banks | Careers',
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO meta tags
        { hid: 'description', name: 'description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },

        // Open Graph / Facebook meta tags for rich sharing
        { hid: 'og:title', property: 'og:title', content: 'Bastons Banks | Careers' },
        { hid: 'og:description', property: 'og:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.bastonsbanks.com/careers' },
        { hid: 'og:image', property: 'og:image', content: '@/assets/img/preview.png' },

        // Twitter Card meta tags
        { hid: 'twitter:card', name: 'twitter:card', content: '' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Bastons Banks | Careers' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'twitter:image', name: 'twitter:image', content: '@/assets/img/preview.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  components: {
    ReuseableContactSection
  },
  data() {
    return {
      frequentQuestions: [
        {
          title: 'Is the company registered and regulated',
          desc: 'Yes, our Company is totally a legal platform licensed by the Securities and Exchange Commission to carry out financial activities in over 105 countries?'
        },
        {
          title: 'What is the field of activity of the company?',
          desc: `The company is engaged in cryptocurrency and Forex trading. Our staff
          of highly qualified traders and financial experts shows high profit
          rates from year to year. The company's priorities are access to
          international markets and long-term cooperation with investors.`
        },
        {
          title: 'Who can be a Customer of Bastion Bank?',
          desc: `Everyone can be a Customer of Bastion Bank, but he\she must be not
          less 18 years old.`
        },
        {
          title: 'How can I become an investor in the company?',
          desc: `You may become a client of the company and it is totally free of
          charge. All you need is to sign up and fill all required fields. It
          takes less than 2 minutes to complete sign up.`
        },
        {
          title: 'How reliable is the company in terms of security and personal data?',
          desc: `We pay great attention to security and privacy. All information on our
          website is protected by SSL. We do not divulge any personal data of
          our customers to third parties. Your participation is strictly
          confidential.`
        },
        {
          title: 'Is there a KYC verification process?',
          desc: `Yes, we do require verification documents confirming the identity,
          address or origin of account owner.`
        }
      ]
    }
  }
}
</script>
