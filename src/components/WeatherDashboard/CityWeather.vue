<template>
    <div class="city-container">
        <div>
            <span class="back-button" @click="redirectToDashboard">
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </span>
            <h1> {{weatherInfo.city}} </h1>
        </div>
        <div class="info-container">
            <div class="weather-card weather-temp-card">
                <img src="@/assets/icons/weather.png" alt="weather" class="city-weather-icons">
                <p> {{weatherInfo.description}} </p>
                <p class="temperature-text"> {{weatherInfo.tempInCelsius}}°C </p>
                <p class="inline-display"> H: {{weatherInfo.high}}°C</p>
                <p class="inline-display"> L: {{weatherInfo.low}}°C </p>
            </div>
            <div class="weather-info">
                <div class="weather-card weather-info-card">
                    <div class="cell-one"> 
                        <p> Sunrise </p>
                        <p> {{weatherInfo.sunrise}} </p>
                    </div>
                    <div class="cell-two">
                        <p> Sunset </p>
                        <p> {{weatherInfo.sunset}} </p>
                    </div>
                    <div class="cell-three">
                        <p> Humidity </p>
                        <p> {{weatherInfo.humidity}}% </p>
                    </div>
                    <div>
                        <p> Visibility </p>
                        <p> {{weatherInfo.visibility}}km </p>
                    </div>
                </div>
                <div class="weather-card weather-feels-like">
                    <p> Feels like {{weatherInfo.feelsLike}}°C</p>
                    <p> Wind {{weatherInfo.wind}}m/s</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'CityWeather',
    props: ['weather'],
    data(){
        return {
            weatherInfo: JSON.parse(this.weather)
        }
    },
    methods: {
        redirectToDashboard(){
            this.$router.push({name: "WeatherDashboard"})
        }
    }
  }
</script>