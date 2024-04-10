<template>
  <main>
    <UniqueNav />
    <!-- <NavigationBarSection /> -->
    <Nuxt />
    <FooterSection />
  </main>
</template>

<script>
import UniqueNav from '@/components/UniqueNav.vue';
import NavigationBarSection from '@/components/NavigationBarSection.vue';
import FooterSection from '@/components/FooterSection.vue';
export default {
  components: {
    NavigationBarSection,
    FooterSection,
    UniqueNav
  }
}
</script>

<style></style>
