<template>
  <main>
    <!-- <ReuseableHeroSection>
      <template #title>
        <h1>Easy & Secure Loan Payments</h1>
      </template>
<template #description>
        <p>Thank you for choosing Bastion Bank as your lending partner. Pay your loan now or set up automatic payments.
        </p>
      </template>
</ReuseableHeroSection> -->
    <ReuseableMiniHero title="Easy & Secure Loan Payments" intro="Payments"
      desc="Thank you for choosing Bastion Bank as your lending partner. Pay your loan now or set up automatic payments."
      imgUrl="https://bastionbanks.com/templates/bank-pro/borrow-images/Citadel_AlkemyX_00034_borrow_kat_1600x650.jpg" />
    <section class="max-w-7xl mx-auto pb-10 space-y-6">
      <p>Bastion offers several convenient options to make payments on auto loans, personal loans, and mortgages. You
        can
        also
        find out if you're eligible to Skip-a-pay!
      </p>
      <div class="text-[#1e75a4] font-semibold text-xl text-center">
        <a href="">Automatic Payments</a> | <a> Pay from Non- Bastion Account</a> | <a>One-Time Payments</a> | <a>By
          Mail</a>
        | <a>In Person</a>
      </div>
      <section class="space-y-10">
        <div class="space-y-4">
          <h1 class="text-lg text-gray-700">Set Up Automatic Payments</h1>
          <p class="font-light">Never miss a payment due date when you set up automatic payments. With Online Banking
            and
            the
            Bastion Mobile,
            setting
            up automatic payments is fast, easy, and secure!</p>

          <p class="font-semibold text-sm">✔ Instant account authentication</p>
          <p class="font-semibold text-sm">✔ Schedule automatic recurring payments each month with electronic transfers
            (ACH)
          </p>
        </div>

        <div class="space-y-4">
          <h1 class="text-lg text-gray-700">Pay from Non- Bastion Account</h1>
          <p class="font-light">Make a one-time payment or set up recurring payments using your non- Bastion bank's bill
            pay
            feature. Simply follow your bank or credit union's instructions for setting up online payments. You will
            need
            Bastion's routing number: 655205039. </p>

          <p class="font-semibold text-sm">TIP: Your most recent billing statement will contain the information you need
            to
            set up online payments. </p>
        </div>


        <div class="space-y-4">
          <h1 class="text-lg text-gray-700">One-Time Payments</h1>
          <p class="font-light">Need to make a payment quickly? Our Express Pay options are designed to help you make a
            one-time payment as fast as possible with a debit or eCheck.<span class="font-semibold text-gray-700">
              Please
              note: A fee applies to each of these
              payment
              methods.
            </span>
          </p>

          <p class="font-semibold text-sm">TIP: Your most recent billing statement will contain the information you need
            to
            set up online payments. </p>

          <p class="text-lg"> Easily make quick payments online with Express Pay for a small fee. Follow these quick
            steps:
          </p>
          <div>
            <p> ✔Log into your Bastion account with your member account ID and zip code.</p>
            <p> ✔Create a profile.</p>
            <p> ✔Make a payment. Note: A fee will be assessed for online payments.</p>
          </div>
        </div>

        <div class="space-y-4">
          <h1 class="text-lg text-gray-700">Pay by Mail</h1>
          <p class="font-light">Mail your payments to:

            Bastion Loan Payments
            100 Bishopsgate, London EC2N 4AG, italfie,United Kingdom</p>

          <p class="font-light text-sm">Include your billing statement coupon with your check, if available. If it is
            not
            available and you are paying with a non- Bastion check, please add your Bastion account number on the Memo
            line.

          </p>
        </div>

        <div class="space-y-4">
          <h1 class="text-lg text-gray-700">Pay at a Branch</h1>
          <p class="font-light">Mail your payments to:
            Make your payment in-person at any of our convenient branch locations using our free, self-serve Bastion
            Express
            Banking . If you need assistance, a member of our team will be happy to help during business hours. Find a
            branch
            near you today!</p>

        </div>
      </section>
    </section>
    <ReuseableContactSection />
  </main>
</template>

<script>
import ReuseableContactSection from '@/components/core/ReuseableContactSection.vue'
import ReuseableMiniHero from '@/components/core/ReuseableMiniHero.vue'
export default {
  components: { ReuseableMiniHero, ReuseableContactSection }

}
</script>
