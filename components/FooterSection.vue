<template>
  <footer class="bg-gray-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <img class="h-32 w-full" src="@/assets/img/preview.png"
            alt="Company name">
          <p class="text-lg leading-6 text-gray-300">Building Strength Together</p>
          <p class="text-xs leading-6 text-gray-300 text-justify">Bastion is a not-for-profit credit union bank built on
            the unshakeable promise to serve those who work every day to build a better
            future for us all. For over 80 years, we’ve delivered a breadth of
            financial services, expert guidance, and innovative tools to help strengthen and
            grow businesses, families, and our local communities. We are your Bastion, and
            we are Building Strength Together.</p>
          <p class="text-xs leading-6 text-gray-300 text-justify">100 Bishopsgate, London EC2N 4AG, italfie,United
            Kingdom</p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-500 hover:text-gray-400">
              <span class="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-400">
              <span class="sr-only">Instagram</span>
              <img src="https://bastionbanks.com/templates/bank-pro/images/assets/ncua-lender.png" />
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-400">
              <span class="sr-only">X</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-3 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Member Service</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Loan Payments</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Referral Service</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Baston Security</a>
                </li>
                <li>
                  <a href="mailto:support@bastonsbanks.com"
                    class="text-sm leading-6 text-gray-300 hover:text-white">Email Us</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">About Us</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Who we are</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">Quick Links</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Privacy policy</a>
                </li>
                <li>
                  <nuxt-link to="/faq" class="text-sm leading-6 text-gray-300 hover:text-white">Frequently asked questions</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-3 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">News and Events</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <nuxt-link to="/news" class="text-sm leading-6 text-gray-300 hover:text-white">Latest News</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">Careers</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <nuxt-link to="/careers" class="text-sm leading-6 text-gray-300 hover:text-white">Get Started</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">Giving back</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <nuxt-link to="/giving-back" class="text-sm leading-6 text-gray-300 hover:text-white">Bastion Charity</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-400">&copy; 2020 Your Company, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>

</template>

<script>
export default {

}
</script>

<style></style>
