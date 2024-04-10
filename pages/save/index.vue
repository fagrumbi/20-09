<template>
  <main>
    <ReuseableHeroSection>
      <template #title>
        <h1>The Smart Place to Save</h1>
      </template>
      <template #description>
        <p>Bastion Bank is a highly ranked global financial institution</p>
      </template>
    </ReuseableHeroSection>
  </main>
</template>

<script>
import ReuseableHeroSection from '@/components/core/ReuseableHeroSection.vue'
export default {
  components: { ReuseableHeroSection }

}
</script>
