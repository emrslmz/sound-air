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

<!--     <div class="text-center pt-4">-->
<!--       <div class="d-flex justify-content-center align-items-center weather-search">-->
<!--         <div>-->
<!--           <label><i class="fas fa-map-marker-alt py-2" @click="getWeather"></i></label>-->
<!--         </div>-->
<!--         <div>-->
<!--           <label><input placeholder="Istanbul, Londra, New York..." type="text" v-model="country" @keypress.enter="getWeather"></label>-->
<!--         </div>-->
<!--       </div>-->


<!--       <div>-->
<!--         -->

<!--         <div align="center">-->
<!--            <div class="d-flex justify-content-center align-items-start card-weather">-->

<!--              <div class="col-12 col-xl-4 text-xl-right py-4">-->
<!--                -->
<!--                <div v-for="(w, index) in weatherData.weather" :key="index">-->

<!--                  <div class="weather-icon">-->

<!--                    &lt;!&ndash; RAINLY&ndash;&gt;-->
<!--                    <div align="right" v-if="w.id === 500">  &lt;!&ndash;  light rain &ndash;&gt;-->
<!--                      <div class="weather-cloud-icon" style="background-image: url('/images/icons/light-rain.png')"></div>-->
<!--                    </div>-->
<!--                    <div align="right" v-if="w.id === 501">-->
<!--                      <div class="weather-cloud-icon" style="background-image: url('/images/icons/moderate-rain.png')"></div>-->
<!--                    </div>-->
<!--                    <div align="right" v-if="w.id === 502">-->
<!--                      <div class="weather-cloud-icon" style="background-image: url('/images/icons/intense-rain.png')"></div>-->
<!--                    </div>-->
<!--                    <div align="right" v-if="w.id === 503">-->
<!--                      <div class="weather-cloud-icon" style="background-image: url('/images/icons/cloud-with-lightning-and-rain.png')"></div>-->
<!--                    </div>-->
<!--                    &lt;!&ndash; /RAINLY&ndash;&gt;-->

<!--                    -->
<!--                    &lt;!&ndash; SNOWLY&ndash;&gt;-->
<!--                    <div align="right" v-if="w.id === 600">   &lt;!&ndash;  light snow &ndash;&gt;-->
<!--                      <div class="weather-cloud-icon" style="background-image: url('/images/icons/snow-v1.png')"></div>-->
<!--                    </div>-->
<!--                    <div align="right" v-if="w.id === 601">   &lt;!&ndash; snow &ndash;&gt;-->
<!--                      <div class="weather-cloud-icon" style="background-image: url('/images/icons/snow-v2.png')"></div>-->
<!--                    </div>-->
<!--                    <div align="right" v-if="w.id === 602">-->
<!--                      <div class="weather-cloud-icon" style="background-image: url('/images/icons/snow-v3.png')"></div>-->
<!--                    </div>-->
<!--                    &lt;!&ndash; /SNOWLY&ndash;&gt;-->



<!--                    &lt;!&ndash; FOGLY&ndash;&gt;-->
<!--                    <div align="right" v-if="w.id === 701">  &lt;!&ndash;  mist &ndash;&gt;-->
<!--                      <div class="weather-cloud-icon" style="background-image: url('/images/icons/fog.png')"></div>-->
<!--                    </div>-->
<!--                    <div align="right" v-if="w.id === 721">-->
<!--                      <div class="weather-cloud-icon" style="background-image: url('/images/icons/fog-day.png')"></div>-->
<!--                    </div>-->
<!--                    &lt;!&ndash; /FOGLY&ndash;&gt;-->

