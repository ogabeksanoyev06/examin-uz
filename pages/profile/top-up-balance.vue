<template>
  <div class="top-up-balance">
    <h4 class="text-xl sm:text-2xl font-semibold mb-4">
      To'lov turini tanlang
    </h4>

    <div
      class="inline-flex flex-wrap items-center gap-5 max-w-[250px] cursor-pointer border rounded-lg p-4 transition-all duration-300 hover:shadow hover:border-white"
      :class="{ '!border-primary-800': selectedPaymentType === 1 }"
      @click="paymentSelect(1)"
    >
      <img src="/assets/svg/payme.svg" alt="" />
      <p class="text-base font-bold">PayMe</p>
    </div>

    <div class="flex flex-col gap-5 max-w-[450px] border rounded-lg p-5 mt-5">
      <p class="text-sm text-gray-500">
        Hisobni to'ldirish uchun kerakli miqdorni kiriting va to'lovni amalga
        oshirish tugmasini bosing. Minimal to'lov - 1000 so'm
      </p>
      <AppInput
        v-model="paymentAmount"
        placeholder="Summani kiriting"
        @keypress="isNumber($event)"
      />
      <AppButton
        @click="createPayment"
        color="secondary"
        class="w-fit"
        :disabled="paymentAmount <= 4999 || paymentAmount === null"
      >
        Hisobni to'ldirish
      </AppButton>
    </div>
  </div>
</template>

<script setup>
import AppInput from "../../components/shared-components/AppInput.vue";
import AppButton from "../../components/shared-components/AppButton.vue";
import { ref } from "vue";

const selectedPaymentType = ref(1);
const paymentAmount = ref(null);

const paymentSelect = (paymentType) => {
  selectedPaymentType.value = paymentType;
};
const isNumber = (evt) => {
  evt = evt ? evt : window.event;
  let charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
    evt.preventDefault();
  } else {
    return true;
  }
};
const createPayment = () => {
  console.log("sasas");
};

definePageMeta({
  layout: "cabinet",
});
</script>

<style lang="scss" scoped></style>
