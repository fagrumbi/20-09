<template>
  <div class="flex justify-between gap-x-4 py-3">
    <dt class="text-gray-500">Account Number</dt>
    <dd class="text-gray-700 relative font-semibold pr-8">
      {{ displayCardNumber ?? 'Nil' }}
      <img @click="visible = !visible" :src="require(`@/assets/icons/${eye}`)" alt=""
        class="absolute cursor-pointer top-0 right-0 h-6 w-6">
    </dd>
  </div>
</template>

<script>
export default {
  props: {
    cardNumber: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      visible: true // Start with the number hidden
    };
  },
  computed: {
    displayCardNumber() {
      if (this.visible) {
        return this.cardNumber;
      }
      return '**** **** **** ' + this.cardNumber.slice(-4);
    },
    eye() {
      return !this.visible ? 'eye-close.svg' : 'eye-open.svg'
    }
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    }
  },
  mounted() {
    // Optionally toggle visibility to initially reveal the entire number
    // Remove the next line if you want to start with the number hidden
    this.toggleVisibility();
  }
}
</script>

<style scoped></style>
