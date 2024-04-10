<template>
  <form class="space-y-6 p-4" action="#" method="POST">
    <div>
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Account ID</label>
      <div class="mt-2">
        <input id="email" name="email" type="email" autocomplete="email" required
          class="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
      <div class="mt-2">
        <input id="password" name="password" type="password" autocomplete="current-password" required
          class="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="text-sm leading-6">
        Forgot password?
        <nuxt-link to="/contact-us" class="font-semibold text-indigo-600 hover:text-indigo-500">Contact
          support</nuxt-link>
      </div>
    </div>

    <div>
      <button type="submit"
        class="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
        in</button>
    </div>
  </form>
</template>
