<template>
  <div
    class="relative inline-flex text-left rtl:text-right"
    v-click-outside="closeMenu"
  >
    <div class="inline-flex w-full">
      <span class="">
        <slot name="trigger" :onToggle="toggle"></slot>
      </span>
    </div>

    <transition name="dropdown">
      <div
        v-if="isMenuOpen"
        class="absolute z-50 top-full right-0 mt-2 border bg-white shadow rounded"
      >
        <div
          class=""
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <slot name="content" :closeMenu="closeMenu"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false);

const closeMenu = () => {
  isMenuOpen.value = false;
};

const toggle = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style></style>
