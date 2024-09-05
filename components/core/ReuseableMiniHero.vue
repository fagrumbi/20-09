<template>
  <main>
    <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <img :src="require(`@/assets/img/${imgUrl}`)" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
      <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl"> {{ title }}
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">{{ desc }}</p>
      </div>
    </div>
    <section class="max-w-7xl px-4 lg:px-0 mx-auto pt-6">
      <h1 class="text-4xl font-thin text-[#dc7a09]">{{ intro }}</h1>
    </section>
  </main>

  <!-- <div class="bg-white">
    <main>
      <div>
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
          <div class="">
            <div class="relative shadow-xl sm:overflow-hidden">
              <div class="absolute inset-0">
                <img class="h-full w-full object-cover" :src="require(`@/assets/img/${imgUrl}`)" alt="People working on laptops">
                <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply"></div>
              </div>
              <div class="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span class="block text-white"> {{ title }} </span>
                </h1>
                <p class="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                  {{ desc }}
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
    </main>
  </div> -->
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    intro: {
      type: String
    },
    desc: {
      type: String
    },
    imgUrl: {
      type: String
    }
  }
}
</script>
