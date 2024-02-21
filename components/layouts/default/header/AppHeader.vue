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
          >
            Tizimga kirish
          </AppButton>
          <button
            @click="$router.push({ name: 'auth-login' })"
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md border bg-transparent shadow-sm h-8 w-8 md:hidden"
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
          <AppButton
            color="primary"
            variant="tertiary"
            @click="$router.push({ name: 'profile' })"
          >
            Profile
          </AppButton>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import AppButton from '../../../shared-components/AppButton.vue';
</script>
