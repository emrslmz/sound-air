<template>
  <div>
    <div class="navbar navbar-expand-lg navbar-light bg-primary">
      <router-link to="/admin">
        <h4 class="text-white">Sound AIR</h4>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto"></div>
        <div>
          <router-link to="/admin/upload-sound">
            <button class="btn btn-light btn-sm header-button">Upload Sound</button>
          </router-link>
          <router-link to="/admin/uploaded-sounds">
            <button class="btn btn-light btn-sm header-button">All Sound</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.header-button {
  border-radius: 20px;
  margin: 0 5px 0 5px;
}

</style>                  