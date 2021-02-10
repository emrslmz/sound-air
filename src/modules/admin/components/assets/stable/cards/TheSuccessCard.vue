<template>
<div align="center">
  <div class=" text-white bg-success">
    <div class="py-2">
      <b><i class="far fa-check-circle"></i> </b> {{ text }}
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

