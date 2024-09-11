<template>
  <div class="flex min-h-full">
    <div
      class="flex flex-1 h-screen overflow-hidden flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96 overflow-y-auto">
        <div>
          <img class="h-32 w-auto" src="@/assets/img/preview.png"
            alt="Your Company" />
          <h2 class="mt-8 lg:text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an account
          </h2>
          <div class="text-sm">
            Already have an account ?
            <nuxt-link to="/user/login" class="font-semibold text-indigo-600 hover:text-indigo-500">Login</nuxt-link>
          </div>
        </div>

        <div class="mt-10">
          <!-- border-[0.6px] bg-gray-100 border-gray-500 -->
          <div>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                <div class="mt-2 w-full">
                  <input id="name" name="name" type="text" v-model="form.name"
                    class="block w-full px-3 rounded-md  py-3 shadow-sm  placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2 w-full">
                  <input id="email" name="email" type="email" v-model="form.email"
                    class="block w-full rounded-md  py-3 outline-none px-3 shadow-sm  placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                <div class="mt-2 w-full">
                  <input id="phone" name="phone" type="tel" v-model="form.phoneNumber"
                    class="block w-full rounded-md  py-3 outline-none px-3 shadow-sm  placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <label for="date" class="block text-sm font-medium leading-6 text-gray-900">Date Of Birth</label>
                <div class="mt-2 w-full">
                  <input id="date" name="date" type="date" v-model="form.dob"
                    class="block w-full rounded-md  py-3 outline-none px-3 shadow-sm  placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <label for="gender" class="block text-sm font-medium leading-6 text-gray-900">Gender</label>
                <div class="mt-2 w-full">
                  <select v-model="form.gender"
                    class="block w-full rounded-md  py-3 outline-none px-3 shadow-sm  placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6">
                    <option v-for="(itm, idx) in ['Male', 'Female', 'Other']" :key="idx">
                      {{ itm }}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label for="taxId" class="block text-sm font-medium leading-6 text-gray-900">Social Security
                  Number/Tax ID</label>
                <div class="mt-2 w-full">
                  <input id="taxId" name="taxId" type="text" v-model="form.ssn"
                    class="block w-full rounded-md  py-3 outline-none px-3 shadow-sm  placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <label for="occupation" class="block text-sm font-medium leading-6 text-gray-900">Occupation</label>
                <div class="mt-2 w-full">
                  <input id="occupation" name="occupation" type="text" v-model="form.occupation"
                    class="block w-full rounded-md  py-3 outline-none px-3 shadow-sm  placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                <div class="mt-2 w-full">
                  <div class="mt-2 w-full">
                    <input id="country" name="country" type="text" v-model="form.country"
                      class="block w-full px-3 rounded-md  py-3 shadow-sm  placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6" />
                  </div>
                </div>
              </div>

              <div>
                <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                <div class="mt-2 w-full">
                  <div class="mt-2 w-full">
                    <input id="city" name="city" type="text" v-model="form.city"
                      class="block w-full px-3 rounded-md  py-3 shadow-sm  placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6" />
                  </div>
                </div>
              </div>

              <div>
                <label for="zip" class="block text-sm font-medium leading-6 text-gray-900">Zip</label>
                <div class="mt-2 w-full">
                  <input id="zip" name="zip" type="tel" v-model="form.zip"
                    class="block w-full rounded-md  py-3 outline-none px-3 shadow-sm  placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Address</label>
                <div class="mt-2 w-full">
                  <textarea id="address" name="address" rows="6" cols="6" v-model="form.address"
                    class="block w-full rounded-md  py-3 outline-none px-3 resize-none shadow-sm  placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6"></textarea>
                </div>
              </div>
              <div>
                <label for="account-currency" class="block text-sm font-medium leading-6 text-gray-900">Account
                  Currency</label>
                <div class="mt-2 w-full">
                  <select v-model="form.accountCurrency" name="currency"
                    class="block w-full rounded-md  py-3 outline-none px-3 shadow-sm  placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6"
                    required="">
                    <option value="">Select</option>
                    <option value="$">US Dollar</option>
                    <option value="€">Euro</option>
                    <option value="£">Pounds Sterling</option>
                    <option value="RM">Malaysian Ringgit - RM</option>
                    <option value="SGD$">Singapore Dollar</option>
                    <option value="₹">Indian Rupee</option>
                    <option value="Rp">Indonesian Rupiah</option>
                    <option value="AUD$">Australian Dollar</option>
                    <option value="CAD$">Canadian Dollar</option>
                    <option value="₣">CFP Franc</option>
                    <option value="¥">Japanese Yen</option>
                    <option value="¥">Chinese Yen</option>
                    <option value="ا.د">Jordanian Dinar</option>
                    <option value="ك.د">Kuwaiti Dinar</option>
                    <option value="MXN$">Mexican Peso</option>
                    <option value=".ع.ر">Omani Rial</option>
                    <option value="₱">Philippine Peso</option>
                    <option value="ق.ر">Qatari Rial</option>
                    <option value=" ﷼">Saudi Riyal</option>
                    <option value="₩">South Korean Won</option>
                    <option value="฿">Thailand Baht</option>
                    <option value="₫">Vietnam Dong</option>
                  </select>
                </div>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="mt-2 w-full">
                  <input id="password" name="password" type="password" v-model="form.password"
                    class="block w-full rounded-md  py-3 bg-gray-100 outline-none px-3 shadow-sm  placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="pin" class="block text-sm font-medium leading-6 text-gray-900">PIN</label>
                <div class="mt-2 w-full">
                  <input id="pin" name="pin" type="tel" v-model="form.pin"
                    class="block w-full rounded-md  py-3 bg-gray-100 outline-none px-3 shadow-sm  placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Passport
                  Photograph</label>
                <div class="mt-2 w-full">
                  <div class="col-span-full" v-if="!passportFilePreview">
                    <div class="mt-2 w-full flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div class="text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor"
                          aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                            clip-rule="evenodd" />
                        </svg>
                        <div class="mt-4 flex text-sm leading-6 text-gray-600">
                          <label for="file-upload"
                            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" @change="handlePassportUpload"
                              class="sr-only" accept=".pdf,.png,.jpg,.jpeg,.gif" />
                          </label>
                          <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div v-if="profileError" class="error text-xs text-red-500 pt-2 font-medium">
                    {{ profileError }}
                  </div>
                  <iframe v-if="isPdf && passportFilePreview" :src="passportFilePreview"
                    style="width: 100%; height: 500px"></iframe>
                  <img v-if="!isPdf && passportFilePreview" :src="passportFilePreview"
                    style="max-width: 100%; max-height: 500px" />
                </div>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Means of
                  Identification</label>
                <div class="mt-2 w-full">
                  <div class="col-span-full" v-if="!identificationFilePreview">
                    <div class="mt-2 w-full flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div class="text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor"
                          aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                            clip-rule="evenodd" />
                        </svg>
                        <div class="mt-4 flex text-sm leading-6 text-gray-600">
                          <label for="file-upload"
                            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file"
                              @change="handleMeansOfIdentificationUpload" class="sr-only" />
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
                <label for="referralCode" class="block text-sm font-medium leading-6 text-gray-900">Referral Code
                  (optional)</label>
                <div class="mt-2 w-full">
                  <input id="referralCode" name="referralCode" type="tel" v-model="form.referralCode"
                    class="block w-full rounded-md  py-3 bg-gray-100 outline-none px-3 shadow-sm  placeholder:text-gray-400 border-[0.6px] bg-gray-100 border-gray-500 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <button :disabled="processing || !isFormEmpty" type="submit"
                  class="flex disabled:cursor-not-allowed disabled:opacity-25 w-full justify-center text-white rounded-md bg-green-600 py-3">
                  {{ processing ? "loading.." : "Create account" }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="relative hidden h-screen overflow-hidden w-0 flex-1 lg:block">
      <img class="absolute inset-0 brightness-50 bg-black h-full w-full object-cover" src="@/assets/img/added3.jpg"
        alt="" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin-auth",
  head() {
    return {
      title: 'Bastons Banks | User Signup',
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO meta tags
        { hid: 'description', name: 'description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },

        // Open Graph / Facebook meta tags for rich sharing
        { hid: 'og:title', property: 'og:title', content: 'Bastons Banks | User Signup' },
        { hid: 'og:description', property: 'og:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.bastonsbanks.com/user/signup' },
        { hid: 'og:image', property: 'og:image', content: '@/assets/img/preview.png' },

        // Twitter Card meta tags
        { hid: 'twitter:card', name: 'twitter:card', content: '' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Bastons Banks | User Signup' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Mobile Banking, Credit Cards, Mortgages, Auto Loan' },
        { hid: 'twitter:image', name: 'twitter:image', content: '@/assets/img/preview.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  data() {
    return {
      processing: false,
      isPersonalEmailValid: true,
      identificationFilePreview: "",
      passportFilePreview: null,
      isPdf: false,
      profileError: null,
      docfileError: null,
      countries: [],
      cities: [],
      form: {
        name: '',
        email: '',
        phoneNumber: '',
        dob: '',
        gender: '',
        ssn: '',
        occupation: '',
        country: '',
        city: '',
        zip: '',
        address: '',
        accountCurrency: '',
        pin: '',
        passport: '',
        identification: '',
        password: '',
        referralCode: '',
      },
    };
  },
  watch: {
    // Whenever filePreview changes, check for cleanup
    passportFilePreview(newValue, oldValue) {
      if (oldValue) {
        // Revoke the old file URL to avoid memory leaks
        URL.revokeObjectURL(oldValue);
      }
    },
    identificationFilePreview(newValue, oldValue) {
      if (oldValue) {
        // Revoke the old file URL to avoid memory leaks
        URL.revokeObjectURL(oldValue);
      }
    },
    "form.email"(value) {
      this.form.personal_email = value;
      this.validatePersonalEmail(value);
    }
  },
  methods: {
    handlePassportUpload(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 5242880) {
          // 5MB in bytes
          this.profileError =
            "File is too large. Please upload a file smaller than 5MB.";
          return;
        }

        this.profileError = null; // Reset error message
        const fileType = file.type;
        this.isPdf = fileType === "application/pdf";

        // Check if the file type is supported
        if (
          this.isPdf ||
          fileType === "image/png" ||
          fileType === "image/jpeg" ||
          fileType === "image/gif"
        ) {
          const reader = new FileReader();

          reader.onload = () => {
            this.form.passport = reader.result;
          };
          reader.readAsDataURL(file);
          // Generate a URL for the file
          this.passportFilePreview = URL.createObjectURL(file);
          // this.form.passport = URL.createObjectURL(file);
        } else {
          this.profileError =
            "Unsupported file type. Please upload a PDF, PNG, JPG, or GIF file.";
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
            this.form.identification = reader.result;
          };
          reader.readAsDataURL(file);
        } else {
          this.docfileError =
            "Unsupported file type. Please upload a PDF, PNG, JPG, or GIF file.";
        }
      }
    },
    validatePersonalEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.isPersonalEmailValid = true;
      } else {
        this.isPersonalEmailValid = false;
      }
    },
    async handleSubmit() {
      console.log(this.form, 'here')
      this.processing = true;
      try {
        const signupMutation = `
          mutation newUser($input: NewUser!) {
            newUser(input: $input) {
                  jwt
            }
          }
        `;

        const response = await fetch(
          "https://api.bastonsbanks.com/graphql/query",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              query: signupMutation,
              variables: {
                input: {
                  name: this.form.name,
                  email: this.form.email,
                  phoneNumber: this.form.phoneNumber,
                  dob: this.form.dob,
                  gender: this.form.gender,
                  ssn: this.form.ssn,
                  occupation: this.form.occupation,
                  country: this.form.country,
                  city: this.form.city,
                  zip: this.form.zip,
                  address: this.form.address,
                  accountCurrency: this.form.accountCurrency,
                  pin: this.form.pin,
                  passport: this.form.passport,
                  identification: this.form.identification,
                  password: this.form.password,
                  referralCode: this.form.referralCode,
                  // personal_name: this.form.personal_name,
                  // personal_email: this.form.personal_email,
                  // personal_phone: this.form.personal_phone,
                  // dob: this.form.dob,
                  // gender: this.form.gender,
                  // taxId: this.form.taxId,
                  // occupation: this.form.occupation,
                  // country: this.form.country,
                  // city: this.form.city,
                  // zip: this.form.zip,
                  // contact_address: this.form.contact_address,
                  // // kin_name: this.form.kin_address,
                  // // kin_email: this.form.kin_email,
                  // // kin_phone: this.form.kin_phone,
                  // // relationship: this.form.relationship,
                  // // kin_address: this.form.kin_address,
                  // currency_account: this.form.currency_account,
                  // password: this.form.password,
                  // pin: this.form.pin,
                  // passport: this.form.passport,
                  // means_of_identification: this.form.means_of_identification
                },
              },
            }),
          }
        );
        const data = await response.json();
        if (data?.errors) {
          this.$toastr.e(data.errors[0].message);
        } else {
          if (process.client) {
            sessionStorage.setItem(
              "auth",
              JSON.stringify(data?.data?.newUser?.jwt)
            );
            sessionStorage.setItem(
              "user",
              JSON.stringify(data?.data?.newUser?.user)
            );
          }
          this.$toastr.s("Signup was successful");
          this.$router.push("/user/login");
        }
      } finally {
        this.processing = false;
      }
    },
  },
  beforeDestroy() {
    if (this.passportFilePreview) {
      URL.revokeObjectURL(this.passportFilePreview);
    }

    if (this.identificationFilePreview) {
      URL.revokeObjectURL(this.identificationFilePreview);
    }
  },
  computed: {
    isFormEmpty() {
      return !!(
        this.form.name &&
        this.form.email &&
        this.form.phoneNumber &&
        this.form.dob &&
        this.form.gender &&
        this.form.ssn &&
        this.form.occupation &&
        this.form.country &&
        this.form.city &&
        this.form.zip &&
        this.form.address &&
        this.form.accountCurrency &&
        this.form.pin &&
        this.form.passport &&
        this.form.identification &&
        this.form.password
      );
    }
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>
