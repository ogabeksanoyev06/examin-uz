<template>
  <div class="block-test py-8">
    <div class="container">
      <div class="flex flex-wrap gap-4">
        <div
          class="flex items-center justify-center border py-2 px-4 rounded-lg cursor-pointer group transition-all duration-300 hover:bg-secondary hover:text-white"
        >
          <span class="text-sm">Matematika</span>
        </div>
        <div
          class="flex items-center justify-center border py-2 px-4 rounded-lg cursor-pointer group transition-all duration-300 bg-secondary text-white"
        >
          <span class="text-sm">Ona tili va adabiyoti</span>
        </div>
      </div>
      <div class="flex flex-col gap-5 mt-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <AppSelect optionLabel="Savollar sonini" />
          <AppSelect optionLabel="Darajani tanlang" />
        </div>
      </div>
      <div class="relative overflow-x-auto mt-6">
        <table class="w-full text-sm text-left rtl:text-right">
          <tbody>
            <tr class="bg-primary-50 text-primary">
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">Fan nomi</th>
              <th scope="col" class="px-6 py-4">Savollar soni</th>
              <th scope="col" class="px-6 py-4">Daraja</th>
              <th scope="col" class="px-6 py-4">Ball</th>
            </tr>
            <tr class="border-b text-sm">
              <td scope="col" class="px-6 py-4">1</td>
              <td scope="col" class="px-6 py-4">Ona tili (majburiy)</td>
              <td scope="col" class="px-6 py-4">10</td>
              <td scope="col" class="px-6 py-4">Qiyin</td>
              <td scope="col" class="px-6 py-4">1</td>
            </tr>

            <tr class="text-center bg-primary text-white">
              <th scope="col" colspan="3" class="px-6 py-4">Umumiy ball :</th>
              <th scope="col" colspan="2" class="px-6 py-4">30</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-8 flex justify-center">
        <nuxt-link to="/test">
          <AppButton color="secondary" variant="tertiary" size="lg">
            Testni boshlash
          </AppButton>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from '../../components/shared-components/AppButton.vue';
import AppSelect from '../../components/shared-components/AppSelect.vue';
</script>

<style lang="scss" scoped></style>
