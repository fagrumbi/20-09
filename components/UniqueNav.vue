<template>
  <main>
    <div class="relative">
      <nav class="bg-gray-800 sticky top-0 py-3 z-50 hidden lg:block">
        <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <!-- <img class="h-32 w-full" src="@/assets/img/preview.png"
                alt="Your Company"> -->
                <nuxt-link to="/"><img src="@/assets/img/preview.png"
                    alt="Company Logo" class="h-32 w-full" /></nuxt-link>
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                  <!-- <a href="#" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Dashboard</a> -->
                  <button v-for="itm in navigationBarList" :key="itm.key"
                    class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    @click="openMenu(itm.key)">{{ itm.name }}</button>
                </div>
              </div>
              <div class="hidden sm:ml-6 sm:block">


                <!-- Profile dropdown -->
                <div class="relative ml-3">
                  <div class="flex items-center gap-x-4">
                    <nuxt-link to="/user/signup"
                      class="relative flex rounded-md py-2.5 px-2 bg-green-600 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span class="">Create Account</span>
                    </nuxt-link>
                    <button @click="isModalVisible = true"
                      class="relative flex rounded-md py-2.5 px-6 bg-green-600 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span class="">Login</span>
                    </button>
                  </div>
                  <div v-if="false"
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <!-- Active: "bg-gray-100", Not Active: "" -->
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                      id="user-menu-item-0">Your Profile</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                      id="user-menu-item-1">Settings</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                      id="user-menu-item-2">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex sm:hidden">
              <!-- Mobile menu button -->
              <button type="button"
                class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu" aria-expanded="false">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                <!--
                Icon when menu is closed.

                Menu open: "hidden", Menu closed: "block"
              -->
                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <!--
                Icon when menu is open.

                Menu open: "block", Menu closed: "hidden"
              -->
                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Dashboard</a>
            <a href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
            <a href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
            <a href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
          </div>
          <div class="border-t border-gray-700 pb-3 pt-4">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="">
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-white">Tom Cook</div>
                <div class="text-sm font-medium text-gray-400">tom@example.com</div>
              </div>
              <button type="button"
                class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">View notifications</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </button>
            </div>
            <div class="mt-3 space-y-1 px-2">
              <a href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your
                Profile</a>
              <a href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
              <a href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign
                out</a>
            </div>
          </div>
        </div>
      </nav>

      <div v-if="isOpen" class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
        <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
        <div class="fixed inset-0 bg-gray-900/80"></div>

        <div class="fixed inset-0 flex">
          <!--
          Off-canvas menu, show/hide based on off-canvas menu state.

          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        -->
          <div class="relative mr-16 flex w-full max-w-xs flex-1">
            <!--
            Close button, show/hide based on off-canvas menu state.

            Entering: "ease-in-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-300"
              From: "opacity-100"
              To: "opacity-0"
          -->
            <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
              <button @click="isOpen = false" type="button" class="-m-2.5 p-2.5">
                <span class="sr-only">Close sidebar</span>
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
              <div class="flex h-16 shrink-0 items-center">
                <!-- <img class="h-32 w-full" src="@/assets/img/preview.png"
                  alt="Your Company"> -->
                <img @click="navigateHome" src="@/assets/img/preview.png" class="h-32 w-full"
                  alt="Company Logo" />
              </div>
              <nav class="flex flex-1 flex-col">
                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" class="-mx-2 space-y-3">
                      <li>
                        <nuxt-link to="/"
                          class="bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700">
                          <svg class="h-6 w-6 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                          </svg>
                          {{ navigationBarList[0].name }}
                        </nuxt-link>
                      </li>
                      <li v-for="(itm, index) in navigationBarList" :key="index">
                        <div v-if="itm?.subMenu?.length">
                          <button type="button" @click="toggleSummary(index)"
                            class="hover:bg-gray-50 flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
                            aria-controls="sub-menu-1" aria-expanded="false">
                            <svg class="h-6 w-6 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24"
                              stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>
                            {{ itm.name }}
                            <svg class="text-gray-400 ml-auto h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor"
                              aria-hidden="true">
                              <path fill-rule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clip-rule="evenodd" />
                            </svg>
                          </button>
                          <ul class="mt-1 px-2" id="sub-menu-1" v-if="itm.open">
                            <li v-for="itm in itm.subMenu" :key="itm.name">
                              <nuxt-link v-if="itm.name !== 'Bastion Accounts'" :to="itm.path"
                                @click.native="isOpen = false"
                                class="hover:bg-gray-50 block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700">{{
                    itm.name }}</nuxt-link>
                              <button @click="openModal" v-if="itm.name === 'Bastion Accounts'"
                                class="hover:bg-gray-50 block w-full rounded-md py-2 text-left pl-10 text-sm leading-6 text-gray-700">{{
                    itm.name }}</button>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li class="-mx-6 mt-auto">
                    <nuxt-link to="/user/login"
                      class="flex items-center gap-x-4 px-6 py-3 text-sm text-white font-semibold leading-6 ">
                      <img class="h-8 w-8 rounded-full" src="@/assets/img/user.png" alt="">
                      <span class="sr-only">Your profile</span>
                      <span aria-hidden="true">Login</span>
                    </nuxt-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:pl-72 lg:hidden">
        <div
          class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-blue-700 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <!-- Separator -->
          <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div class="-mt-5">
              <img class="w-full h-24" src="@/assets/img/preview.png" />
            </div>
            <div class="flex items-center gap-x-4 lg:gap-x-6">
              <!-- Separator -->
              <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true"></div>
            </div>
          </div>
          <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true"></div>
          <!-- <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
            <span class="sr-only">View notifications</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </button> -->
          <button @click="isOpen = true" type="button" class="-m-2.5 p-2.5 z-50 cursor-pointer text-gray-700 lg:hidden">
            <span class="sr-only">Open sidebar</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Overlay -->
      <div v-if="activeMenu" class="fixed inset-0 bg-black bg-opacity-50 z-10" @click="closeMenu"></div>

      <div v-if="activeMenu === 'bank'"
        class="fixed top-0 mt-14 max-w-7xl w-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg z-20 p-4 animate-fade-in-down">
        <div
          class="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
          <div v-for="item in  navigationBarList[1].subMenu" :key="item.name" @click="closeMenu"
            class="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-6">
            <div
              class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <div>
              <button @click="openModal" v-if="item.name === 'Bastion Accounts'" class="font-semibold text-gray-900">{{
                    item.name }}</button>
              <nuxt-link :to="item.path" v-else class="font-semibold text-gray-900">
                {{ item.name }}
                <span class="absolute inset-0"></span>
              </nuxt-link>
              <p class="mt-1 text-gray-600">Get a better understanding of where your traffic is coming from</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeMenu === 'save'"
        class="fixed top-0 mt-14 max-w-7xl w-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg z-20 p-4 animate-fade-in-down">
        <div
          class="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
          <div v-for="item in  navigationBarList[2].subMenu" :key="item.name" @click="closeMenu"
            class="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-6">
            <div
              class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <div>
              <nuxt-link :to="item.path" class="font-semibold text-gray-900">
                {{ item.name }}
                <span class="absolute inset-0"></span>
              </nuxt-link>
              <p class="mt-1 text-gray-600">Get a better understanding of where your traffic is coming from</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeMenu === 'borrow'"
        class="fixed top-0 mt-14 max-w-7xl w-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg z-20 p-4 animate-fade-in-down">
        <div
          class="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
          <div v-for="item in  navigationBarList[3].subMenu" :key="item.name" @click="closeMenu"
            class="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-6">
            <div
              class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <div>
              <nuxt-link :to="item.path" class="font-semibold text-gray-900">
                {{ item.name }}
                <span class="absolute inset-0"></span>
              </nuxt-link>
              <p class="mt-1 text-gray-600">Get a better understanding of where your traffic is coming from</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeMenu === 'wealth'"
        class="fixed top-0 mt-14 max-w-7xl w-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg z-20 p-4 animate-fade-in-down">
        <div
          class="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
          <div v-for="item in  navigationBarList[4].subMenu" :key="item.name" @click="closeMenu"
            class="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-6">
            <div
              class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <div>
              <nuxt-link :to="item.path" class="font-semibold text-gray-900">
                {{ item.name }}
                <span class="absolute inset-0"></span>
              </nuxt-link>
              <p class="mt-1 text-gray-600">Get a better understanding of where your traffic is coming from</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeMenu === 'insure'"
        class="fixed top-0 mt-14 max-w-7xl w-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg z-20 p-4 animate-fade-in-down">
        <div
          class="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
          <div v-for="item in  navigationBarList[5].subMenu" :key="item.name" @click="closeMenu"
            class="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-6">
            <div
              class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <div>
              <nuxt-link :to="item.path" class="font-semibold text-gray-900">
                {{ item.name }}
                <span class="absolute inset-0"></span>
              </nuxt-link>
              <p class="mt-1 text-gray-600">Get a better understanding of where your traffic is coming from</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeMenu === 'learn'"
        class="fixed top-0 mt-14 max-w-7xl w-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg z-20 p-4 animate-fade-in-down">
        <div
          class="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
          <div v-for="item in  navigationBarList[6].subMenu" :key="item.name" @click="closeMenu"
            class="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-6">
            <div
              class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <div>
              <nuxt-link :to="item.path" class="font-semibold text-gray-900">
                {{ item.name }}
                <span class="absolute inset-0"></span>
              </nuxt-link>
              <p class="mt-1 text-gray-600">Get a better understanding of where your traffic is coming from</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeMenu === 'payments'"
        class="fixed top-0 mt-14 max-w-7xl w-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg z-20 p-4 animate-fade-in-down">
        <div
          class="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
          <div v-for="item in  navigationBarList[7].subMenu" :key="item.name" @click="closeMenu"
            class="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-6">
            <div
              class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <div>
              <nuxt-link :to="item.path" class="font-semibold text-gray-900">
                {{ item.name }}
                <span class="absolute inset-0"></span>
              </nuxt-link>
              <p class="mt-1 text-gray-600">Get a better understanding of where your traffic is coming from</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal :isVisible.sync="isModalVisible">
      <main class="relative">
        <div class="absolute right-0 top-0">
          <svg @click="isModalVisible = false" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="22"
            height="22" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="2.5" stroke-linecap="round"
            stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <div class="flex  flex-col justify-center">
          <nuxt-link to="/user/login" class="flex flex-col items-center gap-x-3 justify-center">
            <img class="h-32 w-full" src="@/assets/img/preview.png"
              alt="Your Company">
            <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-blue-700">Login</h2>
          </nuxt-link>

          <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <form class="space-y-6 p-4" @submit.prevent="handleLogin">
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
                <div class="mt-2">
                  <input id="email" v-model="form.email" name="email" type="email"
                    class="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
                <span v-if="!isEmailValid" class="text-xs text-red-500 font-medium">Please enter a valid email
                  address</span>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="mt-2">
                  <input id="password" v-model="form.password" name="password" type="password"
                    class="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
              </div>

              <div>
                <button type="submit" :disabled="!isFormEmpty || processing"
                  class="flex w-full justify-center rounded-md bg-yellow-600 disabled:cursor-not-allowed disabled:opacity-25 px-3 py-2.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  {{ processing ? 'processing..' : 'Sign in'}}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Modal>
  </main>
