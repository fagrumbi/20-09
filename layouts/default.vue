<template>
  <main>
    <UniqueNav />
    <!-- <NavigationBarSection /> -->
    <Nuxt />
    <FooterSection />
    <div class="fixed bottom-0 right-0 m-4 z-50">
      <a href="https://wa.me/+447465803771" target="_blank">
        <img src="@/assets/icons/whatsapp.svg" class="text-green-500 h-16 w-16" />
      </a>
    </div>
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
