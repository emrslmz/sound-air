<template>
  <div>
   <div class="text-center pt-5">
     <h1 class="text-shadow-black-title">Weather <small><i class="fas fa-location-arrow"></i></small></h1>
     <small>How is the weather in your location? A playlist for him!</small>
     <br>
     <div align="center">
<!--       <div class="maps">-->
<!--         <iframe src="https://embed.windy.com/embed2.html?lat=34.778&lon=28.916&detailLat=37.962&detailLon=28.916&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1" frameborder="0"></iframe>-->
<!--       </div>-->
     </div>

     <div class="text-center pt-4">
       <div class="d-flex justify-content-center align-items-center weather-search">
         <div>
           <label><i class="fas fa-map-marker-alt py-2"></i></label>
         </div>
         <div>
           <label><input placeholder="Istanbul, Londra, New York..." type="text" v-model="country" @keypress.enter="getWeather"></label>

         </div>
       </div>


       <div>
         

         <div align="center">
            <div class="d-flex justify-content-center align-items-start">

              <div class="col-12 col-xl-6 text-xl-right">
                <div v-for="(w, index) in weatherData.weather" :key="index">

                  <div class="weather-icon">
                    <!-- BULUTLU-->
                    <img src="https://img.icons8.com/emoji/96/000000/sun-behind-small-cloud.png" v-if="w.id === 801" />
                    <img src="https://img.icons8.com/emoji/96/000000/cloud-emoji.png" v-if="w.id === 802" />
                    <img src="https://img.icons8.com/emoji/96/000000/sun-behind-cloud.png" v-if="w.id === 803" />
                    <img src="https://img.icons8.com/emoji/96/000000/cloud-emoji.png" v-if="w.id === 804" />

                    <!-- KARLI-->
                    <div class="weather-cloud-icon"></div>
                    <img src="https://img.icons8.com/emoji/96/000000/cloud-with-snow-emoji.png" v-if="w.id === 600" />
                    <img src="https://img.icons8.com/emoji/96/000000/cloud-with-snow-emoji.png" v-if="w.id === 601"/>
                    <img src="https://img.icons8.com/emoji/96/000000/cloud-with-snow-emoji.png" v-if="w.id === 602" />

                    <!-- YAGMURLU-->
                    <img src="https://img.icons8.com/fluent/96/000000/light-rain.png" v-if="w.id === 500" />
                    <img src="https://img.icons8.com/fluent/96/000000/moderate-rain.png" v-if="w.id === 501"/>
                    <img src="https://img.icons8.com/fluent/96/000000/intense-rain.png" v-if="w.id === 502"/>
                    <img src="https://img.icons8.com/emoji/96/000000/cloud-with-lightning-and-rain.png" v-if="w.id === 503"/>

                    <!-- SİSLİ-->
                    <img src="https://img.icons8.com/emoji/96/000000/fog.png" v-if="w.id === 701" />
                    <img src="https://img.icons8.com/fluent/48/000000/fog-day.png" v-if="w.id === 721" />

                    <!-- GUNESLİ-->
                    <img src="https://img.icons8.com/fluent/96/000000/sun.png" v-if="w.id === 800" />
                    
                    <div class="weather-description pr-1">
                     <i>{{ w.description}}</i>
                    </div>

                  </div>


                </div>
              </div>

              <div class="col-12 col-xl-6 text-xl-left">
                <div class="weather-temperature">
                  <h1>{{ weatherData.weatherCountry}}</h1>
                  <h1 class="text-left text-digital" v-if="weatherData.temperature !== null">
                    {{ weatherData.temperature  }}°C
                    <img width="36" height="36" src="https://img.icons8.com/fluent/96/000000/thermometer.png" v-if="weatherData.temperature < 0 " />
                  </h1>
                </div>
              </div>


              
            </div>
         </div>
                                                          
       </div>

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
      weather: [],
      weatherData: {
        temperature: null,
        weather: null,
        weatherCountry: null,
      },
      country: '',
    }
  },
  methods: {
    // ℃ = K - 273.15
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
        //Tempature
        this.weatherData.temperature = Math.round(response.data.main.temp - 273.15);

        //


        this.weatherData.weather = response.data.weather;

        this.weatherData.weatherCountry = response.data.name;

        console.log(response.data);


      }).catch((error) => {
        console.error(error);
      });
    }
  }
}


</script>


<style scoped>

 /*
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
}   */
.weather-search input {
  color: #5E6278;
  outline: 0;
  border: none;
  background-color: #F5F8FA;
  min-width: 300px;
  height: 45px;
  border-radius: 0 8px 8px 0;
}

 .weather-search i {
   align-items: center;
   font-size: 24px;
   color: #5E6278;
   outline: 0;
   border: none;
   background-color: #F5F8FA;
   height: 45px;
   width: 50px;
   border-radius:  8px 0 0 8px;
 }

 .weather-temperature h1 {
   text-shadow: 0 0 1em blue, 0 0 0.2em blue;
   color: white;
 }

.weather-icon img {
  width: 60px;
  height: 60px;
}

.weather-description {
  font-size: 12px;
}



.weather-cloud-icon  {
  background-image: url('');
}

</style>