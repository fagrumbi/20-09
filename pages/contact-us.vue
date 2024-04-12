<template>
  <main class="space-y-10">
    <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <img src="https://bastionbanks.com/templates/bank-pro/images/assets/citadel-customer-support.jpg" alt=""
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
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl"> How can we help you today?
        </h2>
      </div>
    </div>

    <div class="bg-white">
      <div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div class="max-w-3xl">
            <h2 class="text-4xl font-bold tracking-tight text-gray-900">Contact Us</h2>
            <p class="mt-4 text-gray-500">What's on your mind? There are lots of ways to get in touch with us. Search
              our FAQs above, or contact us directly, so we can point you in the right direction. Looking for our branch
              locations? Find our branches and ATM locations here.</p>
          </div>
          <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <div class="sm:flex lg:block">
              <div class="sm:flex-shrink-0">
                <a href="#"><img class="h-16 w-16"
                    src="https://bastionbanks.com/templates/bank-pro/images/assets/get-started-chat.svg" alt=""></a>
              </div>
              <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                <h3 class="text-sm font-medium text-gray-900">Video Connect</h3>
                <!-- <p class="mt-2 text-sm text-gray-500">It&#039;s not actually free we just price it into the products.
                  Someone&#039;s paying for it, and it&#039;s not us.</p> -->
              </div>
            </div>
            <div class="sm:flex lg:block">
              <div class="sm:flex-shrink-0">
                <a href="mailto:support@bastionbanks.com"> <img class="h-16 w-16"
                    src="https://bastionbanks.com/templates/bank-pro/images/assets/get-started-email-us.svg" alt=""></a>
              </div>
              <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                <h3 class="text-sm font-medium text-gray-900">Email Us</h3>
                <!-- <p class="mt-2 text-sm text-gray-500">If it breaks in the first 10 years we&#039;ll replace it. After
                  that you&#039;re on your own though.</p> -->
              </div>
            </div>
            <div class="sm:flex lg:block">
              <div class="sm:flex-shrink-0">
                <a href="mailto:support@bastionbanks.com"><img class="h-16 w-16"
                    src="https://bastionbanks.com/templates/bank-pro/images/assets/get-started-visit-us.svg" alt=""></a>
              </div>
              <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                <h3 class="text-sm font-medium text-gray-900">Schedule Appointment</h3>
                <!-- <p class="mt-2 text-sm text-gray-500">If you don&#039;t like it, trade it to one of your friends for
                  something of theirs. Don&#039;t send it here though.</p> -->
              </div>
            </div>
            <div class="sm:flex lg:block">
              <div class="sm:flex-shrink-0">
                <a href="tel:+447451272406"><img class="h-16 w-16"
                    src="https://bastionbanks.com/templates/bank-pro/images/assets/get-started-visit-us.svg" alt=""></a>
              </div>
              <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                <h3 class="text-sm font-medium text-gray-900">Call Us</h3>
                <!-- <p class="mt-2 text-sm text-gray-500">If you don&#039;t like it, trade it to one of your friends for
                  something of theirs. Don&#039;t send it here though.</p> -->
              </div>
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
export default {
  head() {
    return {
      title: 'Bastons Banks | Contact Us',
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO meta tags
        { hid: 'description', name: 'description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },

        // Open Graph / Facebook meta tags for rich sharing
        { hid: 'og:title', property: 'og:title', content: 'Bastons Banks | Contact Us' },
        { hid: 'og:description', property: 'og:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.bastonsbanks.com/contact-us' },
        { hid: 'og:image', property: 'og:image', content: 'https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png' },

        // Twitter Card meta tags
        { hid: 'twitter:card', name: 'twitter:card', content: '' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Bastons Banks | Contact Us' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  components: {
    ReuseableContactSection
  }
}
</script>


<!-- style="background-image:url(&quot;https://bastionbanks.com/templates/bank-pro/images/assets/citadel-customer-support.jpg&quot;); transform:translateY(0px);" -->
