<template>
  <div class="bg-white">
    <main>
      <div>
        <!-- Hero card -->
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
          <div class="">
            <div class="relative shadow-xl sm:overflow-hidden">
              <div class="absolute inset-0">
                <img class="h-full w-full object-cover" :src="require(`@/assets/img/${imgUrl}`)" alt="People working on laptops">
                <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply"></div>
              </div>
              <div class="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-3xl">
                  <span class="block text-white"> <slot name="title" /></span>
                </h1>
                <p class="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                  <slot name="description" />
                </p>
                <div class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                      <slot name="actions" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- More main page content here... -->
    </main>
  </div>

</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: 'hero3.jpg'
    }
  }
}
</script>
