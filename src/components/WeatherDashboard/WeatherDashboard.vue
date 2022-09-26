<template>
  <div class="weather-card">
    <div class="search-box-container">
      <h1> Weather App </h1>
      <div @click="hideErrorMessage" class="search-box">
      <input type="text" v-model="city" placeholder="Enter City Name"/>
      <button @click="fetchWeather"> <i class="fa fa-search" title="Edit"></i> </button>
    </div>
    <p class="city-name-warning" id="error-message"> invalid city name </p>
    </div>
  <div class="container">
    <div v-for="weather in weathers"  :key="weather.name" class="location" @click="redirectToCity(weather)">
        <img src="@/assets/icons/weather.png" alt="weather" class="weather-icons">
        <p> {{weather.city}} </p>
        <p> {{weather.tempInCelsius}} °C</p>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WeatherDashboard',
    data() {
    return {
     city: '',
     weathers: []
    }
  },
  mounted(){
    this.city = 'berlin'
    this.fetchWeather()
    this.city = 'london'
    this.fetchWeather()
    this.city = ''
  },

  methods: {
    fetchWeather() {
        const apiKey = '106acde16f1cf39992a3151adac14e0d';
        const apiBaseUrl = 'https://api.openweathermap.org/data/2.5/';
        fetch(`${apiBaseUrl}weather?q=${this.city}&units=metric&APPID=${apiKey}`)
        .then(res => {
          return res.json()
        }).then(this.setWeather)
    },

    setWeather(response) {
     if(response.message){
       var errorDiv = document.getElementById("error-message")
       errorDiv.classList.remove("city-name-warning")
     }else{
       var cityWeather = {
         city: response.name,
         description: response.weather[0].description,
         tempInCelsius: Math.round(response.main.temp),
         sunset: this.convertTime(response.sys.sunset),
         sunrise: this.convertTime(response.sys.sunrise),
         visibility: this.convertToKm(response.visibility),
         humidity: response.main.humidity,
         high: Math.round(response.main.temp_max),
         low: Math.round(response.main.temp_min),
         feelsLike: Math.round(response.main.feels_like),
         wind: response.wind.speed
       }
       this.weathers.push(cityWeather)
     }
    },

    redirectToCity(cityWeather){
      this.$router.push({ name: 'CityWeather', params: {cityName: cityWeather.city, weather: JSON.stringify(cityWeather)} })
    },

    convertToKm(visibility){
      return visibility / 1000
    },

    convertTime(timeStamp){
      var date = new Date(timeStamp * 1000)
      var hours = date.getHours()
      var minutes = date.getMinutes()
      return `${hours}:${minutes}`
    },

    hideErrorMessage(){
      var errorDiv = document.getElementById("error-message")
      if(!errorDiv.classList.contains("city-name-warning")){
        errorDiv.classList.add("city-name-warning")
      }
    }
  }
  }
</script>

<style>
  @import '@/assets/styles/global.scss'
</style>
