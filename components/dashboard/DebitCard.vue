<template>
  <main>
    <div
      class="m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-100">

      <img class="relative object-cover w-full h-[250px] rounded-xl" src="https://i.imgur.com/kGkSg1v.png">

      <div class="w-full px-8 absolute top-8">
        <div class="flex justify-between">
          <div class="">
            <p class="font-light">
              Full Name
            </p>
            <p class="font-medium tracking-widest uppercase">
              {{ userData.name || 'Nil' }}
            </p>
          </div>
          <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
        </div>
        <div class="pt-1">
          <p class="font-light">
            Card Number
          </p>
          <p class="font-medium tracking-more-wider">
            {{ formatCardNumber(userData.cardNumber) || 'Nil' }}
          </p>
        </div>
        <div class="pt-6 pr-6">
          <div class="flex justify-between">
            <div class="">
              <p class="font-light text-xs">
                Expiry
              </p>
              <p class="font-medium tracking-wider text-sm">
                {{ userData.expiry || 'Nil' }}
              </p>
            </div>
            <div class="">
              <h1 class="font-light text-xs text-xs">
                CVV
              </h1>
              <p class="font-medium tracking-wider text-sm">
                {{ userData.cvv || 'Nil' }}
              </p>
            </div>

            <!-- <div class="">
              <h1 class="font-light text-xs">
                CVV
              </h1>
              <p class="font-bold tracking-more-wider text-sm">
                {{ userData.cvv || 'Nil' }}
              </p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      default: {}
    }
  },
  computed: {
    formattedCardNumber() {
      return this.formatCardNumber(this.userCardNumber);
    }
  },
  methods: {
    formatCardNumber(cardNumber) {
      if (Object.keys(this.userData).length) {
        const cleanNumber = cardNumber.replace(/\D/g, '');
        const formattedNumber = cleanNumber.replace(/(\d{4})(?=\d)/g, '$1-');
        return formattedNumber;
      }
    }
  }
}
</script>

<style></style>
