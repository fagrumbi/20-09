<template>
  <main>
    <ReuseableHeroSection>
      <template #title>
        <h1>Learn More. Make A Plan.</h1>
      </template>
      <template #description>
        <p>It’s your money. Discover how to make the most of it.
        </p>
      </template>
    </ReuseableHeroSection>
    <h1 class="text-3xl font-semibold">
      Learn & Plan – Financial Education
    </h1>
    <div class="text-base max-w-7xl mx-auto space-y-6 pt-16">
      <p class="mx-auto mt-5 max-w-full text-gray-800">Bastion offers convenient, simple and free banking
        Bastion not only provides the financial tools and accounts that help you manage your money, but also the
        educational
        resources to help you build financial strength. Expand your knowledge, learn new skills, and be able to make
        more
        informed decisions about your financial well-being by exploring the articles below.</p>
    </div>
  </main>
</template>

<script>
import ReuseableContactSection from '@/components/core/ReuseableContactSection.vue'
import ReuseableHeroSection from '@/components/core/ReuseableHeroSection.vue'
export default {
  head() {
    return {
      title: 'Bastons Banks | Learn And Plan',
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO meta tags
        { hid: 'description', name: 'description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },

        // Open Graph / Facebook meta tags for rich sharing
        { hid: 'og:title', property: 'og:title', content: 'Bastons Banks | Learn And Plan' },
        { hid: 'og:description', property: 'og:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.bastonsbanks.com/learn-and-plan' },
        { hid: 'og:image', property: 'og:image', content: 'https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png' },

        // Twitter Card meta tags
        { hid: 'twitter:card', name: 'twitter:card', content: '' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Bastons Banks | Learn And Plan' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  components: { ReuseableHeroSection, ReuseableContactSection }

}
</script>
