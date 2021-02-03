<template>
  <div>
    <home-page />
    <admin-page />
  </div>
</template>

<script>
import homePage from './components/main/homePage.vue';
import adminPage from './components/admin/adminPage.vue';

export default {
  name: 'App',
  components: {
    homePage,
    adminPage
  }
}
</script>
