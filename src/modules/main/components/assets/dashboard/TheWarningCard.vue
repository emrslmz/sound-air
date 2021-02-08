<template>
  <div>
    <div class="d-flex justify-content-center align-items-end">

      <div class="alert bg-warning card-warning text-center  fade show" role="alert">
        <h3><i class="fab fa-wpexplorer  fa-flip-horizontal"></i></h3>
        <p v-if="description.length > 0">I found a suitable solution for the code we wrote!</p>
        <p v-else>I couldn't find an error matching the code you entered</p>

        <small>
          <i v-if="description.length > 0">{{ description }}</i>
          <i class="fas fa-circle-notch fa-spin" v-else></i>
        </small>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'WarningCard',
  props: {
    description: String
  }
}
</script>


<style scoped>
.card-warning {
  border-radius: 15px;
  min-height: 100px;
  width: 600px;
  color: #191919;
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