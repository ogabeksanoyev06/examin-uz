<script setup>
import { defineEmits, onMounted, watchEffect } from "vue";
defineProps({
  maxWidth: {
    type: String,
    default: "300",
  },
  modalFooter: {
    type: Boolean,
    default: false,
  },
  show: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["close"]);
const closeModal = () => {
  emit("close");
};

onMounted(() => {
  if (document.body) {
    watchEffect(() => {
      if (props.show) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    });
  }
});
</script>

<template>
  <teleport to="body">
    <div
      class="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      v-show="show"
      @click.self="closeModal"
    >
      <div
        class="pointer-events-none relative w-auto translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 opacity-0"
        :style="{ 'max-width': maxWidth }"
        :class="{ 'transform-none opacity-100': show }"
      >
        <div
          class="pointer-events-auto relative flex w-full flex-col rounded-b min-[576px]:rounded border-none bg-white bg-clip-padding text-current outline-none"
        >
          <div
            class="flex flex-shrink-0 items-center justify-between border-b-2 border-neutral-100 border-opacity-100 p-4"
          >
            <h5 class="text-xl font-medium leading-normal text-neutral-800">
              <slot name="header" />
            </h5>
            <button
              type="button"
              class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              @click="closeModal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div class="relative flex-auto p-4">
            <slot name="content" />
          </div>
          <div
            v-if="modalFooter"
            class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="show"
      class="transition-all duration-300 ease-in-out fixed top-0 left-0 z-[1040] bg-black w-screen h-screen"
      :class="show ? 'opacity-50' : 'opacity-0'"
    />
  </teleport>
</template>
