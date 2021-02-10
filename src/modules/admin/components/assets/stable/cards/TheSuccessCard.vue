<template>
<div align="center">
  <div class="card text-white bg-success">
    <div class="card-body">
      <h5 class="card-title"><b> <i class="far fa-check-circle"></i> </b> {{ text }}</h5>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'SuccessCard',
  props: [
      'text'
  ]
}
</script>

<style scoped>
.bg-success {
  max-width: 400px;
  border-radius: 10px;
}
</style>

