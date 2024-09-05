<template>
  <main>
    <div class="bg-gray-50">
      <div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4 space-y-20">
        <div class="mx-auto max-w-2xl px-4 lg:max-w-none border-gray-300 border-[0.6px] shadow-md rounded-md">
          <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 p-4 lg:p-10">
            <div>
              <h2 class="text-4xl font-bold tracking-tight text-gray-900">We built our business on great customer
                service</h2>
              <p class="mt-4 text-gray-500">At the beginning at least, but then we realized we could make a lot more
                money if we kinda stopped caring about that. Our new strategy is to write a bunch of things that look
                really good in the headlines, then clarify in the small print but hope people don't actually read it.
              </p>
            </div>
            <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
              <img src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg" alt=""
                class="object-cover object-center">
            </div>
          </div>
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 pl-10">Baston Member Care</h2>
          <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 p-10">
            <div class="sm:flex lg:block">
              <div class="sm:flex-shrink-0">
                <a href="mailto:support@bastonsbanks.com">
                  <img class="h-16 w-16"
                    src="@/assets/icons/send-us-message.svg" alt="">
                </a>
              </div>
              <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                <a href="mailto:support@bastonsbanks.com" class="text-sm font-medium text-gray-900">Send Us a
                  Message</a>
              </div>
            </div>
            <div class="sm:flex lg:block">
              <div class="sm:flex-shrink-0">
                <img class="h-16 w-16" src="@/assets/icons/call-us.svg" alt="">
              </div>
              <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                <h3 class="text-sm font-medium text-gray-900">Call Us</h3>
                <!-- <p class="mt-2 text-sm text-gray-500">It&#039;s not actually free we just price it into the products.
                  Someone&#039;s paying for it, and it&#039;s not us.</p> -->
              </div>
            </div>
            <div class="sm:flex lg:block">
              <div class="sm:flex-shrink-0">
                <a href="mailto:support@bastonsbanks.com">
                  <img class="h-16 w-16"
                    src="@/assets/icons/calendar.svg" alt="">
                </a>
              </div>
              <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                <a href="mailto:support@bastonsbanks.com" class="text-sm font-medium text-gray-900">Schedule An
                  Appointment</a>
              </div>
            </div>
            <div class="sm:flex lg:block">
              <div class="sm:flex-shrink-0">
                <img class="h-16 w-16" src="@/assets/icons/faq-support.svg"
                  alt="">
              </div>
              <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                <nuxt-link to="/contact-us" class="text-sm font-medium text-gray-900">Faqs And Support</nuxt-link>
                <!-- <p class="mt-2 text-sm text-gray-500">If you don&#039;t like it, trade it to one of your friends for
                  something of theirs. Don&#039;t send it here though.</p> -->
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 border-gray-300 border-[0.6px] shadow-md rounded-md">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 pl-20 pt-10">Baston Rates</h2>
          <div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-20 lg:px-4">
            <div
              class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div class="sm:flex">
                <div class="sm:flex-shrink-0">
                  <div class="flow-root">
                    <img class="h-24 w-28" src="https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg"
                      alt="">
                  </div>
                </div>
                <div class="mt-3 sm:ml-3 sm:mt-0">
                  <h3 class="text-sm font-medium text-gray-900">FEATURED</h3>
                  <p class="mt-2 text-sm text-gray-500">3.75% APY | High Yield Savings Account | High Yield Savings Rate
                  </p>
                  <p class="mt-2 text-sm text-gray-500">3.65% APY | 18 Month Certificate | Bastion Standard Certificate
                    Rates</p>
                  <p class="mt-2 text-sm text-gray-500">4.00% APY | 36 Month Certificate | Bastion Standard Certificate
                    Rates</p>
                  <p class="mt-2 text-sm text-gray-500">15.49% APR | Cash Rewards Mastercard | Mastercard | variable APR
                  </p>
                </div>
              </div>
              <div class="sm:flex">
                <div class="sm:flex-shrink-0">
                  <div class="flow-root">
                    <img class="h-24 w-28" src="https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg"
                      alt="">
                  </div>
                </div>
                <div class="mt-3 sm:ml-3 sm:mt-0">
                  <h3 class="text-sm font-medium text-gray-900">SAVINGS</h3>
                  <p class="mt-2 text-sm text-gray-500">3.75% APY | High Yield Savings Account | High Yield Savings Rate
                  </p>
                  <p class="mt-2 text-sm text-gray-500">3.75% APY | 24 Month Certificate | Bastion Standard Certificate
                    Rates</p>
                  <p class="mt-2 text-sm text-gray-500">4.00% APY | 36 Month Certificate | Bastion Standard Certificate
                    Rates</p>
                  <p class="mt-2 text-sm text-gray-500">4.20% APR | 60 Month Certificate | Bastion Standard Certificate
                    Rates </p>
                </div>
              </div>
              <div class="sm:flex">
                <div class="sm:flex-shrink-0">
                  <div class="flow-root">
                    <img class="h-24 w-28" src="https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg"
                      alt="">
                  </div>
                </div>
                <div class="mt-3 sm:ml-3 sm:mt-0">
                  <h3 class="text-sm font-medium text-gray-900">CREDIT CARDS</h3>
                  <p class="mt-2 text-sm text-gray-500">AS LOW AS | 15.49% APR | CASH REWARD MASTERCARD | VARIABLE APR
                  </p>
                  <p class="mt-2 text-sm text-gray-500">AS LOW AS | 9.99% APR | REWARDS MASTERCARD | Fixed APR
                  </p>
                  <p class="mt-2 text-sm text-gray-500">AS LOW AS | 11.49% APR | CHOICE MASTERCARD | VARIABLE APR
                  </p>
                  <p class="mt-2 text-sm text-gray-500">AS LOW AS | 14.49% APR | WORLD MASTERCARD | VARIABLE APR
                  </p>
                </div>
              </div>
              <div class="sm:flex">
                <div class="sm:flex-shrink-0">
                  <div class="flow-root">
                    <img class="h-24 w-28" src="https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg"
                      alt="">
                  </div>
                </div>
                <div class="mt-3 sm:ml-3 sm:mt-0">
                  <h3 class="text-sm font-medium text-gray-900">LOANS</h3>
                  <p class="mt-2 text-sm text-gray-500">
                    AS LOW AS | 5.89% APR | NEW AUTO - UP TO 66 MONTHS | Auto Loan Rates
                  </p>
                  <p class="mt-2 text-sm text-gray-500">
                    AS LOW AS |
                    6.19%
                    APR |
                    USED - UP TO 66 MONTHS |
                    Auto Loan Rates
                  </p>
                  <p class="mt-2 text-sm text-gray-500">
                    AS LOW AS |
                    11.99%
                    APR |
                    PERSONAL LOAN |
                    Personal Loan Rates
                  </p>
                  <p class="mt-2 text-sm text-gray-500">
                    AS LOW AS |
                    2.49% |
                    INTRO
                    INTEREST-ONLY HELOC |
                    Home Equity Loan Rates |
                    variable
                  </p>
                </div>
              </div>
              <div class="sm:flex">
                <div class="sm:flex-shrink-0">
                  <div class="flow-root">
                    <img class="h-24 w-28" src="https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg"
                      alt="">
                  </div>
                </div>
                <div class="mt-3 sm:ml-3 sm:mt-0">
                  <h3 class="text-sm font-medium text-gray-900">MORTGAGES</h3>
                  <p class="mt-2 text-sm text-gray-500">AS LOW AS |
                    6.375%
                    REG |
                    10 YEAR REFINANCE RATE |
                    Conventional Mortgage and Refinance Rates |
                    fixed rate</p>
                  <p class="mt-2 text-sm text-gray-500">
                    AS LOW AS |
                    6.875%
                    REG |
                    30 YEAR PURCHASE RATE |
                    Conventional Mortgage and Refinance Rates |
                    fixed rate</p>
                  <p class="mt-2 text-sm text-gray-500">AS LOW AS |
                    6.625%
                    REG |
                    10/1 YEAR ARM |
                    Conventional Mortgage and Refinance Rates |
                    variable rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
