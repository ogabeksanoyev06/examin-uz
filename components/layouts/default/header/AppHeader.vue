<template>
  <header
    class="bg-white/75 backdrop-blur border-b border-gray-200 -mb-px sticky top-0 z-50"
  >
    <div class="container">
      <div class="flex items-center justify-between h-[64px]">
        <button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md border bg-transparent shadow-sm h-8 w-8 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
        <div class="flex items-center">
          <NuxtLink
            to="/"
            class="flex-shrink-0 font-bold text-xl flex items-end"
          >
            <span class="text-primary"> i </span> <span>Testify</span>
          </NuxtLink>
        </div>
        <ul
          class="justify-start space-x-6 text-sm font-medium hidden md:flex items-center"
        >
          <li class="relative">
            <NuxtLink
              :to="{ path: '/choose-test' }"
              class="hover:text-primary transition-colors"
            >
              Testlar
            </NuxtLink>
          </li>
          <li class="relative">
            <NuxtLink
              :to="{ path: '/international-studies' }"
              class="hover:text-primary transition-colors"
            >
              Xalqaro tadqiqotlar
            </NuxtLink>
          </li>
          <!-- <li class="relative">
              <NuxtLink
                :to="{ path: '/results' }"
                class="hover:text-primary transition-colors"
              >
                Natijalarim
              </NuxtLink>
            </li> -->
          <li class="relative">
            <NuxtLink to="/" class="hover:text-primary transition-colors">
              Yo'riqnoma
            </NuxtLink>
          </li>
        </ul>
        <div class="flex items-center justify-end gap-1.5">
          <AppButton
            color="primary"
            @click="$router.push({ name: 'auth-login' })"
            class="hidden md:block"
            v-if="!isLoggedIn()"
          >
            Tizimga kirish
          </AppButton>
          <button
            @click="$router.push({ name: 'auth-login' })"
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md border bg-transparent shadow-sm h-8 w-8 md:hidden"
            v-if="!isLoggedIn()"
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
            >
              <path
                d="M14 8.32532V6.32532C14 5.79488 13.7893 5.28618 13.4142 4.9111C13.0391 4.53603 12.5304 4.32532 12 4.32532H5C4.46957 4.32532 3.96086 4.53603 3.58579 4.9111C3.21071 5.28618 3 5.79488 3 6.32532V18.3253C3 18.8558 3.21071 19.3645 3.58579 19.7395C3.96086 20.1146 4.46957 20.3253 5 20.3253H12C12.5304 20.3253 13.0391 20.1146 13.4142 19.7395C13.7893 19.3645 14 18.8558 14 18.3253V16.3253M7 12.3253H21M21 12.3253L18 9.32532M21 12.3253L18 15.3253"
                stroke="#354052"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <AppDropdown v-if="isLoggedIn()">
            <template #trigger="{ onToggle }">
              <div
                @click="onToggle"
                class="flex items-center relative cursor-pointer"
              >
                <div
                  class="rounded-full relative overflow-hidden shrink-0 before:border-[2px] before:border-solid before:border-white-100 before:opacity-70 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:rounded-full w-8 h-8"
                >
                  <div class="h-full">
                    <div
                      class="flex items-center justify-center text-white h-full w-full object-cover text-sm bg-primary-900"
                    >
                      OS
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template #content="{ closeMenu }">
              <ul class="p-1 min-w-[12rem]">
                <div
                  class="flex items-center gap-3 px-2 py-1.5 text-sm font-semibold"
                >
                  <div
                    class="rounded-full relative overflow-hidden shrink-0 before:border-[2px] before:border-solid before:border-white-100 before:opacity-70 before:absolute before:w-full before:h-full before:rounded-full w-8 h-8"
                  >
                    <div class="h-full">
                      <div
                        class="flex items-center justify-center text-white h-full w-full object-cover text-sm bg-primary-900"
                      >
                        OS
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col space-y-1 whitespace-nowrap">
                    <p class="text-sm font-medium leading-none">
                      Og'abek Sanoyev
                    </p>
                    <p class="text-xs leading-none text-muted-foreground">
                      +998 93 081 91 40
                    </p>
                  </div>
                </div>
                <div role="separator" class="-mx-1 my-1 h-px bg-gray-100"></div>
                <NuxtLink to="/profile">
                  <li
                    class="flex items-center relative text-sm font-medium rounded-sm px-2 py-1.5 transition-all duration-300 cursor-pointer whitespace-nowrap hover:bg-secondary-100 hover:text-secondary"
                    :class="{
                      'bg-secondary-100 text-secondary':
                        router.name === 'profile',
                    }"
                    @click="closeMenu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-4 h-4 mr-2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="10" r="3"></circle>
                      <path
                        d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"
                      ></path>
                    </svg>
                    Mening profilim
                  </li>
                </NuxtLink>
                <nuxt-link to="/profile/top-up-balance">
                  <li
                    class="flex items-center relative text-sm font-medium rounded-sm px-2 py-1.5 transition-all duration-300 cursor-pointer whitespace-nowrap hover:bg-secondary-100 hover:text-secondary"
                    :class="{
                      'bg-secondary-100 text-secondary':
                        router.name === 'profile-top-up-balance',
                    }"
                    @click="closeMenu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-4 h-4 mr-2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                      <path d="M12 18V6"></path>
                    </svg>
                    Hisobni to'ldirish
                  </li>
                </nuxt-link>
                <nuxt-link to="/profile/tests-results">
                  <li
                    class="flex items-center relative text-sm font-medium rounded-sm px-2 py-1.5 transition-all duration-300 cursor-pointer whitespace-nowrap hover:bg-secondary-100 hover:text-secondary"
                    :class="{
                      'bg-secondary-100 text-secondary':
                        router.name === 'profile-tests-results',
                    }"
                    @click="closeMenu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-4 h-4 mr-2"
                    >
                      <polygon
                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                      ></polygon>
                    </svg>
                    Mening natijalarim
                  </li>
                </nuxt-link>

                <nuxt-link to="/profile/payment-history">
                  <li
                    class="flex items-center relative text-sm font-medium rounded-sm px-2 py-1.5 transition-all duration-300 cursor-pointer whitespace-nowrap hover:bg-secondary-100 hover:text-secondary"
                    :class="{
                      'bg-secondary-100 text-secondary':
                        router.name === 'profile-payment-history',
                    }"
                    @click="closeMenu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-4 h-4 mr-2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                      <path d="M12 18V6"></path>
                    </svg>
                    To'lovlar tarixi
                  </li>
                </nuxt-link>

                <div role="separator" class="-mx-1 my-1 h-px bg-gray-100"></div>
                <li
                  class="flex items-center relative text-sm font-medium rounded-sm px-2 py-1.5 transition-all duration-300 cursor-pointer whitespace-nowrap hover:bg-danger-100 hover:text-danger"
                  @click="
                    () => {
                      closeMenu();
                      logout();
                    }
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 mr-2"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" x2="9" y1="12" y2="12"></line>
                  </svg>
                  Hisobdan chiqish
                </li>
              </ul>
            </template>
          </AppDropdown>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { access_token, refresh_token } from '~/services/tokenService';
import AppDropdown from '~/components/shared-components/AppDropdown.vue';
import AppButton from '../../../shared-components/AppButton.vue';

const { isLoggedIn } = useAuth();

const router = useRoute();

function logout() {
  access_token.value = '';
  refresh_token.value = '';
}
</script>
