<template>
<div>
  <div class="d-flex justify-content-center align-items-end">
    <div class="alert bg-success card-success text-center fade show" role="alert">
      <h3><i class="fas fa-check"></i></h3>
      <small>{{ successMessage }}</small>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Success',
  props: {
    successMessage: String
  }
}
</script>

<style scoped>
.card-success {
  border-radius: 15px;
  max-height: 100px;
  color: white;
  min-width: 500px;
}

.card-success button {
  position: absolute;
}

.card-success span i {
  opacity: 0.5;
  color: white;
}
.card-success span i:hover {
  opacity: 1;
  color: white;
}
</style>