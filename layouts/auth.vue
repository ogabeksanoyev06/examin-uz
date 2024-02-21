<template>
  <div class="bg-gray-50">
    <main class="min-h-screen flex justify-center items-center">
      <div class="container">
        <div class="flex flex-col justify-between text-center">
          <div class="flex flex-col items-center justify-center space-y-2">
            <h2 class="text-2xl font-bold sm:text-3xl">Xush kelibsiz!</h2>
            <p class="text-base text-gray-500 max-w-[500px]">
              Marhamat ma’lumotlaringizni kiriting
            </p>
          </div>
          <div class="max-w-[450px] mx-auto w-full mt-3">
            <slot />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup></script>
