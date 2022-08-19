import axios from 'axios'


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiYWVyb2VzdGFkaXN0Y2EiLCJhIjoiY2wxY3RxcjZlMDBpYjNqcXN4bWswNTU4dyJ9.LTRkLdqgDrj6Hjftspvf8w'
    }
})

export default directionsApi