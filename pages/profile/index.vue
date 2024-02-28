<template>
  <div class="general-information">
    <h4 class="text-xl sm:text-2xl font-semibold mb-4">Asosiy malumotlar</h4>
    <VForm v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(updateProfile)" class="shadow p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-6">
          <AppInput
            v-model="user.username"
            inputName="username"
            label="Foydalanuvchi nomi"
          />
          <AppInput
            v-model="user.first_name"
            inputName="firstname"
            label="Ism"
          />
          <AppInput
            v-model="user.last_name"
            inputName="lastname"
            label="Familiya"
          />
          <AppInput
            inputName="phone"
            v-model="user.phone"
            label="Telefon raqam"
            :prependBtn="true"
            variant="prependBtn"
          >
            <template #prependBtn>
              <span class="text-sm font-medium pointer-events-none">+998</span>
            </template>
          </AppInput>
          <AppInput
            v-model="user.email"
            inputName="email"
            label="Email"
            rules="email"
          />
          <AppSelect optionLabel="Viloyatni tanlang" />
          <AppSelect optionLabel="Tumanni tanlang" />
          <AppSelect optionLabel="Maktabni tanlang" disabled />
        </div>
        <AppButton
          color="secondary"
          class="w-fit mt-5"
          type="submit"
          :disabled="loading"
        >
          O'zgartirish
        </AppButton>
      </form>
    </VForm>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'cabinet',
});

import { ref } from 'vue';
import { profileService } from '~/services/profileService';
import AppButton from '../../components/shared-components/AppButton.vue';
import AppInput from '../../components/shared-components/AppInput.vue';
import AppSelect from '../../components/shared-components/AppSelect.vue';

const { $toast } = useNuxtApp();

const regions = ref([]);

const districts = ref([]);

const schools = ref([]);

const user = ref({
  username: '',
  first_name: '',
  last_name: '',
  district: 1,
  school: 1,
  type: 'applicant',
  region: null,
  balance: null,
  phone: null,
  email: '',
});
const loading = ref(false);

async function updateProfile() {
  loading.value = true;
  let form = new FormData();
  form.append('username', user.value.username);
  form.append('first_name', user.value.first_name);
  form.append('last_name', user.value.last_name);
  form.append('email', user.value.email);
  form.append('district', 1);
  form.append('school', 1);
  form.append('type', user.value.type);
  form.append('phone', user.value.phone);
  try {
    const res = await profileService.updateProfile(form);
    if (!res.error) {
      user.value = res;
      $toast.success('Profile muvaffaqiyatli o\`zgartirildi');
    }
  } catch (error) {
    $toast.error('Xatolik yuz berdi', error);
  } finally {
    loading.value = false;
  }
}

async function getUser() {
  loading.value = true;
  try {
    const response = await profileService.user();
    user.value = response;
  } catch (error) {
    console.error('Error fetching user:', error);
  } finally {
    loading.value = false;
  }
}

async function getRegions() {
  try {
    const response = await profileService.regions();
    regions.value = response;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}

async function getDistricts() {
  try {
    const response = await profileService.districts(1);
    districts.value = response;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}

async function getSchools() {
  try {
    const response = await profileService.schools(1);
    schools.value = response;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}

onMounted(() => {
  getUser();
  getRegions();
  getDistricts();
  getSchools();
});
</script>

<style lang="scss" scoped></style>