<!--                    &lt;!&ndash; CLOUDLY&ndash;&gt;-->
<!--                    <div align="right" v-if="w.id === 801">  &lt;!&ndash;  few clouds &ndash;&gt;-->
<!--                      <div class="weather-cloud-icon" style="background-image: url('/images/icons/sun-behind-small-cloud.png')"></div>-->
<!--                    </div>-->
<!--                    <div align="right" v-if="w.id === 802">-->
<!--                      <div class="weather-cloud-icon" style="background-image: url('/images/icons/cloud-icon.png')"></div>-->
<!--                    </div>-->
<!--                    <div align="right" v-if="w.id === 803"> &lt;!&ndash;broken clouds&ndash;&gt;-->
<!--                      <div class="weather-cloud-icon" style="background-image: url('/images/icons/sun-behind-cloud.png')"></div>-->
<!--                    </div>-->
<!--                    <div align="right" v-if="w.id === 804">-->
<!--                      <div class="weather-cloud-icon" style="background-image: url('/images/icons/cloud-icon.png')"></div>-->
<!--                    </div>-->
<!--                    &lt;!&ndash; /CLOUDLY&ndash;&gt;-->


<!--                    &lt;!&ndash; SUNLY&ndash;&gt;-->
<!--                    <div align="right" v-if="w.id === 800">    &lt;!&ndash;  clear sky &ndash;&gt;-->
<!--                      <div class="weather-cloud-icon" style="background-image: url('/images/icons/sun.png')"></div>-->
<!--                    </div>-->
<!--                    &lt;!&ndash; /SUNLY&ndash;&gt;-->

<!--                  </div>-->
<!--                  <strong><i>{{ w.id }}/{{ w.description }}</i></strong>-->

<!--                </div>-->
<!--              </div>-->

<!--              <div class="col-12 col-xl-6 text-xl-left py-4">-->
<!--                <div>-->
<!--                  <h3 class="weather-temperature">{{ weatherData.weatherCountry}} </h3>-->
<!--                   <h1 class="weather-temperature text-digital" v-if="weatherData.temperature !== null">{{ weatherData.temperature  }}°C </h1>-->
<!--                </div>-->
<!--              </div>-->

<!--            </div>-->
<!--         </div>-->
                                                          

     </div>


  </div>
</template>

<!--<script>-->
<!--import axios from "axios";-->

<!--export default {-->
<!--  name: 'AccordingWeather',-->
<!--  data() {-->
<!--    return {-->
<!--      weather: [],-->
<!--      weatherData: {-->
<!--        temperature: null,-->
<!--        weather: null,-->
<!--        weatherCountry: null,-->
<!--      },-->
<!--      country: '',-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    // ℃ = K - 273.15-->
<!--    getWeather() {-->
<!--      axios.request({-->
<!--        method: 'GET',-->
<!--        url: 'https://community-open-weather-map.p.rapidapi.com/weather',-->
<!--        params: {-->
<!--          q: this.country,-->
<!--          id: '2172797',-->
<!--          lang: 'null',-->
<!--          units: '"metric" or "imperial"',-->
<!--          mode: 'xml, html'-->
<!--        },-->
<!--        headers: {-->
<!--          'x-rapidapi-key': '323af40252msh38c4d5af64971f7p15db12jsnd2d370d44289',-->
<!--          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'-->
<!--        }-->
<!--      })-->
<!--      .then((response) => {-->
<!--        //Tempature-->
<!--        this.weatherData.temperature = Math.round(response.data.main.temp - 273.15);-->

<!--        this.weatherData.weather = response.data.weather;-->

<!--        this.weatherData.weatherCountry = response.data.name;-->

<!--        console.log(response.data);-->


<!--      }).catch((error) => {-->
<!--        console.error(error);-->
<!--      });-->
<!--    }-->
<!--  }-->
<!--}-->


<!--</script>-->


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

 .weather-temperature {
   text-shadow: 0 0 0.3em blue, 0 0 1em blue;
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
  border-radius: 20px 20px 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80px;
  max-width: 80px;
  height: 80px;
}

 .card-weather {
   background-color: white;
   border-radius: 20px;
   min-width: 30%;
   max-width: 60%;
   min-height: 200px;
   box-shadow: 0 0 10px 2px #cecece;
 }
</style>