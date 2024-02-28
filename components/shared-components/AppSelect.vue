<template>
  <div class="app-dropdown">
    <div class="flex flex-col gap-1">
      <label
        class="label-text text-xs text-left font-medium peer-disabled:cursor-not-allowed"
      >
        {{ optionLabel }}
        <span class="text-danger" v-if="required">*</span>
      </label>
      <div class="relative" v-click-outside="closeDropdown">
        <div
          @click="toggleDropdown"
          :class="[
            'flex',
            'items-center',
            'justify-between',
            'cursor-pointer',
            'px-3',
            'py-2',
            'bg-white',
            'border',
            'rounded',
            'transition-all',
            'ease-in-out',
            'duration-300',
            'h-10',
            {
              'border-[#3b71ca] shadow-[inset_0_0_0_1px_#3b71ca] !bg-gray-50':
                show && !disabled,
              'pointer-events-none !bg-gray-200': disabled,
            },
            classes,
          ]"
        >
          <span class="text-gray text-sm leading-130 truncate">
            <span v-if="!selectedValue">{{ placeholder }}</span>
            {{ selectedValue }}
          </span>
          <span class="flex items-center cursor-pointer">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="transition-all duration-300 ease-in-out"
              aria-hidden="true"
              :class="{ 'rotate-180': show }"
            >
              <path
                d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
                fill="#94a3b8"
              ></path>
            </svg>
          </span>
        </div>
        <transition name="dropdown">
          <div
            class="absolute top-full left-0 w-full bg-white border border-[#e2e8f0] z-10 mt-[2px]"
            v-show="show"
          >
            <div
              class="max-h-[200px] overflow-x-hidden overflow-auto scroll-style"
            >
              <ul class="p-1">
                <li
                  class="flex items-center truncate transition-all duration-200 rounded px-3 py-2 cursor-pointer mt-[2px] first:mt-0 bg-white hover:bg-gray-100"
                  v-for="(item, index) in options"
                  :key="index"
                  :class="[
                    {
                      '!bg-primary-50': item.id === selected,
                    },
                  ]"
                  @click="selectItem(item)"
                >
                  <span
                    class="text-sm font-normal select-none"
                    :class="[
                      {
                        'text-primary  !font-medium': item.id === selected,
                      },
                    ]"
                  >
                    {{ item.name }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  selectedId: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  optionLabel: String,
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  options: Array,
  classes: String,
});
const show = ref(false);
const selected = ref(null);
const selectedValue = ref('');
const emit = defineEmits(['itemSelected']);

const toggleDropdown = () => {
  show.value = !show.value;
  if (!show.value && selected.value !== null) {
    selectedValue.value =
      options.find((option) => option.id === selected.value)?.name ||
      placeholder;
  }
};

const closeDropdown = () => {
  show.value = false;
};

watch(
  () => selected,
  (newValue, oldValue) => {
    if (newValue !== oldValue && newValue !== null) {
      selectedValue.value =
        options.find((option) => option.id === newValue)?.name || placeholder;
    }
  }
);

const selectItem = (item) => {
  selected.value = item.id;
  emit('itemSelected', item);
  selectedValue.value = item.name;
  show.value = false;
};
</script>

<style lang="scss" scoped>
.scroll-style::-webkit-scrollbar {
  width: 3px;
}

.scroll-style::-webkit-scrollbar-thumb {
  background: #8e9ba8;
}
.scroll-style::-webkit-scrollbar-track {
  background: #dce0e4;
}
</style>
