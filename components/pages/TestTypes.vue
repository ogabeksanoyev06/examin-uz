<template>
  <section class="bg-gray-100 py-10 sm:py-16 mb-6">
    <div class="container">
      <div class="text-center flex flex-col items-center">
        <h1
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          data-aos="fade-up"
        >
          O'z bilimingizni <span class="text-primary">iTestify</span> bilan
          sinab ko'ring.
        </h1>
        <p class="mt-4 text-lg text-gray-600 max-w-[600px]" data-aos="fade-up">
          iTestify sizning bilim talablaringizga qarab moslasha oladi, bu xoh
          tabiiy fanlar bo'lsin, xoh aniq fanlar.
        </p>
      </div>
      <div class="mt-10">
        <div
          class="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <div
            v-for="(item, i) in 6"
            :key="i"
            data-aos="fade-up"
            :data-aos-duration="(i + 1) * 100"
          >
            <div class="bg-white border rounded p-6 box relative z-[0]">
              <img
                src="https://primefaces.org/cdn/primevue/images/landing/features/icon-components.svg"
                alt="components icon"
                class="block mb-3"
              />
              <p class="text-lg font-semibold mb-3">Online test</p>
              <p class="text-base font-medium text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cumque, atque?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "TestTypes",
};
</script>
<style scoped>
.box {
  box-shadow: 0px 7px 15px 0px rgba(0, 0, 0, 0.02),
    0px 28px 28px 0px rgba(0, 0, 0, 0.02), 0px 63px 38px 0px rgba(0, 0, 0, 0.01);
}
.box:after,
.box:before {
  animation: clippath 3s linear infinite;
  border: 2px solid var(--blue-600);
  border-radius: 4px;
  bottom: -2px;
  content: "";
  left: -2px;
  opacity: 0;
  position: absolute;
  right: -2px;
  top: -2px;
  transition: all 0.5s;
  z-index: -1;
}
.box:hover::after,
.box:hover::before {
  opacity: 1;
}
.box:after {
  animation: clippath 3s linear -1.5s infinite;
}
@keyframes clippath {
  0%,
  100% {
    -webkit-clip-path: inset(0 0 98% 0);
    clip-path: inset(0 0 98% 0);
  }

  25% {
    -webkit-clip-path: inset(0 98% 0 0);
    clip-path: inset(0 98% 0 0);
  }
  50% {
    -webkit-clip-path: inset(98% 0 0 0);
    clip-path: inset(98% 0 0 0);
  }
  75% {
    -webkit-clip-path: inset(0 0 0 98%);
    clip-path: inset(0 0 0 98%);
  }
}
</style>
