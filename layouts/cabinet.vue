<template>
  <div>
    <AppHeader />
    <main class="min-h-[calc(100vh-64px)] py-8">
      <div class="container">
        <div
          class="bg-white pt-3 px-3 sm:pt-6 sm:px-6 rounded-2xl shadow-[rgba(0,0,0,0.16)_0px_1px_4px] mb-8"
        >
          <div
            class="flex justify-between items-center flex-wrap gap-5 bg-[url(https://www.fozilov.uz/assets/Light.png)] bg-[length:200px_200px]"
          >
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
                  {{ user.username }}
                </h2>
                <p class="text-gray text-base font-medium">+{{ user.phone }}</p>
              </div>
            </div>
            <div>
              <h2
                class="text-primary-800 text-xl sm:text-2xl font-bold mb-1"
                style="word-break: break-word"
              >
                Mening hisobim
              </h2>
              <p class="text-gray text-base font-medium">
                {{ user.balance }} so'm
              </p>
            </div>
            <div>
              <h2
                class="text-primary-800 text-xl sm:text-2xl font-bold mb-1"
                style="word-break: break-word"
              >
                Mening maqomim
              </h2>
              <p class="text-gray text-base font-medium">O'quvchi</p>
            </div>
          </div>
          <nav class="border-t mt-5">
            <div class="relative overflow-hidden py-2">
              <div class="flex gap-6 overflow-y-auto mini-x-scroll">
                <button
                  class="!pt-2 text-gray-700 py-2 rounded-sm transition-all hover:text-[#25121C] leading-130 text-sm font-medium z-10 flex items-center gap-1 shrink-0"
                  v-for="(item, i) in menu"
                  :key="i"
                  :id="i + 1"
                  @click="highlightButton(i + 1), goToLink(item.name)"
                  :class="{ '!text-primary': currentRoute === item.name }"
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
import { profileService } from '~/services/profileService';

const router = useRouter();
const route = useRoute();

const currentRoute = ref('');
const highlighter = ref({});

const menu = ref([
  {
    title: 'Asosiy malumotlar',
    name: 'profile',
  },
  {
    title: 'Hisobni to`ldirish',
    name: 'profile-top-up-balance',
  },
  {
    title: 'To`lovlar tarixi',
    name: 'profile-payment-history',
  },
  {
    title: 'Test natijalari',
    name: 'profile-tests-results',
  },
]);

const user = ref({});

const loading = ref(false);

const highlightButton = (id) => {
  const button = document.getElementById(id);
  const container = document.querySelector('.mini-x-scroll');

  if (button && container) {
    const buttonPosition = button.getBoundingClientRect();
    const containerPosition = container.getBoundingClientRect();

    const buttonLeftRelativeToContainer =
      buttonPosition.left - containerPosition.left;

    if (highlighter.value) {
      highlighter.value.style.width = `${buttonPosition.width}px`;
      highlighter.value.style.transform = `translateX(${buttonLeftRelativeToContainer}px)`;
    }
  }
};

const goToLink = (name) => {
  router.push({ name: name });
};

const updateActiveButton = () => {
  currentRoute.value = route.name;
  const activeButton = menu.value.find(
    (item) => item.name === currentRoute.value
  );
  if (activeButton) {
    const id = menu.value.indexOf(activeButton) + 1;
    highlightButton(id);
  }
};

async function getUser() {
  loading.value = true;
  try {
    const response = await profileService.user();
    user.value = response;
    console.log(response, 'sasa');
  } catch (error) {
    console.error('Error fetching user:', error);
  } finally {
    loading.value = false;
  }
}

watch(route, updateActiveButton);

onMounted(() => {
  updateActiveButton();
  getUser();
});
</script>
<style>
.mini-x-scroll::-webkit-scrollbar {
  height: 0;
}
</style>