</template>

<script>
import Modal from '@/components/core/Modal.vue';
export default {
  components: {
    Modal,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      processing: false,
      isEmailValid: true,
      showPassword: false,
      activeMenu: '',
      isDropOpen: [true],
      isModalVisible: false,
      isOpen: false,
      navigationBarList: [
        {
          name: 'Homes',
          key: '',
        },
        {
          name: 'Bank',
          open: false,
          key: 'bank',
          subMenu: [
            {
              name: 'Bastion Accounts',
              open: false,
              path: '',
              action: () => openModal()
            },
            {
              name: 'Credit Cards',
              path: '/bank/credit-cards',
              open: false,
              action: () => { }
            },
            {
              name: 'Online & Mobile Banking',
              open: false,
              path: '/bank',
              action: () => { }
            },
            {
              name: 'Why bank with Bastion ?',
              open: false,
              path: '/bank/about-us',
              action: () => { }
            }
          ]
        },
        {
          name: 'Save',
          key: 'save',
          subMenu: [
            {
              name: 'Bastion High Yield Savings',
              path: '/save/high-yield-saving',
              action: () => { }
            },
            {
              name: 'Bastion Star Savings',
              path: '/save/high-yield-saving',
              action: () => { }
            },
            {
              name: 'Bastion Certificates',
              path: '/save/high-yield-saving',
              action: () => { }
            },
            {
              name: 'Bastion Holiday Club & Auxillary Savings',
              path: '/save/high-yield-saving',
              action: () => { }
            },
            {
              name: 'Bastion Kids Club',
              path: '/save/high-yield-saving',
              action: () => { }
            },
            {
              name: 'Bastion Money Market',
              path: '/save/high-yield-saving',
              action: () => { }
            }
          ]
        },
        {
          name: 'Borrow',
          key: 'borrow',
          subMenu: [
            {
              name: 'Bastion Credit Cards',
              path: '/borrow',
              action: () => { }
            },
            {
              name: 'Bastion Mortgage and Home Loan Center',
              path: '/borrow',
              action: () => { }
            },
            {
              name: 'Bastion Personal Loans',
              path: '/borrow',
              action: () => { }
            },
            {
              name: 'Bastion Auto and Motorcycle Loans',
              path: '/borrow',
              action: () => { }
            },
            {
              name: 'Bastion Auto Refinance',
              path: '/borrow',
              action: () => { }
            },
            {
              name: 'Bastion Student Loans',
              path: '',
              action: () => { }
            }
          ]
        },
        {
          name: 'Wealth & Retire',
          key: 'wealth',
          subMenu: [
            {
              name: 'Our Investment Team',
              path: '/invest',
              action: () => { }
            },
            {
              name: 'Retirement Planning',
              path: '/invest',
              action: () => { }
            },
            {
              name: 'Financial Planning',
              path: '/invest',
              action: () => { }
            },
            {
              name: 'Estate Planning & Wealth Transfer',
              path: '/invest',
              action: () => { }
            },
            {
              name: 'IRA Rollover Assistance',
              path: '/invest',
              action: () => { }
            },
            {
              name: 'Online Investing & Brokerage',
              path: '/invest',
              action: () => { }
            }
          ]
        },
        {
          name: 'Insure',
          key: 'insure',
          subMenu: [
            {
              name: 'Medicare Insurance',
              path: '/insure',
              action: () => { }
            },
            {
              name: 'Auto Insurance',
              path: '/insure',
              action: () => { }
            },
            {
              name: 'Life Insurance',
              path: '/insure',
              action: () => { }
            },
            {
              name: 'Accidental death & Dismemberment Insurance',
              path: '/insure',
              action: () => { }
            },
            {
              name: 'Hospital Accident Insurance',
              path: '/insure',
              action: () => { }
            },
            {
              name: 'Home Owners  and Renters Insurance',
              path: '/insure',
              action: () => { }
            }
          ]
        },
        {
          name: 'Learn and Plan',
          key: 'learn',
          subMenu: [
            {
              name: 'Tax Checklist: 5 Things to Remember',
              path: '/learn-and-plan/tax-checklist',
              action: () => { }
            },
            {
              name: 'How to Start Saving For Summer Vacation',
              path: '/learn-and-plan/summer-saving',
              action: () => { }
            },
            {
              name: 'Simple Ways To Manage A Checking Account',
              path: '/learn-and-plan/manage-checking-account',
              action: () => { }
            },
            {
              name: 'The Importance of Rising Rates and Insurance on Your Business',
              path: '/learn-and-plan/rising-rates-impact',
              action: () => { }
            }
          ]
        },
        {
          name: 'Payments',
          key: 'payments',
          subMenu: [
            {
              name: 'Auto Loan Customer Center',
              path: '/payments',
              action: () => { }
            },
            {
              name: 'One Time Payment',
              path: '/payments',
              action: () => { }
            },
            {
              name: 'Pay by Mail',
              path: '/payments',
              action: () => { }
            },
            {
              name: 'Pay at Branch',
              path: '/payments',
              action: () => { }
            }
          ]
        }
      ]
    };
  },
  methods: {
    openMenu(menu) {
      this.activeMenu = menu;
    },
    closeMenu() {
      this.activeMenu = '';
    },
    openModal() {
      this.isModalVisible = true;
    },
    toggleSummary(index) {
      this.$set(this.navigationBarList, index, {
        ...this.navigationBarList[index],
        open: !this.navigationBarList[index].open
      })
    },
    toggleSidebar() {
      this.isOpen = !this.isOpen
    },
    navigateHome() {
      this.$router.push('/')
      this.isOpen = !this.isOpen
    },
    async handleLogin() {
      this.processing = true;
      const loginMutation = `
        mutation {
          userLogin(email: "${this.form.email}", password: "${this.form.password}") {
            jwt
            user {
              id
              name
              email
              role
              phoneNumber
              dob
              gender
              ssn
              occupation
              country
              city
              zip
              address
              accountCurrency
              pin
              passport
              identification
              Status
              PlanType
              accountBalance
              cardBalance
              cardNumber
              expiry
              cvv
              eth
              btc
              timeAdded
              admin {
                id
                email
                role
                Status
                timeAdded
                btc
                eth
                name
              }
            }
          }
        }
      `;
      try {
        const response = await fetch(
          "https://fidelityvalues.onrender.com/graphql/query",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              query: loginMutation,
              variables: {
                email: this.form.email,
                password: this.form.password,
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
              JSON.stringify(data?.data?.userLogin?.jwt)
            );
            sessionStorage.setItem(
              "user",
              JSON.stringify(data?.data?.userLogin?.user)
            );
          }
          this.$toastr.s("Login was successful");
          this.$router.push("/user/dashboard");
        }
      } finally {
        this.processing = false;
      }
    },
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.isEmailValid = true;
      } else {
        this.isEmailValid = false;
      }
    },
    switchLanguage(event) {
      this.$i18n.setLocale(event.target.value);
    }
  },
  computed: {
    computedArray() {
      return this.navigationBarList.shift(); // Removes the first element from the array
    },
    isFormEmpty() {
      return !!(this.form.email && this.form.password);
    },
    eye() {
      return !this.showPassword ? 'eye-close.svg' : 'eye-open.svg'
    }
  },
  watch: {
    "form.email"(value) {
      this.form.email = value;
      this.validateEmail(value);
    },
  }
};
</script>
