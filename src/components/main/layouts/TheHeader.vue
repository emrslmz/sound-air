<template>
<div>
  <div class="navbar navbar-expand-lg navbar-light bg-success">
   <div class="text-white">
     <h5>Sound AIR</h5>
   </div>
    <div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas text-white fa-bars"></i>
      </button>
    </div>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav mx-auto"></div>
     <div>
       <button class="btn header-button btn-sm mx-2"><i class="fas fa-calendar-alt"></i> Categories</button>
       <button class="btn header-button btn-sm mx-2"><i class="far fa-play-circle"></i> Sounds</button>
       <router-link to="/contact-us">
         <button class="btn header-button btn-sm mx-2"><i class="far fa-comments"></i> Contact us</button>
       </router-link>
     </div>
    </div>
  </div>
</div>
</template>

<style>                                                                     
.header-button {
  color: #191919;
  border-radius: 12px;
  min-width: 100px;
  background-color: #FBF9F6;
  box-shadow: 0 0 2px #cecece;
  transition: 0.6s;
  border: 1px solid white;
}

.header-button:hover {
  color: #191919;
  border-radius: 12px;
  min-width: 100px;
  background-color: #FBF9F6;
  box-shadow: 0 0 6px #cecece;
  transition: 0.6s;
  border: 1px solid white;
}

.header-button i {
  opacity: 0.6;
  color: black;
}
</style>