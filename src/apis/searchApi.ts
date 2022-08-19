import axios from 'axios'


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        lenguage: 'es',
        access_token: 'pk.eyJ1IjoiYWVyb2VzdGFkaXN0Y2EiLCJhIjoiY2wxY3RxcjZlMDBpYjNqcXN4bWswNTU4dyJ9.LTRkLdqgDrj6Hjftspvf8w'
    }
})

export default searchApi