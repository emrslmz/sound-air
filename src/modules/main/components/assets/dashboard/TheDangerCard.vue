<template>
<div>

    <div class="d-flex justify-content-center align-items-end">

      <div class="alert bg-danger card-danger text-center alert-dismissible fade show" role="alert">
        <h3><i class="fas fa-times"></i></h3>
        <small>An error occurred while sending your message. Please fill in the relevant boxes. <i>#{{ errorCode }}</i></small>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true"><i class="fas fa-times"></i></span>
        </button>
      </div>

    </div>
</div>
</template>


<script>
export default {
  name: 'DangerCard',
  props: {
    errorCode: String,
  }
}
</script>


<style scoped>
.card-danger {
  border-radius: 15px;
  max-height: 100px;
  color: white;
}

.card-danger button {
  position: absolute;
}

.card-danger span i {
  opacity: 0.5;
  color: white;
}
.card-danger span i:hover {
  opacity: 1;
  color: white;
}
</style>