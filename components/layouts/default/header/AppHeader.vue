<template>
  <header
    class="bg-white/75 backdrop-blur border-b border-gray-200 -mb-px sticky top-0 z-50"
  >
    <div class="container">
      <div class="flex items-center justify-between h-[64px]">
        <div class="flex items-center space-x-8">
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
        </div>
        <div class="flex items-center justify-end gap-1.5">
          <AppButton
            color="primary"
            variant="tertiary"
            @click="$router.push({ name: 'auth-login' })"
          >
            Tizimga kirish
          </AppButton>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import AppButton from "../../../shared-components/AppButton.vue";
</script>
