<template>
  <div class="all-results py-8">
    <div class="container">
      <div class="flex flex-col text-center gap-2 mb-8">
        <h4 class="text-lg font-semibold text-primary">Mening urunishlarim</h4>
        <p class="text-base font-medium">Urinishlar soni: 17</p>
      </div>
      <div class="relative rounded-tl rounded-tr overflow-x-auto">
        <transition name="table">
          <table
            class="w-full text-sm text-left rtl:text-right"
            v-if="currentTab === 1"
          >
            <thead class="border-b">
              <tr>
                <th scope="col" class="p-4">#</th>
                <th scope="col" class="p-4">Sana va vaqt</th>
                <th scope="col" class="p-4">Test turi</th>
                <th scope="col" class="p-4">To'plangan ball</th>
                <th scope="col" class="p-4">Ko'rish</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b hover:bg-gray-100 transition-all duration-300"
                v-for="(item, i) in 6"
                :key="item"
              >
                <td class="p-4 font-semibold">
                  {{ i }}
                </td>
                <td class="p-4">18.11.2023 10:19 - 11:15</td>

                <td class="p-4">DTM</td>
                <td class="p-4">70.7</td>
                <td class="p-4">
                  <span
                    class="flex items-center gap-1 cursor-pointer text-primary-700 hover:text-primary-800 transition-all"
                    @click="goToLink(i)"
                  >
                    Ko'rish
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5"
                    >
                      <path
                        d="M10 12.3252C10 12.8556 10.2107 13.3643 10.5858 13.7394C10.9609 14.1145 11.4696 14.3252 12 14.3252C12.5304 14.3252 13.0391 14.1145 13.4142 13.7394C13.7893 13.3643 14 12.8556 14 12.3252C14 11.7948 13.7893 11.2861 13.4142 10.911C13.0391 10.5359 12.5304 10.3252 12 10.3252C11.4696 10.3252 10.9609 10.5359 10.5858 10.911C10.2107 11.2861 10 11.7948 10 12.3252Z"
                        stroke="#3061af"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 12.3252C18.6 16.3252 15.6 18.3252 12 18.3252C8.4 18.3252 5.4 16.3252 3 12.3252C5.4 8.3252 8.4 6.3252 12 6.3252C15.6 6.3252 18.6 8.3252 21 12.3252Z"
                        stroke="#3061af"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </td>
              </tr>
              <tr
                class="bg-white border-b hover:bg-gray-100 transition-all duration-300"
              >
                <td class="p-4 text-center font-semibold" colspan="5">
                  Ma'lumot topilmadi
                </td>
              </tr>
            </tbody>
          </table>
        </transition>
        <transition name="table">
          <table
            class="w-full text-sm text-left rtl:text-right"
            v-if="currentTab === 2"
          >
            <thead class="text-white uppercase bg-primary">
              <tr>
                <th scope="col" class="p-4">#</th>
                <th scope="col" class="p-4">Fan</th>
                <th scope="col" class="p-4">Sana</th>
                <th scope="col" class="p-4">Vaqt</th>
                <th scope="col" class="p-4">Soni</th>
                <th scope="col" class="p-4">To'g'rilar</th>
                <th scope="col" class="p-4">Xatolar</th>
                <th scope="col" class="p-4">Ball</th>
                <th scope="col" class="p-4">Ko'rish</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b hover:bg-gray-100 transition-all duration-300"
                v-for="(item, i) in 6"
                :key="item"
              >
                <td class="p-4">
                  {{ i }}
                </td>
                <td class="p-4">Matematika</td>
                <td class="p-4">18.11.2023</td>
                <td class="p-4">10:19 11:15</td>
                <td class="p-4">10</td>
                <td class="p-4">7</td>
                <td class="p-4">3</td>
                <td class="p-4">50</td>
                <td class="p-4">
                  <AppButton
                    size="sm"
                    variant="ghost"
                    color="primary"
                    @click="goToLink(i)"
                  >
                    Ko'rish
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5"
                    >
                      <path
                        d="M10 12.3252C10 12.8556 10.2107 13.3643 10.5858 13.7394C10.9609 14.1145 11.4696 14.3252 12 14.3252C12.5304 14.3252 13.0391 14.1145 13.4142 13.7394C13.7893 13.3643 14 12.8556 14 12.3252C14 11.7948 13.7893 11.2861 13.4142 10.911C13.0391 10.5359 12.5304 10.3252 12 10.3252C11.4696 10.3252 10.9609 10.5359 10.5858 10.911C10.2107 11.2861 10 11.7948 10 12.3252Z"
                        stroke="#3061af"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 12.3252C18.6 16.3252 15.6 18.3252 12 18.3252C8.4 18.3252 5.4 16.3252 3 12.3252C5.4 8.3252 8.4 6.3252 12 6.3252C15.6 6.3252 18.6 8.3252 21 12.3252Z"
                        stroke="#3061af"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </AppButton>
                </td>
              </tr>
            </tbody>
          </table>
        </transition>
      </div>
      <div
        class="flex items-center justify-center flex-col sm:flex-row sm:justify-between mt-8 gap-4"
      >
        <p>
          <span class="font-semibold">17</span> yozuvdan 1 dan 10 gacha
          ko'rsatilmoqda
        </p>
        <p>Pagination</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from '~/components/shared-components/AppButton.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const currentTab = ref(1);
const router = useRouter();
const goToLink = (index) => {
  router.push({ path: `/attempt/rating/${index}` });
};
</script>

<style lang="scss" scoped>
.table-enter-active,
.table-leave-active {
  transition: all 0.5s;
}
.table-enter-from,
.table-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.tab::-webkit-scrollbar {
  height: 0;
}
</style>
