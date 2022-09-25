/* eslint-disable */ 
<template>
  <div>
    <div>
      <h1> Weather App </h1>
      <div class="searchBox">
      <input type="text" v-model="city" placeholder="Enter City Name"/>
      <button @click="fetchWeather"> <i class="fa fa-search" title="Edit"></i> </button>
      </div>
      <p> {{this.city}}</p>
      <p> {{this.weather}}</p>
    </div>
  <div class="container">
    <div v-for="weather in weathers"  :key="weather.name" class="location">
      <p> {{weather.city}} </p>
      <p> {{weather.temprature}}</p>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WeatherDefault',
    data() {
    return {
     city: '',
     weathers: []
    }
  },
    methods: {
      fetchWeather() {
        console.log(this.city, "city")
        const apiKey = '106acde16f1cf39992a3151adac14e0d';
        const apiBaseUrl = 'https://api.openweathermap.org/data/2.5/';
        fetch(`${apiBaseUrl}weather?q=${this.city}&APPID=${apiKey}`)
        .then(res => {
          return res.json()
        }).then(this.setWeather)
      },

      setWeather(response) {
        var cityWeather = {
          city: response.name,
          description: response.weather[0].description,
          temprature: response.main.temp,
          sunset: response.sys.sunset,
          sunrise: response.sys.sunrise,
          visibility: response.visibility,
          humidity: response.main.humidity,
        }
        this.weathers.push(cityWeather)
        //console.log(this.weathers, response)
      }
    }
  }
</script>

<style>
  @import '@/assets/styles/global.scss'
</style>
