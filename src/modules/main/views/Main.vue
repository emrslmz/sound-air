<template>
  <div class="main-body">
    <the-header />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '../components/layouts/TheHeader.vue';
import TheFooter from '../components/layouts/TheFooter.vue';

export default {
  name: 'Main',
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>

<style scoped>
.main-body {
  background-color: #fcfaf7;
  width: 100%;
  height: 100vh;
}
</style>