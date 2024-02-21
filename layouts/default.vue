<template>
  <div>
    <AppHeader />
    <main>
      <div>
        <slot />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '../components/layouts/default/footer/AppFooter.vue';
import AppHeader from '../components/layouts/default/header/AppHeader.vue';
export default {
  components: { AppHeader, AppFooter },
};
</script>
