import { createRouter, createWebHistory } from 'vue-router'
import WeatherDashboard from '@/components/WeatherDashboard/WeatherDashboard.vue'

const routes =  [
    {
        path: '/',
        name: 'WeatherDashboard',
        component: WeatherDashboard
    },
    {
        path: '/city',
        name: 'CityWeather',
        component: () => import(/* webpackChunkName: "about" */ '@/components/WeatherDashboard/CityWeather.vue'),
        props: [
            
        ]
    },

]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router