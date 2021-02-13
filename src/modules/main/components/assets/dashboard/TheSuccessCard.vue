<template>
<div>
  <div class="d-flex justify-content-center align-items-end">

    <div class="alert bg-success card-success text-center alert-dismissible fade show" role="alert">
      <h3><i class="fas fa-check"></i></h3>
      <small>{{ successMessage }}</small>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true"><i class="fas fa-times"></i></span>
      </button>
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