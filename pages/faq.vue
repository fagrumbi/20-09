<template>
  <main>
    <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <img src="https://bastionbanks.com/templates/bank-pro/invest-images/Citadel_AlkemyX_00405_weatlh_kate_1600x650.jpg" alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover">
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
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl"> Frequently asked questions
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">What's on your mind? There are lots of ways to get in touch with
          us. Search our FAQs</p>
      </div>
    </div>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="lg:col-span-5">
            <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
            <p class="mt-4 text-base leading-7 text-gray-600">Can’t find the answer you’re looking for? Reach out to our
              <a href="mailto:support@bastionbanks.com"
                class="font-semibold text-indigo-600 hover:text-indigo-500">customer support</a> team.
            </p>
          </div>
          <div class="mt-10 lg:col-span-7 lg:mt-0">
            <dl class="space-y-10">
              <div v-for="(itm, idx) in frequentQuestions" :key="idx">
                <dt class="text-base font-semibold leading-7 text-gray-900">{{ itm.title }}</dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">{{ itm.desc }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Bastons Banks | Frequently Asked Questions',
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO meta tags
        { hid: 'description', name: 'description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },

        // Open Graph / Facebook meta tags for rich sharing
        { hid: 'og:title', property: 'og:title', content: 'Bastons Banks | Frequently Asked Questions' },
        { hid: 'og:description', property: 'og:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.bastonsbanks.com/faq' },
        { hid: 'og:image', property: 'og:image', content: 'https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png' },

        // Twitter Card meta tags
        { hid: 'twitter:card', name: 'twitter:card', content: '' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Bastons Banks | Frequently Asked Questions' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
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
