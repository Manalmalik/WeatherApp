<template>
    <div class="city-container">
        <h1> {{weatherInfo.city}} </h1>
        <div class="info-container">
            <div class="weather-card weather-temp-card">
                <p> Sunny </p>
                <p> 12 C </p>
                <p class="inline-display"> hum </p>
                <p class="inline-display"> visi </p>
            </div>
            <div class="weather-card weather-info-card">
                <div class="cell-one"> 
                    <p> sunrise </p>
                    <p> 05:30 </p>
                </div>
                <div class="cell-two">
                    <p> sunrise </p>
                    <p> 05:30 </p>
                </div>
                <div class="cell-three">
                    <p> sunrise </p>
                    <p> 05:30 </p>
                </div>
                <div>
                    <p> sunrise </p>
                    <p> 05:30 </p>
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
        showWeather(){
            console.log('g', JSON.parse(this.weather))
        }
    }
  }
</script>