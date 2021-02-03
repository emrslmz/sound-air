<template>
  <div class="home-page-body">
    <the-header />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './layouts/TheHeader.vue';
export default {
  name: 'HomePage',
  components: {
    TheHeader
  }
}
</script>


<style scoped>
.home-page-body {
  background-color: #FBF9F6;
  height: 100vh;
  width: 100%;
}
</style>