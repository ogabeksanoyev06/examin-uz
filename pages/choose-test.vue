<template>
  <section
    class="choose-test py-8 bg-[url(https://www.fozilov.uz/assets/Light.png)] bg-[length:200px_200px]"
  >
    <div class="container">
      <div class="flex flex-col items-center justify-center">
        <h1
          class="text-center text-2xl font-bold text-gray-900 sm:text-4xl mb-4"
        >
          Abiturientlar va o'quvchilar uchun test topshirish tizimi
        </h1>
        <p class="text-center text-sm mb-6">
          DTM talablari asosida tuzilgan 40 000 ta test savollaridan foydalangan
          holda test topshirish imkoni
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5">
        <div data-aos="fade-up">
          <div
            class="flex flex-col gap-4 shadow bg-white rounded border p-6 sm:p-8 transition-all duration-500 hover:shadow-none"
          >
            <p class="text-xl font-semibold">Online testlar</p>
            <p class="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, ad
              iste! Minus, adipisci voluptate quos soluta repellat laudantium
              delectus architecto et neque. Dolorem, vel sit facere alias
              architecto harum ipsum!
            </p>
            <div class="flex flex-col sm:flex-row sm:justify-between gap-2">
              <AppButton
                color="primary"
                variant="tertiary"
                @click="startTest(1)"
              >
                Testni boshlash
              </AppButton>
              <AppButton color="secondary" variant="tertiary">
                Hisobni to'ldirish
              </AppButton>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="300">
          <div
            class="flex flex-col gap-4 shadow bg-white rounded border p-6 sm:p-8 transition-all duration-500 hover:shadow-none"
          >
            <p class="text-xl font-semibold">Blok testlar</p>
            <p class="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, ad
              iste! Minus, adipisci voluptate quos soluta repellat laudantium
              delectus architecto et neque. Dolorem, vel sit facere alias
              architecto harum ipsum!
            </p>
            <div class="flex flex-col sm:flex-row sm:justify-between gap-2">
              <AppButton
                color="primary"
                variant="tertiary"
                @click="startTest(2)"
              >
                Testni boshlash
              </AppButton>
              <AppButton color="secondary" variant="tertiary">
                Hisobni to'ldirish
              </AppButton>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="600">
          <div
            class="flex flex-col gap-4 shadow bg-white rounded border p-6 sm:p-8 transition-all duration-500 hover:shadow-none"
          >
            <p class="text-xl font-semibold">
              Maktab o'quvchilari uchun testlar
            </p>
            <p class="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, ad
              iste! Minus, adipisci voluptate quos soluta repellat laudantium
              delectus architecto et neque. Dolorem, vel sit facere alias
              architecto harum ipsum!
            </p>
            <div class="flex flex-col sm:flex-row sm:justify-between gap-2">
              <AppButton
                color="primary"
                variant="tertiary"
                @click="startTest(3)"
              >
                Testni boshlash
              </AppButton>
              <AppButton color="secondary" variant="tertiary">
                Hisobni to'ldirish
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppButton from '../components/shared-components/AppButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const startTest = (type) => {
  switch (type) {
    case 1:
      startOnlineTest();
      break;
    case 2:
      startBlockTest();
      break;
    case 3:
      startClassTest();
      break;
    default:
      return null;
  }
};

const startOnlineTest = () => {
  router.push({ path: `/online-test` });
};

const startBlockTest = () => {
  router.push({ path: `/block-test` });
};

const startClassTest = () => {
  router.push({ path: `/school-test` });
};
</script>
