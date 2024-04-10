<template>
  <div
    class="fixed inset-0 z-40 flex justify-end"
    v-show="isVisible"
  >
    <!-- Overlay -->
    <div
      class="fixed inset-0 bg-black bg-opacity-50"
      @click="close"
    ></div>

    <!-- Slide-over panel -->
    <div
      class="relative w-full max-w-md h-full bg-white shadow-xl transition-transform transform translate-x-0"
    >
      <!-- Close button -->
      <div class="absolute top-0 right-0 pt-4 pr-4">
        <button
          @click="close"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Close</span>
          <!-- Icon using Heroicons (https://heroicons.com/) -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Slot for content -->
      <div class="h-full overflow-y-auto p-4 sm:p-6">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('update:isVisible', false);
    },
  },
};
</script>
