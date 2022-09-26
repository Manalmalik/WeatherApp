import { createRouter, createWebHistory } from 'vue-router'
import WeatherDashboard from '@/components/WeatherDashboard/WeatherDashboard.vue'

const routes =  [
    {
        path: '/',
        name: 'WeatherDashboard',
        component: WeatherDashboard
    },
    {
        path: '/weather/:cityName',
        name: 'CityWeather',
        component: () => import(/* webpackChunkName: "about" */ '@/components/WeatherDashboard/CityWeather.vue'),
        props: true
    },

]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router