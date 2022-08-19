import { defineComponent, onMounted, ref, watch } from "vue";
import Mapboxgl, { Marker, Popup } from "mapbox-gl";
import { useMapStore, usePlacesStore } from "../../composables";

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>()
        const { isUserLocationReady, userLocation } = usePlacesStore()
        const { setMap } = useMapStore()

        const initMap = async () => {
            if (!mapElement.value) throw new Error('Div Elmento no exist')
            if (!userLocation.value) throw new Error('User Location no exist')

            await Promise.resolve()

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: [userLocation.value.lng, userLocation.value.lat], // starting position [lng, lat]
                zoom: 15, // starting zoom
            });

            const myLocationPopup: Popup = new Mapboxgl.Popup()
                .setLngLat([userLocation.value.lng, userLocation.value.lat])
                .setHTML(`
            <h5>Aquí estoy</h5>
            <p>lng: ${userLocation.value.lng}, lat: ${userLocation.value.lat}</p>
            `)

            const myLocationMarker: Marker = new Mapboxgl.Marker()
                .setLngLat([userLocation.value.lng, userLocation.value.lat])
                .setPopup(myLocationPopup)
                .addTo(map)

            setMap(map)
        }

        onMounted(() => {
            if (isUserLocationReady.value) return initMap()
        })

        watch(isUserLocationReady, (newVal) => {
            if (isUserLocationReady.value) initMap()
        })

        return {
            isUserLocationReady,
            mapElement
        }
    }
})