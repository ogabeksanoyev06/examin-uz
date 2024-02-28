<template>
  <div class="online-test py-8">
    <div class="container">
      <!-- <div
        class="flex items-center bg-primary-50 rounded p-[0.5rem_0.75rem] transition-all mb-6"
      >
        <p class="text-sm font-medium text-primary-700 flex-1">
          Berilgan ma'lumotlarni tanlang va yo'nalish bo'yicha testga ega
          bo'ling
        </p>
      </div> -->
      <div class="flex flex-col gap-5 mb-6">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <AppSelect optionLabel="Viloyatni tanlang" />
          <AppSelect optionLabel="Universitet tanlang" />
          <AppSelect optionLabel="Test tilini tanlang" />
          <AppSelect optionLabel="Ta'lim shaklini tanlang" />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 text-center">
          <AppSelect
            optionLabel="Ta'lim Yo'nalishini tanlang"
            class="lg:col-span-9"
          />
          <AppSelect optionLabel="Chet tilini tanlang" class="lg:col-span-3" />
        </div>
      </div>

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right">
          <tbody>
            <tr class="bg-primary-900 text-white">
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">Majburiy fanlar</th>
              <th scope="col" class="px-6 py-4">Testlar soni</th>
              <th scope="col" class="px-6 py-4">Ball</th>
            </tr>
            <tr class="border-b text-sm">
              <td scope="col" class="px-6 py-4">1</td>
              <td scope="col" class="px-6 py-4">Ona tili (majburiy)</td>
              <td scope="col" class="px-6 py-4">10</td>
              <td scope="col" class="px-6 py-4">1.1</td>
            </tr>
            <tr class="border-b text-sm">
              <td scope="col" class="px-6 py-4">1</td>
              <td scope="col" class="px-6 py-4">Ona tili (majburiy)</td>
              <td scope="col" class="px-6 py-4">10</td>
              <td scope="col" class="px-6 py-4">1.1</td>
            </tr>

            <tr class="border-b text-sm">
              <td scope="col" class="px-6 py-4">1</td>
              <td scope="col" class="px-6 py-4">Ona tili (majburiy)</td>
              <td scope="col" class="px-6 py-4">10</td>
              <td scope="col" class="px-6 py-4">1.1</td>
            </tr>
            <tr class="text-center">
              <th scope="col" colspan="2" class="px-6 py-4">Umumiy ball</th>
              <th scope="col" colspan="2" class="px-6 py-4">153</th>
            </tr>
            <tr class="bg-primary-900 text-white">
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">Asosiy fanlar</th>
              <th scope="col" class="px-6 py-4">Testlar soni</th>
              <th scope="col" class="px-6 py-4">Ball</th>
            </tr>
            <tr class="border-b text-sm">
              <td scope="col" class="px-6 py-4">1</td>
              <td scope="col" class="px-6 py-4">Ona tili (majburiy)</td>
              <td scope="col" class="px-6 py-4">10</td>
              <td scope="col" class="px-6 py-4">1.1</td>
            </tr>
            <tr class="border-b text-sm">
              <td scope="col" class="px-6 py-4">1</td>
              <td scope="col" class="px-6 py-4">Ona tili (majburiy)</td>
              <td scope="col" class="px-6 py-4">10</td>
              <td scope="col" class="px-6 py-4">1.1</td>
            </tr>
            <tr class="text-center">
              <th scope="col" colspan="2" class="px-6 py-4">Umumiy ball</th>
              <th scope="col" colspan="2" class="px-6 py-4">153</th>
            </tr>
            <tr class="border text-primary-900">
              <th scope="col" colspan="2" class="px-6 py-4">
                5ta bo'yicha umumiy ball:
              </th>
              <th scope="col" colspan="2" class="px-6 py-4 text-end">189</th>
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
