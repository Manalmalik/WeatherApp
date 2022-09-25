<template>
  <WeatherDashboard/>
</template>

<script>
import WeatherDashboard from './components/WeatherDashboard/WeatherDashboard.vue';

export default {
  name: 'App',
  components: {
    WeatherDashboard
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
