<template>
  <div class="text-center pt-5">
      <div class="container">
           <h3 class="text-white">Uploaded Sound</h3>
        <div class="uploaded-sound-card">
            <div class="d-flex align-items-center py-3">
              <div class="col-12 col-md-2 uploaded-sound-card-left">
                <h6> <i class="fab fa-algolia"></i></h6>
                <h6><button class="btn btn-primary btn-sm">Edit/Delete</button></h6>
              </div>
              <div class="col-12 col-md-10 text-left uploaded-sound-card-right">
                <h6><i class="fas fa-file-signature"></i> Sound Name:</h6>
                <h6><i class="far fa-file-audio"></i> Audio Name:</h6>
              </div>
            </div>
        </div>

      </div>
  </div>
</template>

<style scoped>

.uploaded-sound-card {
  background-color: white;
  min-width: 200px;
  min-height: 100px;
}

.uploaded-sound-card-left i {
  font-size: 36px;
  color: #191919;
}
.uploaded-sound-card-left button {
  border-radius: 10px;
}

.uploaded-sound-card-right h6 {
  font-weight: bold;
  
}
</style>