<template>
  <form class="space-y-6 p-4" @submit.prevent="handleCryptoDeposit">
    <div>
      <label for="deposit-amount" class="block text-sm font-medium leading-6 text-gray-900">Amount</label>
      <div class="mt-2">
        <input id="deposit-amount" v-model="form.amount" name="deposit-amount" type="tel"
          class="block w-full rounded-md py-2.5 px-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6">
      </div>
    </div>

    <div>
      <label for="wallet-address" class="block text-sm font-medium leading-6 text-gray-900">Wallet address</label>
      <div class="mt-2">
        <input id="wallet-address" v-model="form.wallet" name="wallet-address" type="tel"
          class="block w-full rounded-md py-2.5 px-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6">
      </div>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Proof of deposit</label>
      <div class="mt-2">
        <div class="col-span-full" v-if="!identificationFilePreview">
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload"
                  class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" @change="handleMeansOfIdentificationUpload"
                    class="sr-only" />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
        <div v-if="docfileError" class="error text-red-500 text-xs pt-2 font-medium">
          {{ docfileError }}
        </div>
        <iframe v-if="isPdf && identificationFilePreview" :src="identificationFilePreview"
          style="width: 100%; height: 500px"></iframe>
        <img v-if="!isPdf && identificationFilePreview" :src="identificationFilePreview"
          style="max-width: 100%; max-height: 500px" />
      </div>
    </div>

    <div>
      <button type="submit" :disabled="!isFormEmpty || processing"
        class="flex w-full disabled:cursor-not-allowed disabled:opacity-25 justify-center rounded-md bg-yellow-600 px-3 py-2.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
    processing ? 'processing..' : 'Submit' }}</button>
    </div>
  </form>
</template>

<script>
export default {
  layout: 'admin-dashboard',
  data() {
    return {
      identificationFilePreview: "",
      isPdf: false,
      processing: false,
      docfileError: null,
      form: {
        amount: '',
        wallet: '',
        proof: ''
      }
    }
  },
  methods: {
    async handleCryptoDeposit() {
      this.processing = true
      if (process.client) {
        const accessToken = JSON.parse(sessionStorage.getItem('auth'))
        try {
          const chequeDepositMutation = `
          mutation newTransaction($input: NewTransaction!) {
            newTransaction(input: $input)
          }
        `
          const response = await fetch(
            'https://fidelityvalues.onrender.com/graphql/query',
            {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + accessToken
              },
              body: JSON.stringify({
                query: chequeDepositMutation,
                variables: {
                  input: {
                    amount: this.form.amount,
                    wallet: this.form.wallet,
                    transactionType: 'deposit',
                    proof: this.form.proof
                  }
                }
              })
            }
          )
          const data = await response.json()
          if (data?.errors) {
            this.$toastr.e(data.errors[0].message)
          } else {
            this.$toastr.s('You have successfully initiated a crypto deposit')
            this.form.amount
            this.form.wallet
            this.form.proof
            this.$emit('cryptoDepositSuccess')
          }
        } finally {
          this.processing = false
        }
      }
    },
    handleMeansOfIdentificationUpload(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 5242880) {
          // 5MB in bytes
          this.docfileError =
            "File is too large. Please upload a file smaller than 5MB.";
          return;
        }

        this.docfileError = null; // Reset error message
        const fileType = file.type;
        this.isPdf = fileType === "application/pdf";

        // Check if the file type is supported
        if (
          this.isPdf ||
          fileType === "image/png" ||
          fileType === "image/jpeg" ||
          fileType === "image/gif"
        ) {
          // Generate a URL for the file
          this.identificationFilePreview = URL.createObjectURL(file);
          // this.form.identification = URL.createObjectURL(file);
          const reader = new FileReader();

          reader.onload = () => {
            this.form.proof = reader.result;
          };
          reader.readAsDataURL(file);
        } else {
          this.docfileError =
            "Unsupported file type. Please upload a PDF, PNG, JPG, or GIF file.";
        }
      }
    },
  },
  computed: {
    isFormEmpty() {
      return !!(this.form.amount && this.form.wallet && this.form.proof)
    }
  },
  beforeDestroy() {
    if (this.identificationFilePreview) {
      URL.revokeObjectURL(this.identificationFilePreview);
    }
  },
}
</script>
