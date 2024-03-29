<template>
  <div class="base-input w-full">
    <div class="flex flex-col gap-1">
      <label
        class="label-text text-xs text-left font-medium peer-disabled:cursor-not-allowed"
        v-if="label"
        :for="inputName"
      >
        {{ label }}
        <span class="text-danger" v-if="required">*</span>
      </label>
      <VField
        :name="inputName"
        :rules="rules"
        :modelValue="modelValue"
        v-slot="{ errors }"
      >
        <div class="flex flex-col items-start w-full gap-1 relative">
          <div class="flex items-stretch relative w-full">
            <div
              class="flex items-center justify-center px-4 py-2 border border-transparent border-gray-200 bg-gray-100 rounded-tl rounded-bl"
              v-if="prependBtn"
            >
              <slot name="prependBtn"></slot>
            </div>
            <input
              v-bind="$attrs"
              :type="inputType"
              :value="modelValue"
              :placeholder="placeholder"
              :name="inputName"
              :id="inputName"
              :disabled="disabled"
              @input="updateValue"
              @keypress="keypPessValue"
              :class="[
                input({ variant }),
                classes,
                {
                  '!border-danger !bg-danger-50   focus:!border-[#dc2626] focus:!shadow-[inset_0_0_0_1px_#dc2626] focus:!bg-white ':
                    errors.length > 0,
                },
              ]"
            />
            <div
              class="absolute top-1/2 -translate-y-1/2 min-w-[2.5rem] h-full flex items-center justify-center right-0 rounded-tr rounded-br cursor-pointer"
              v-if="appendIcon"
            >
              <slot name="appendIcon"></slot>
            </div>
          </div>
          <Transition name="page">
            <span
              class="text-danger text-xs font-medium"
              v-if="errors.length > 0"
            >
              {{ errors[0] }}
            </span>
          </Transition>
        </div>
      </VField>
      <div
        class="flex items-center justify-center p-2 min-w-[2.5rem] border-t border-b border-r border-[#E4E4E7] rounded-br rounded-tr"
        v-if="appendBtn"
      >
        <slot name="append"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { tv } from 'tailwind-variants';

const props = defineProps({
  rules: {},
  hideDetails: {
    type: Boolean,
  },
  inputType: {
    type: String,
    default: 'text',
  },
  inputName: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  label: String,
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => {
      return [
        'primary',
        'appendIcon',
        'appendBtn',
        'prependIcon',
        'prependBtn',
      ].includes(value);
    },
  },
  rounded: {
    type: Number,
    default: 4,
  },
  required: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
  disabled: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
  appendBtn: {
    type: Boolean,
    default: false,
  },
  appendIcon: {
    type: Boolean,
    default: false,
  },
  prependBtn: {
    type: Boolean,
    default: false,
  },
  prependIcon: {
    type: Boolean,
    default: false,
  },
  classes: String,
});
const input = tv({
  base: `w-full h-10 outline-none appearance-none bg-gray-100  text-sm border
   rounded p-[0.5rem_0.75rem] border-transparent cursor-pointer focus:border-primary focus:border-[#3b71ca] focus:shadow-[inset_0_0_0_1px_#3b71ca] 
 focus:bg-gray-50 disabled:bg-gray-200 disabled:placeholder:text-[#71717A]
  disabled:cursor-not-allowed transition-all ease-in-out duration-300 placeholder:text-black placeholder:text-xs`,
  variants: {
    variant: {},
  },
  compoundVariants: [
    {
      variant: 'primary',
    },
    {
      variant: 'prependBtn',
      class: 'rounded-tl-none rounded-bl-none',
    },
    {
      variant: 'prependIcon',
      class: 'pl-[2.5rem]',
    },
    {
      variant: 'appendBtn',
      class: 'rounded-tr-none rounded-br-none',
    },
    {
      variant: 'appendIcon',
      class: 'pr-[2.5rem]',
    },
  ],
});

const emit = defineEmits(['update:modelValue', 'keypress']);

const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
const keypPessValue = (event) => {
  emit('keypress', event);
};
watch(
  () => props.modelValue,
  (newValue) => {
    return newValue;
  }
);
</script>

<style lang="scss" scoped></style>
