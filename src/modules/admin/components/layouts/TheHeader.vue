<template>
  <div>
    <div class="navbar navbar-expand-lg navbar-light bg-primary">
      <router-link to="/admin/admin-home">
        <h4 class="text-white">Sound AIR</h4>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto"></div>
        <div>
          <router-link to="/admin/admin-home">
            <button class="btn btn-sm header-button">Home</button>
          </router-link>
          <router-link to="/admin/upload-sound">
            <button class="btn btn-sm header-button">Upload Sound</button>
          </router-link>
          <router-link to="/admin/uploaded-sounds">
            <button class="btn btn-sm header-button">All Sound</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.router-link-active button {
  background-color: #00acee;
  color: white;
  font-weight: bold;
}


.header-button {
  min-width: 100px;
  border: 1px solid #00acee;
  font-weight: bold;
  color: #00acee;
  border-radius: 20px;
  background-color: white;
  transition: 0.4s;
}

.header-button:hover {
  color: white;
  background-color: #00acee;
  transition: 0.5s;
}


</style>                  