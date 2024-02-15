<template>
  <section class="py-6 sm:py-12">
    <div class="container">
      <div class="grid items-center grid-cols-1 md:grid-cols-2 gap-10">
        <div :class="{ 'md:order-last': order }" data-aos="fade-up">
          <p
            class="text-base sm:text-xl uppercase text-secondary-700 mb-4 font-bold"
          >
            {{ props.name }}
          </p>
          <h5 class="text-3xl sm:text-4xl mb-6 text-gray font-semibold">
            {{ props.title }}
          </h5>
          <p class="text-base text-gray">
            {{ props.text }}
          </p>
        </div>
        <div :class="order ? 'md:mr-auto' : 'md:ml-auto'" data-aos="fade-up">
          <img
            src="https://ipro-five.vercel.app/img/news/img-1.jpg"
            alt=""
            class="rounded max-w-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  title: String,
  name: String,
  text: String,
  order: {
    type: Boolean,
    default: false,
  },
});
</script>
