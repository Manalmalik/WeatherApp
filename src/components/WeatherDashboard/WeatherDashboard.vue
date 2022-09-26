<template>
  <div class="weather-card">
    <div>
      <h1> Weather App </h1>
      <div class="searchBox">
      <input type="text" v-model="city" placeholder="Enter City Name"/>
      <button @click="fetchWeather"> <i class="fa fa-search" title="Edit"></i> </button>
      </div>
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
        fetch(`${apiBaseUrl}weather?q=${this.city}&units=imperial&APPID=${apiKey}`)
        .then(res => {
          return res.json()
        }).then(this.setWeather)
    },

    setWeather(response) {
      var cityWeather = {
        city: response.name,
        description: response.weather[0].description,
        tempInCelsius:this.convertTempToCelsius(response.main.temp),
        tempInFarenheit: response.main.temp,
        sunset: response.sys.sunset,
        sunrise: response.sys.sunrise,
        visibility: response.visibility,
        humidity: response.main.humidity,
      }
      this.weathers.push(cityWeather)
    },

    convertTempToCelsius(temprature) {
      return Math.round((temprature - 32) / 1.8)
    },

    redirectToCity(cityWeather){
      this.$router.push({ name: 'CityWeather', params: { weather: JSON.stringify(cityWeather)}})
    }
  }
  }
</script>

<style>
  @import '@/assets/styles/global.scss'
</style>
