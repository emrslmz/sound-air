<template>
<div class="main-top pt-5">
  <div class="container">
    <div style="padding-top: 200px"></div>

    <div class="main-top-div text-center">
     <h1>Sound AIR for everyone</h1>
     <p>and all sounds are free</p>
   </div>

    <div class="text-center">
      <button class="btn try-now-for-free-button">TRY NOW FOR FREE</button>
    </div>
    <div class="d-flex justify-content-around pt-5">
      <div class="text-center">
        <h1><i class="fas fa-crosshairs"></i></h1>
        <small><b>Full focus!</b></small>
      </div>
      <div class="text-center">
        <h1><i class="fas fa-code-branch"></i></h1>
        <small><b>İncrease Creativity</b></small>
      </div>
      <div class="text-center">
        <h1><i class="fas fa-map-marked-alt"></i></h1>
        <small><b>What is the Weather in your Location? :) </b></small>
      </div>
      <div class="text-center">
        <h1><i class="fas fa-hourglass-start"></i></h1>
        <small><b>Timer for Pomodoro Technique</b></small>
      </div>
      <div class="text-center">
        <h1><i class="fab fa-modx"></i></h1>
        <small><b>Multiple Audio Playback Features</b></small>
      </div>


    </div>

  </div>
</div>
</template>

<style scoped>
.main-top {
  padding-left: 300px;
  height: 100vh;
}

@media (max-width: 768px) {
  .main-top {
    display: inline;
    position: relative;
  }
}

.main-top-div h1 {
  font-weight: bold;
}
.main-top-div p {
  letter-spacing: 5px;                                                
}

.try-now-for-free-button {
  width: 200px;
  height: 50px;
  border-radius: 25px;
  color: white;
  background-color: #1DBB55;
  transition: 0.5s;
}

.try-now-for-free-button:hover {
  background-color: #1ED760;
  box-shadow: 1px 2px 5px 1px white;
  transition: 0.5s;
}
</style>