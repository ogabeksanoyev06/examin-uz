<template>
  <div class="test py-8">
    <div class="sm:container">
      <div class="flex flex-col gap-4">
        <div
          class="flex justify-center items-center flex-col md:!flex-row md:!justify-between gap-2 p-4 shadow-[rgba(0,0,0,0.16)_0px_1px_4px]"
        >
          <span class="text-base font-bold text-center">
            Ona tili (majburiy)
          </span>
          <span
            class="bg-secondary-100 max-w-[150px] w-full text-center text-2xl rounded text-secondary p-1"
          >
            03:25:32
          </span>
        </div>
        <div class="p-4 shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
          <div class="flex flex-col">
            <div id="question" class="mb-4">
              <span id="question_number" class="text-base font-semibold"
                >1.</span
              >
              <span id="question_text" class="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                consectetur hic harum atque esse molestias corporis. Quo ea
                commodi nesciunt nostrum laboriosam deleniti, eos
                necessitatibus, laborum, tempora quis cupiditate reiciendis
                animi iusto fugit eveniet aut amet! Eum accusantium quis
                perferendis! Obcaecati hic ea doloremque temporibus molestias
                voluptatem sapiente, nam odio libero, consequuntur magni dolores
                a quos nostrum aliquam dolorum blanditiis quia, maiores cumque
                alias. Nesciunt iusto eaque ad magni ex veniam expedita porro
                voluptatibus ipsum sunt harum sequi rerum corporis perspiciatis
                a, non ullam ea. Illo amet quaerat minima rerum atque! Delectus
                unde explicabo recusandae excepturi repellendus. Maxime,
                aspernatur. Deleniti similique iste porro debitis aperiam dolor
                excepturi assumenda iusto, corporis nemo repellat? Dicta sunt
                nobis, illum reprehenderit voluptatibus dolorem culpa officia
                explicabo ab. Animi mollitia quae quisquam nulla dicta
                provident, nemo accusamus iusto assumenda vel quam quas amet,
                deserunt exercitationem eligendi consectetur similique
                dignissimos sapiente obcaecati ipsa illo aspernatur? Reiciendis
                omnis architecto debitis quae repudiandae aut quasi mollitia
                natus ad, accusamus odit non vitae, dolores soluta dignissimos
                doloribus! Vero ipsum ea sit architecto magnam quo tenetur odio
                quis beatae ab, iure, eum fugit. Aliquid a explicabo, commodi
                illo magnam ratione consectetur debitis atque tempore, fugit,
                voluptatum eum? Provident, laborum deserunt.
              </span>
            </div>
            <ul id="answers" class="flex flex-col gap-2 w-fit">
              <li
                class="text-sm cursor-pointer border rounded flex items-start gap-1 p-3 hover:bg-gray-100 transition-all duration-300 group"
                v-for="item in 3"
                :key="item"
              >
                <span class="font-semibold">A)</span>
                <span class="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  suscipit ad odit iste quaerat iure officia velit eveniet
                  dolorum ex.
                </span>
              </li>
              <li
                class="text-sm cursor-pointer border border-secondary-100 text-secondary bg-secondary-50 rounded flex items-start gap-1 p-3 transition-all duration-300 group"
              >
                <span class="font-bold">A)</span>
                <span class="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  suscipit ad odit iste quaerat iure officia velit eveniet
                  dolorum ex.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="p-4 shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
          <ul class="pagination-list flex flex-wrap gap-2 justify-center">
            <li
              v-for="(item, index) in 90"
              :key="index"
              class="flex items-center justify-center text-sm font-medium w-8 h-8 rounded border hover:bg-[#f1f5f9] hover:text-[#475569] cursor-pointer transition-all duration-300"
            >
              {{ index + 1 }}
            </li>
            <li
              class="flex items-center justify-center text-sm font-medium w-8 h-8 rounded border border-secondary-100 bg-secondary-50 text-secondary-700 cursor-pointer transition-all duration-300"
            >
              91
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
