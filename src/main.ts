import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiYWVyb2VzdGFkaXN0Y2EiLCJhIjoiY2wxY3RxcjZlMDBpYjNqcXN4bWswNTU4dyJ9.LTRkLdqgDrj6Hjftspvf8w'

if (!navigator.geolocation) {
    alert('Tu navegador no soporta el GeoLocation')
    throw new Error('Tu navegador no soporta el GeoLocation')
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
