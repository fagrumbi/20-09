<template>
  <footer class="bg-gray-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <img class="h-7" src="https://bastionbanks.com/uploads/1682584899_6502d067c95383061f4a.png"
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
              <img src="https://bastionbanks.com/templates/bank-pro/blue-seal-200-42-bbb-80015515.png" />
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-400">
              <span class="sr-only">Instagram</span>
              <img src="https://bastionbanks.com/templates/bank-pro/images/assets/ncua-lender.png" />
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-400">
              <span class="sr-only">X</span>
              <img src="https://bastionbanks.com/templates/bank-pro/images/assets/ncua-cert.png" />
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
                  <a href="mailto:support@bastionbanks.com"
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
