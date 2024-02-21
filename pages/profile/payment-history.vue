<template>
  <div class="payment-history">
    <h4 class="text-xl sm:text-2xl font-semibold mb-4">To'lovlar tarixi</h4>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right">
        <thead>
          <tr class="border-b bg-primary-900 text-white">
            <th scope="col" class="px-6 py-4">#</th>
            <th scope="col" class="px-6 py-4">To'lov turi</th>
            <th scope="col" class="px-6 py-4">To'lov miqdori</th>
            <th scope="col" class="px-6 py-4">Sana</th>
            <th scope="col" class="px-6 py-4">Statusi</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b hover:bg-gray-100 transition-all duration-300"
          >
            <td class="px-6 py-4 font-medium">1</td>
            <td class="px-6 py-4 font-medium">Payme</td>
            <td class="px-6 py-4 font-medium">12 000 so'm</td>
            <td class="px-6 py-4 font-medium">03.04.2024</td>
            <td class="px-6 py-4 font-medium">
              <span class="text-secondary">To'langan</span>
            </td>
          </tr>
          <tr
            class="bg-white border-b hover:bg-gray-100 transition-all duration-300"
          >
            <td class="px-6 py-4 font-medium">1</td>
            <td class="px-6 py-4 font-medium">Payme</td>
            <td class="px-6 py-4 font-medium">12 000 so'm</td>
            <td class="px-6 py-4 font-medium">03.04.2024</td>
            <td class="px-6 py-4 font-medium">
              <span class="text-danger">To'lanmagan</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'cabinet',
});
</script>

<style lang="scss" scoped></style>
