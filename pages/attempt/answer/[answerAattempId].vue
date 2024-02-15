<template>
  <div class="py-8">
    <div class="container">
      <div class="text-center mx-auto mb-8">
        <span
          class="rounded-full shadow-[0px_0px_10px_0px_rgba(100,100,111,1)] px-6 py-2 bg-secondary text-white text-base font-semibold"
        >
          DTM Test natijasi
        </span>
      </div>

      <p
        class="text-[18px] text-center shadow-[0_0px_10px_rgba(0,0,0,.15)] font-bold py-3 px-6 mb-6"
      >
        Ona tili (majburiy)
      </p>
      <div class="flex flex-col gap-3">
        <div
          class="flex flex-col gap-2 shadow-[0_0_5px] rounded shadow-secondary-600 border p-4"
        >
          <div class="question">
            <b id="question_number" class="text-base"> 1. </b>
            <span id="question_text">
              <b class="text-base">
                Bajaruvchisi noma’lum bo‘lgan harakat yoki holatni&nbsp;
                ifodalovchi nisbat shakli……deyiladi.
                <span class="text-red-600">(belgilanmagan)</span>
              </b>
            </span>
          </div>
          <ul class="selected flex flex-col gap-2 font-semibold">
            <li class="text-green-600">A) 0,25</li>
            <li>B) 0,25</li>
            <li>C) 0,25</li>
            <li>D) 0,25</li>
          </ul>
        </div>
        <div
          class="flex flex-col gap-2 shadow-[0_0_5px] rounded border shadow-danger-600 p-4"
        >
          <div class="question">
            <b id="question_number" class="text-base"> 1. </b>
            <span id="question_text">
              <b class="text-base">
                Bajaruvchisi noma’lum bo‘lgan harakat yoki holatni&nbsp;
                ifodalovchi nisbat shakli……deyiladi.
              </b>
            </span>
          </div>
          <ul class="selected flex flex-col gap-2 font-semibold">
            <li class="text-green-600">A) 0,25</li>
            <li class="text-red-600">B) 0,25</li>
            <li>C) 0,25</li>
            <li>D) 0,25</li>
          </ul>
        </div>
      </div>
      <ul class="flex flex-wrap gap-2 mt-8 shadow p-3">
        <li
          class="flex items-center justify-center min-w-8 min-h-8 text-white font-bold rounded cursor-pointer bg-secondary-600"
        >
          <span>1</span>
        </li>
        <li
          class="flex items-center justify-center min-w-8 min-h-8 text-white font-bold rounded cursor-pointer bg-danger-600"
        >
          <span>2</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
