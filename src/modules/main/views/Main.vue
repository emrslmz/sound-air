<template>
  <div class="main-body">
    <the-header />
    <the-side-bar />
    <div class="router-padding-left">
      <router-view />
    </div>
    <div class="main-footer">
      <the-footer />
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/layouts/TheHeader.vue';
import TheFooter from '../components/layouts/TheFooter.vue';
import TheSideBar from '../components/layouts/TheSideBar.vue';

export default {
  name: 'Main',
  components: {
    TheHeader,
    TheFooter,
    TheSideBar,
  }
}
</script>

<style scoped>
.main-body {
  background-color: #e9e9e9;
  width: 100%;
  min-height: 100vh;
}

.router-padding-left {
  padding-left: 300px;
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

@media (max-width: 768px) {
  .router-padding-left {
    padding-left: 0;
  }
}
</style>