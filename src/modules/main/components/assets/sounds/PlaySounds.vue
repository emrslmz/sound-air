<template>
  <div class="container">
    <div class="soundPlay-padding"></div>

    <div class="main-top-div text-md-center">
      <h1><b>Sound AIR for everyone</b></h1>
      <p class="text-spacing5">and all sounds are free</p>
    </div>

    <div class="row soundPlay-row">

      <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center py-3">
        <a type="button" class="soundPlay-icon">
          <i class="fas fa-cloud-showers-heavy"></i>
        </a>

        <!-- START VOLUME CONTROL -->
        <div class="setting-button justify-content-between align-items-center pt-3">
          <div class="volumeControl d-flex align-items-center">
            <small type="button" class="fas fa-volume-up px-1"></small>
            <small type="button" class="fas fa-volume-mute px-1"></small>
            <input type="range" min="0" max="100" class="volumeSlider">
          </div>
        </div>
      </div>

      <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center py-3">
        <a type="button" class="soundPlay-icon">
          <i class="fas fa-cloud-showers-heavy"></i>
        </a>

        <!-- START VOLUME CONTROL -->
        <div class="setting-button justify-content-between align-items-center pt-3">
          <div class="volumeControl d-flex align-items-center">
            <small type="button" class="fas fa-volume-up px-1"></small>
            <small type="button" class="fas fa-volume-mute px-1"></small>
            <input type="range" min="0" max="100" class="volumeSlider">
          </div>
        </div>
      </div>

      <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center py-3">
        <a type="button" class="soundPlay-icon">
          <i class="fas fa-cloud-showers-heavy"></i>
        </a>

        <!-- START VOLUME CONTROL -->
        <div class="setting-button justify-content-between align-items-center pt-3">
          <div class="volumeControl d-flex align-items-center">
            <small type="button" class="fas fa-volume-up px-1"></small>
            <small type="button" class="fas fa-volume-mute px-1"></small>
            <input type="range" min="0" max="100" class="volumeSlider">
          </div>
        </div>
      </div>

      <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center py-3">
        <a type="button" class="soundPlay-icon">
          <i class="fas fa-cloud-showers-heavy"></i>
        </a>

        <!-- START VOLUME CONTROL -->
        <div class="setting-button justify-content-between align-items-center pt-3">
          <div class="volumeControl d-flex align-items-center">
            <small type="button" class="fas fa-volume-up px-1"></small>
            <small type="button" class="fas fa-volume-mute px-1"></small>
            <input type="range" min="0" max="100" class="volumeSlider">
          </div>
        </div>
      </div>

      <div class="col-6 col-md-3 d-flex flex-column justify-content-center align-items-center py-3">
        <a type="button" class="soundPlay-icon">
          <i class="fas fa-cloud-showers-heavy"></i>
        </a>

        <!-- START VOLUME CONTROL -->
        <div class="setting-button justify-content-between align-items-center pt-3">
          <div class="volumeControl d-flex align-items-center">
            <small type="button" class="fas fa-volume-up px-1"></small>
            <small type="button" class="fas fa-volume-mute px-1"></small>
            <input type="range" min="0" max="100" class="volumeSlider">
          </div>
        </div>
      </div>


    </div>
    
  </div>
</template>


<style scoped>
.soundPlay-padding {
  padding-top: 100px;
}

@media (max-width: 768px) {
  .soundPlay-padding {
    padding-top: 50px;
  }
}

.soundPlay-icon i {
  font-size: 52px;
  color: #191919;
}

.soundPlay-row {
  margin: 0 250px 0 250px;
}
/*************************************************************/
/******* Volume Bar
/*************************************************************/


.volumeSlider {
  -webkit-appearance: none;
  width: 75px;
  height: 5px;
  border-radius: 20px;
  background-color: #191919;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.volumeSlider:hover {
  opacity: 1;
}

.volumeSlider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: white;
  border: 1px solid #191919;
  cursor: pointer;
}
</style>