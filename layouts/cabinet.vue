<template>
  <div>
    <AppHeader />
    <main class="min-h-[calc(100vh-64px)] py-8">
      <div class="container">
        <div
          class="bg-white pt-6 pl-6 pr-0 rounded-2xl shadow-[rgba(0,0,0,0.16)_0px_1px_4px] mb-8"
        >
          <div class="flex justify-between items-start">
            <div class="flex items-start flex-wrap gap-3">
              <div
                class="rounded-full relative overflow-hidden shrink-0 before:border-[2px] before:border-solid before:border-white-100 before:opacity-70 before:absolute before:w-full before:h-full before:rounded-full w-10 h-10 sm:!w-16 sm:!h-16"
              >
                <div class="h-full">
                  <div
                    class="flex items-center justify-center text-white h-full w-full object-cover text-base sm:!text-2xl bg-primary-900"
                  >
                    OS
                  </div>
                </div>
              </div>
              <div>
                <h2
                  class="text-primary-800 text-xl sm:text-2xl font-bold mb-1"
                  style="word-break: break-word"
                >
                  Og'abek Sanoyev
                </h2>
                <p class="text-gray text-base font-medium">+998 930819140</p>
              </div>
            </div>
            <button
              class="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center mr-6 group shrink-0"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="group-hover:rotate-180 transition-all duration-300"
              >
                <path
                  class="group-hover:stroke-primary transition-all duration-300"
                  d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                  stroke="#121C25"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  class="group-hover:stroke-primary transition-all duration-300"
                  d="M1.66699 10.7334V9.26669C1.66699 8.40003 2.37533 7.68336 3.25033 7.68336C4.75866 7.68336 5.37533 6.6167 4.61699 5.30836C4.18366 4.55836 4.44199 3.58336 5.20033 3.15003L6.64199 2.32503C7.30033 1.93336 8.15033 2.1667 8.54199 2.82503L8.63366 2.98336C9.38366 4.2917 10.617 4.2917 11.3753 2.98336L11.467 2.82503C11.8587 2.1667 12.7087 1.93336 13.367 2.32503L14.8087 3.15003C15.567 3.58336 15.8253 4.55836 15.392 5.30836C14.6337 6.6167 15.2503 7.68336 16.7587 7.68336C17.6253 7.68336 18.342 8.39169 18.342 9.26669V10.7334C18.342 11.6 17.6337 12.3167 16.7587 12.3167C15.2503 12.3167 14.6337 13.3834 15.392 14.6917C15.8253 15.45 15.567 16.4167 14.8087 16.85L13.367 17.675C12.7087 18.0667 11.8587 17.8334 11.467 17.175L11.3753 17.0167C10.6253 15.7084 9.39199 15.7084 8.63366 17.0167L8.54199 17.175C8.15033 17.8334 7.30033 18.0667 6.64199 17.675L5.20033 16.85C4.44199 16.4167 4.18366 15.4417 4.61699 14.6917C5.37533 13.3834 4.75866 12.3167 3.25033 12.3167C2.37533 12.3167 1.66699 11.6 1.66699 10.7334Z"
                  stroke="#121C25"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <nav class="border-t mt-5">
            <div class="relative overflow-hidden py-2">
              <div class="flex gap-6 overflow-y-auto mini-x-scroll">
                <button
                  class="!pt-2 text-gray-700 py-2 rounded-sm transition-all hover:text-[#25121C] leading-130 text-sm font-medium z-10 flex items-center gap-1 shrink-0"
                  v-for="(item, i) in menu"
                  :key="i"
                  :id="i + 1"
                  @click="highlightButton(i + 1), goToLink(item.path)"
                  :class="{ '!text-primary': currentRoute === item.path }"
                >
                  {{ item.title }}
                </button>
              </div>
              <div
                ref="highlighter"
                class="absolute h-[3px] bg-primary left-0 bottom-0 rounded-t-md transition-all duration-500"
              />
            </div>
          </nav>
        </div>
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import AppHeader from '~/components/layouts/default/header/AppHeader.vue';
import { ref, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const currentRoute = ref('');
const highlighter = ref(null);

const menu = ref([
  {
    title: 'Asosiy malumotlar',
    path: 'profile',
  },
  {
    title: 'Hisobni to`ldirish',
    path: 'profile-top-up-balance',
  },
  {
    title: 'To`lovlar tarixi',
    path: 'profile-payment-history',
  },
  {
    title: 'Test natijalari',
    path: 'profile-tests-results',
  },
]);

const highlightButton = (id) => {
  const button = document.getElementById(id);
  const buttonPosition = button.getBoundingClientRect();

  const container = document.querySelector('.mini-x-scroll');
  const containerPosition = container.getBoundingClientRect();

  const buttonLeftRelativeToContainer =
    buttonPosition.left - containerPosition.left;

  if (highlighter.value) {
    highlighter.value.style.width = `${buttonPosition.width}px`;
    highlighter.value.style.transform = `translateX(${buttonLeftRelativeToContainer}px)`;
  }
};

const goToLink = (path) => {
  router.push({ name: path });
};

const updateActiveButton = () => {
  currentRoute.value = route.name;
  const activeButton = menu.value.find(
    (item) => item.path === currentRoute.value
  );
  if (activeButton) {
    const id = menu.value.indexOf(activeButton) + 1;
    highlightButton(id);
  }
};

watch(route, updateActiveButton);

onMounted(updateActiveButton);
</script>
<style>
.mini-x-scroll::-webkit-scrollbar {
  height: 0;
}
</style>
