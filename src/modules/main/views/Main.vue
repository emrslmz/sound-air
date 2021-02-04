<template>
  <div class="main-body">
    <the-header />
    <the-side-bar />
    <router-view />
    <main-area />
    <div class="main-footer">
      <the-footer />
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/layouts/TheHeader.vue';
import TheFooter from '../components/layouts/TheFooter.vue';
import TheSideBar from '../components/layouts/TheSideBar.vue';
import MainArea from '../components/MainArea.vue';

export default {
  name: 'Main',
  components: {
    TheHeader,
    TheFooter,
    TheSideBar,
    MainArea
  }
}
</script>

<style scoped>
.main-body {
  background-color: #fcfaf7;
  width: 100%;
  height: 100vh;
}

.main-footer {
  display: inline;
}

@media (min-width: 768px) {
  .main-footer {
    display: none;
    position: relative;
  }
}
</style>