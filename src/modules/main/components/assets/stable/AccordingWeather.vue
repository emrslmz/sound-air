<template>
  <div>
   <div class="text-center pt-5">
     <h1>Weather <small><i class="fas fa-location-arrow"></i></small></h1>
     <small>How is the weather in your location? A playlist for him!</small>
     <br>
     <small>Very soon!</small>
     <div align="center">
       <div class="maps">
         <iframe src="https://embed.windy.com/embed2.html?lat=34.778&lon=28.916&detailLat=37.962&detailLon=28.916&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1" frameborder="0"></iframe>
       </div>
     </div>

     <div class="py-3">
<!--       <input type="text" v-model="country">-->
<!--       <button @click="getWeather">GET</button>-->
<!--       <p>{{weather}}</p>-->
     </div>
   </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'AccordingWeather',
  data() {
    return {
      weather: null,
      country: '',
    }
  },
  methods: {
    getWeather() {
      axios.request({
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
          q: this.country,
          id: '2172797',
          lang: 'null',
          units: '"metric" or "imperial"',
          mode: 'xml, html'
        },
        headers: {
          'x-rapidapi-key': '323af40252msh38c4d5af64971f7p15db12jsnd2d370d44289',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
      })
      .then((response) => {
        console.log(response)
        this.weather = response.data.weather;

      }).catch((error) => {
        console.error(error);
      });
    }
  }
}


</script>


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
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
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


.soon p {
  position: absolute;
  margin-left: 750px;
  color: black;
  text-align: center;
}

</style>