<template>
  <div>
    <div class="text-center pt-5">
      <h1 class="text-shadow-black-title">Weather <small><i class="fas fa-location-arrow"></i></small></h1>
      <small>How is the weather in your location? A playlist for him!</small>
    </div>
    <div>

      <div class="d-flex justify-content-center align-items-center weather-search py-4">
        <div>
          <label><i class="fas fa-map-marker-alt py-2 px-3"></i></label>
        </div>
        <div>
          <label><input placeholder="Istanbul, Londra, New York..." type="text" v-model="country" @keypress.enter="getWeather"></label>
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center">
          <div class="col-10 col-xl-4 card-weather">
              <div class="row">
                <div class="col-12 col-xl-6">
                  
                <div class="col-12 col-xl-6">
                  <div>
                    <h3 class="weather-temperature">{{ weatherData.weatherCountry}} </h3>
                    <h1 class="weather-temperature text-digital" v-if="weatherData.temperature !== null">{{ weatherData.temperature  }}°C </h1>
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
  border: none;
  background-color: #F5F8FA;
  height: 45px;
  width: 50px;
  border-radius:  8px 0 0 8px;
  transition: 0.5s;
}

.weather-search i:hover {
  color: #191919;
  transition: 0.5s;
}

.card-weather {
  border:2px solid #fff;
  background-color: white;
  border-radius: 20px;
  min-height: 200px;
  box-shadow: 0 0 10px 2px #cecece;
}

.weather-cloud-icon  {
  border-radius: 20px 20px 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80px;
  max-width: 80px;
  height: 80px;
}

</style>