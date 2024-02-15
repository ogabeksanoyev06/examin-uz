<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";
import { tv } from "tailwind-variants";

const props = defineProps({
  type: {
    type: String,
    default: undefined,
  },
  color: {
    type: String as PropType<
      "primary" | "secondary" | "warning" | "error" | "light" | "dark"
    >,
    default: "light",
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as PropType<"primary" | "tertiary" | "ghost">,
    default: "primary",
  },
  block: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
  disabled: {
    type: Boolean,
  },

  size: {
    type: String as PropType<"sm" | "md" | "lg">,
    default: "md",
  },
  shadow: {
    type: [Boolean, String] as PropType<boolean | "sm" | "md" | "lg" | "xl">,
    default: false,
  },
});

const tag = computed(() =>
  props.to ? "nuxt-link" : props.href ? "a" : "button"
);
const btn = tv({
  base: `inline-flex items-center gap-2 justify-center border border-transparent text-center font-medium
    focus:outline-none active:scale-90
    transition duration-300 ease-in-out
    disabled:cursor-not-allowed
    `,
  variants: {
    color: {
      light:
        "bg-white text-gray-800 border-gray-400 hover:bg-gray-100 focus:ring-gray-600 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:bg-gray-200",
      dark: "text-white bg-neutral-800 border-neutral-800 focus:ring-neutral-800 disabled:bg-neutral-500 disabled:text-neutral-300 disabled:border-neutral-500",
      primary:
        "bg-primary-600 border-primary-600 text-white hover:bg-primary-700 focus:ring-primary-600 disabled:bg-primary-400 disabled:text-primary-200 disabled:border-primary-400",
      secondary:
        "bg-secondary-600 border-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-600 disabled:bg-secondary-400 disabled:text-secondary-200 disabled:border-secondary-400",
      warning:
        "bg-yellow-500 border-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500 disabled:bg-yellow-300 disabled:text-yellow-100 disabled:border-yellow-300",
      error:
        "bg-rose-600 border-rose-600 text-white hover:bg-rose-700 focus:ring-rose-600 disabled:bg-rose-400 disabled:text-rose-200 disabled:border-rose-400",
    },
    size: {
      sm: "px-3 py-1 text-sm h-[30px]",
      md: "px-6 py-1.5 text-sm h-[40px]",
      lg: "py-6 px-8 text-base h-[50px]",
    },
    rounded: {
      true: "rounded-full",
      false: "rounded-md",
    },
    variant: {
      primary: "",
      tertiary: "bg-transparent",
      ghost: "bg-transparent border-none",
    },
    shadow: {
      true: "shadow",
      false: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
    },
    block: {
      true: "w-full",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    color: "light",
    rounded: false,
  },
  compoundVariants: [
    // primary
    {
      variant: "tertiary",
      color: "primary",
      class: "text-primary-600  hover:bg-primary-50",
    },
    {
      variant: "ghost",
      color: "primary",
      class: "text-primary-600 hover:bg-primary-100",
    },
    // secondary
    {
      variant: "tertiary",
      color: "secondary",
      class: "text-secondary-600 hover:bg-secondary-50",
    },
    {
      variant: "ghost",
      color: "secondary",
      class: "text-secondary-600 hover:bg-secondary-100",
    },
    // warning
    {
      variant: "tertiary",
      color: "warning",
      class: "text-yellow-600  hover:bg-yellow-50",
    },
    {
      variant: "ghost",
      color: "warning",
      class: "text-yellow-600 hover:bg-yellow-100",
    },
    // error
    {
      variant: "tertiary",
      color: "error",
      class: "text-rose-600 hover:text-white",
    },
    {
      variant: "ghost",
      color: "error",
      class: "text-rose-600 hover:bg-rose-100",
    },
    // light
    {
      variant: "tertiary",
      color: "light",
      class: "text-gray-600 hover:bg-gray-50",
    },
    {
      variant: "ghost",
      color: "light",
      class: "text-gray-800 hover:bg-gray-100",
    },
    // dark
    {
      variant: "tertiary",
      color: "dark",
      class: "text-neutral-800 hover:bg-neutral-800 hover:text-white",
    },
    {
      variant: "ghost",
      color: "dark",
      class: "text-neutral-800 hover:bg-neutral-100",
    },
  ],
});
const emit = defineEmits(["click"]);

const handleClick = () => {
  if (!props.disabled) {
    emit("click");
  }
};
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    :disabled="disabled"
    v-bind="$attrs"
    @click="handleClick"
    :class="
      btn({
        size,
        color,
        rounded,
        variant,
        shadow,
        block,
      })
    "
  >
    <slot />
  </component>
</template>
