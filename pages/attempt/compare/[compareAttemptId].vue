<template>
  <div class="py-8">
    <div class="container">
      <div
        class="border rounded-full text-center mx-auto mb-6 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]"
        style="max-width: 250px; font-size: xx-large; font-size: xx-large"
      >
        <span>60,2 </span>
        <span style="font-size: large">/189</span>
      </div>
      <p class="text-base font-semibold text-center max-w-[800px] mx-auto mb-6">
        O'tgan yilgi turdosh yo'nalishlar bo'yicha o'tish ballari va siz
        to'plagan ballga nisbatatan solishtirish natijasi
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-2 mb-6">
        <app-button
          color="light"
          variant="tertiary"
          class="rounded-none w-full sm:w-auto"
        >
          Barchasi: 900
        </app-button>
        <app-button
          color="secondary"
          variant="tertiary"
          class="rounded-none w-full sm:w-auto"
        >
          Grand: 500
        </app-button>
        <app-button
          color="warning"
          variant="tertiary"
          class="rounded-none w-full sm:w-auto"
        >
          Kontrakt: 100
        </app-button>
      </div>

      <div
        class="shadow mb-4 p-4 gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <AppInput
          inputName="search"
          v-model="search"
          label="Nom bo'yicha qidirish"
        />
        <AppSelect
          optionLabel="Viloyatni tanlang"
          :options="cities"
          :selectedValue="selectedCity"
          @update:selectedValue="updateSelectedCity"
        />
        <AppSelect
          optionLabel="Oliygohni tanlang"
          :options="cities"
          :selectedValue="selectedCity"
          @update:selectedValue="updateSelectedCity"
        />
        <AppSelect
          optionLabel="Ta'lim yo'nalishini tanlang"
          :options="cities"
          :selectedValue="selectedCity"
          @update:selectedValue="updateSelectedCity"
        />
        <AppSelect
          optionLabel="Ta'lim shakli"
          :options="cities"
          :selectedValue="selectedCity"
          @update:selectedValue="updateSelectedCity"
        />
        <div class="card flex justify-content-center"></div>
      </div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right">
          <thead>
            <tr class="border-b">
              <th scope="col" class="px-6 py-4">Viloyat</th>
              <th scope="col" class="px-6 py-4">Oliygoh</th>
              <th scope="col" class="px-6 py-4">Yo'nalish</th>
              <th scope="col" class="px-6 py-4">Ta'lim shakli</th>
              <th scope="col" class="px-6 py-4">Grant</th>
              <th scope="col" class="px-6 py-4">Kontrakt</th>
              <th scope="col" class="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b hover:bg-gray-100 transition-all duration-300"
            >
              <td class="px-6 py-4">Toshkent shahri</td>
              <td class="px-6 py-4">
                Toshkent davlat iqtisodiyot universiteti
              </td>
              <td class="px-6 py-4">
                Biznesni boshqarish (tarmoqlar bo'yicha)
              </td>
              <td class="px-6 py-4">Kunduzgi</td>
              <td class="px-6 py-4">160,5</td>
              <td class="px-6 py-4">127,5</td>
              <td class="px-6 py-4">
                <span class="font-semibold text-danger">Yiqildi</span>
              </td>
            </tr>
            <tr
              class="bg-white border-b hover:bg-gray-100 transition-all duration-300"
            >
              <td class="px-6 py-4">Toshkent shahri</td>
              <td class="px-6 py-4">
                Toshkent davlat iqtisodiyot universiteti
              </td>
              <td class="px-6 py-4">
                Biznesni boshqarish (tarmoqlar bo'yicha)
              </td>
              <td class="px-6 py-4">Kunduzgi</td>
              <td class="px-6 py-4">160,5</td>
              <td class="px-6 py-4">127,5</td>
              <td class="px-6 py-4">
                <span class="font-semibold text-warning">Kontrakt</span>
              </td>
            </tr>
            <tr
              class="bg-white border-b hover:bg-gray-100 transition-all duration-300"
            >
              <td class="px-6 py-4">Toshkent shahri</td>
              <td class="px-6 py-4">
                Toshkent davlat iqtisodiyot universiteti
              </td>
              <td class="px-6 py-4">
                Biznesni boshqarish (tarmoqlar bo'yicha)
              </td>
              <td class="px-6 py-4">Kunduzgi</td>
              <td class="px-6 py-4">160,5</td>
              <td class="px-6 py-4">127,5</td>
              <td class="px-6 py-4">
                <span class="font-semibold text-secondary">Grant</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from "@/components/shared-components/AppButton";
import AppInput from "@/components/shared-components/AppInput";
import AppSelect from "@/components/shared-components/AppSelect.vue";

import { ref, onMounted } from "vue";

const search = ref("");
let selectedCity = ref("");
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
const updateSelectedCity = (newValue) => {
  selectedCity.value = newValue;
};

onMounted(() => {});
</script>

<style lang="scss" scoped></style>
