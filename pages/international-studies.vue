<script setup>
import AppButton from "../components/shared-components/AppButton.vue";
</script>

<template>
  <section class="international-studies py-8">
    <div class="container">
      <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
        Maktab yoshdagi bolal
      </h1>
      <p class="text-sm mb-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut expedita,
        explicabo nobis facilis nihil delectus, placeat repellendus cupiditate
        soluta, maxime laborum voluptate. Iure incidunt numquam quia commodi
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        <div data-aos="fade-up">
          <div
            class="flex flex-col gap-4 shadow rounded border p-4 sm:p-8 transition-all duration-500 hover:shadow-none"
          >
            <p class="text-2xl font-semibold">Online testlar</p>
            <p class="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, ad
              iste! Minus, adipisci voluptate quos soluta repellat laudantium
              delectus architecto et neque. Dolorem, vel sit facere alias
              architecto harum ipsum!
            </p>
            <AppButton color="primary" size="md"> Kirish </AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
