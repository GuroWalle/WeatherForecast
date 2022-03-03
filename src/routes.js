import Home from './views/Home.vue';
import Bangkok from './components/Bangkok.vue';
import Oslo from './components/Oslo.vue';
import Rome from './components/Rome.vue';
import Seoul from './components/Seoul.vue';
import WeatherForecast from './components/WeatherForecast.vue';




export default [
   { name: 'home', path: '/', component: Home },
   { name: 'bangkok', path: '/bangkok', component: Bangkok },
   { name: 'oslo', path: '/oslo', component: Oslo },
   { name: 'rome', path: '/rome', component: Rome },
   { name: 'seoul', path: '/seoul', component: Seoul },
   { name: 'weather-forecast', path: '/weather-forecast', component: WeatherForecast },


];
