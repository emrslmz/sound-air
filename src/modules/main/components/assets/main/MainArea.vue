<template>
<div class="main-top">
  <div class="container">
    
    <div class="main-padding"></div>

    <div class="main-top-div text-md-center">
     <h1><b>Sound AIR for everyone</b></h1>
     <p class="text-spacing5">and all sounds are free</p>
   </div>

    <div class="text-center">
      <router-link to="play">
        <button class="btn try-now-for-free-button">TRY NOW FOR FREE</button>
      </router-link>
    </div>
    <div class="d-flex justify-content-around pt-5">
      <div class="text-center">
        <h1><i class="fas fa-crosshairs fa-flip-horizontal"></i></h1>
        <small><b>Full focus!</b></small>
      </div>
      <div class="text-center">
        <h1><i class="fas fa-code-branch fa-flip-horizontal"></i></h1>
        <small><b>İncrease Creativity</b></small>
      </div>
      <div class="text-center">
        <h1><i class="fas fa-map-marked-alt fa-flip-horizontal"></i></h1>
        <small><b>What is the Weather in your Location? :) </b></small>
      </div>
      <div class="text-center">
        <h1><i class="fas fa-hourglass-start fa-flip-horizontal"></i></h1>
        <small><b>Timer for Pomodoro Technique</b></small>
      </div>
      <div class="text-center">
        <h1><i class="fas fa-plane fa-flip-horizontal"></i></h1>
        <small><b>Many different Sound Effects</b></small>
      </div>
    </div>
    
    <div class="text-center pt-5">
      <small><router-link to="privacy-and-terms">*Terms and conditions</router-link> apply.</small>
    </div>

  </div>
</div>
</template>

<style scoped>
.main-padding {
  padding-top: 200px;
}

@media (max-width: 768px) {
  .main-top {
    display: inline;
    position: relative;
  }
  .main-padding {
    padding-top: 100px;
  }
}

.try-now-for-free-button {
  width: 200px;
  height: 50px;
  border-radius: 25px;
  color: white;
  background-color:  #20D489;
  transition: 0.5s;
}

.try-now-for-free-button:hover {
  background-color: #28ffa7;
  box-shadow: 1px 2px 5px 1px white;
  transition: 0.5s;
}
</style>