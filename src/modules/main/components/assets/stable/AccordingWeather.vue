<template>
  <div>
   <div class="text-center pt-5">
     <h1>Weather</h1>
     <div class="maps">
       <iframe src="https://www.meteoblue.com/tr/hava/maps/widget/%c4%b0stanbul_t%c3%bcrkiye_745044?windAnimation=0&windAnimation=1&gust=0&satellite=0&satellite=1&coronaWeatherScore=0&geoloc=fixed&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=1&autowidth=auto"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 100%; height: 720px"></iframe>
     </div>
     <div class="py-3">


     </div>
   </div>
  </div>
</template>



<style scoped>

.maps iframe {
  border-radius: 1000px 1000px 0 0;
}
</style>