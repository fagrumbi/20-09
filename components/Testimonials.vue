<template>
  <section class="bg-white py-24 sm:py-32 space-y-6">
    <div class="mx-auto max-w-xl text-center pb-20">
      <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hear From Our Customers</p>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <!-- <img class="h-12 self-start" src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg" alt=""> -->
          <figure class="mt-10 flex flex-auto flex-col justify-between">
            <blockquote class="text-lg leading-8 text-gray-900">
              <p>“All one has to do is to look at your investment to see how well it is being looked after.”</p>
            </blockquote>
            <figcaption class="mt-10 flex items-center gap-x-6">
              <img class="h-14 w-14 rounded-full bg-gray-50"
                src="@/assets/img/user.png"
                alt="">
              <div class="text-base">
                <div class="font-semibold text-gray-900">Ted Moralee</div>
                <!-- <div class="mt-1 text-gray-500">CEO of Tuple</div> -->
              </div>
            </figcaption>
          </figure>
        </div>
        <div
          class="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
          <!-- <img class="h-12 self-start" src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg" alt=""> -->
          <figure class="mt-10 flex flex-auto flex-col justify-between">
            <blockquote class="text-lg leading-8 text-gray-900">
              <p>“I am impressed with the customer service and speed of payout”</p>
            </blockquote>
            <figcaption class="mt-10 flex items-center gap-x-6">
              <img class="h-14 w-14 rounded-full bg-gray-50"
              src="@/assets/img/user.png"
                alt="">
              <div class="text-base">
                <div class="font-semibold text-gray-900">Ralph Morris</div>
                <!-- <div class="mt-1 text-gray-500">CEO of Reform</div> -->
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
