<template>
  <div>
    <div class="text-center pt-3">
      <h1 class="text-shadow-black-title">Weather <small><i class="fas fa-location-arrow"></i></small></h1>
      <small>How is the weather in your location? A playlist for him!</small>
      <br>
      <small>Very Soon!</small>
    </div>
    <div>

      <div align="center">
         <div class="maps">
           <iframe src="https://embed.windy.com/embed2.html?lat=34.778&lon=28.916&detailLat=37.962&detailLon=28.916&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1" frameborder="0"></iframe>
         </div>
      </div>

    </div>
  </div>
</template>                                                       


<style scoped>

.maps {
 padding: 0 100px 0 100px;
 width: 100%;
 overflow:hidden;
}
.maps iframe {
 width: 100%;
 min-height: 700px;
 color: transparent;
 font-size:  25px;
 -webkit-mask-image: radial-gradient(circle at top, transparent 50px, red 30px);
 border-radius: 20px;

 margin-top: -8px;
 -webkit-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
 user-select: none;
}

@media (max-width: 768px) {
 .maps {
   padding: 0 20px 0 20px;
   width: 100%;
   overflow:hidden;
   overflow-x: auto;
 }
}  
</style>