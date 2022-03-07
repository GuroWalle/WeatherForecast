import Home from './views/Home.vue';
import WeatherForecast from './components/WeatherForecast.vue';




export default [
   { name: 'home', path: '/', component: Home },
   { name: 'weather-forecast', path: '/weather-forecast', component: WeatherForecast },


];
