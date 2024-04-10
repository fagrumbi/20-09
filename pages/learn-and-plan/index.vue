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
  components: { ReuseableHeroSection, ReuseableContactSection }

}
</script>
