<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
});

const title = "Users";
const description = "";
const image = "";
useSeoMeta({
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: "",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: "summary_large_image",
});
</script>
