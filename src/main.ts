// import dotenv from 'dotenv';
// dotenv.config();

import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';
import router from './router';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

if (!navigator.geolocation) {
  alert('Tu navegador no soporta el GeoLocation');
  throw new Error('Tu navegador no soporta el GeoLocation');
}

createApp(App).use(store).use(router).mount('#app');
