<template>
  <div class="container">
    <div class="playCategory-padding"></div>

    <div class="main-top-div text-center">
      <h1><b>Categories</b></h1>
      <p class="text-spacing5">Very soon!
      </p>
    </div>
  </div>
</template>

<style scoped>

.container {
  height: 70vh;
}

.playCategory-padding { /* telefonda böyle olsun */
  padding-top: 300px;
}

@media (max-width: 768px) { /* bilgisayarda */
  .playCategory-padding {
    padding-top: 200px;
  }
}

</style>