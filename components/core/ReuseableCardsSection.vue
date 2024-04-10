<template>
  <div class="relative bg-white">
    <div class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
      <div class="mt-20">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div class="pt-6" v-for="itm in data" :key="itm.title">
            <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <!-- <span class="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg">
                    <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                  </span> -->
                </div>
                <h3 class="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ itm.title }}</h3>
                <p class="mt-5 text-sm leading-7 text-gray-600">{{ itm.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
