<template>
  <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white p-5 rounded-lg shadow-lg max-w-md w-full m-4" @click.stop>
      <button class="absolute top-0 right-0 m-2 text-gray-700 hover:text-gray-900" @click="closeModal">
        <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.196 7.349 13.85a1.2 1.2 0 1 1-1.697-1.697l2.651-2.655-2.651-2.653a1.2 1.2 0 1 1 1.697-1.697l2.651 2.653 2.651-2.653a1.2 1.2 0 1 1 1.697 1.697L11.697 9.5l2.651 2.653a1.2 1.2 0 0 1 0 1.696z" />
        </svg>
      </button>
      <!-- Slot for Modal Content -->
      <slot></slot>
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
    closeModal() {
      this.$emit('update:isVisible', false);
    },
  },
};
</script>
