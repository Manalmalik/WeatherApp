<template>
    <h1 @click="showWeather"> CityName </h1>
</template>

<script>
    export default {
    name: 'CityWeather',
    props: ['weather'],
    methods: {
        showWeather(){
            console.log('g', JSON.parse(this.weather))
        }
    }
  }
</script>