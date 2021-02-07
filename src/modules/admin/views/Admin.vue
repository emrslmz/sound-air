<template>
  <div class="admin-body">
    <the-header />
    <router-view/>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '../components/layouts/TheHeader.vue';
import TheFooter from '../components/layouts/TheFooter.vue';

export default {
  name: 'Admin',
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>

<style scoped>
.admin-body {
  background-color: #191919;
  min-height: 100vh;
  height: auto;
}
</style>