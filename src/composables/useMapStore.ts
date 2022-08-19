import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';
import { Feature, StateInterface } from '../interfaces';
import Mapboxgl from 'mapbox-gl';
import { LngLat } from '../store/map/actions';


export const useMapStore = () => {

    const store = useStore<StateInterface>()

    return {
        map: computed(() => store.state.map.map),
        distance: computed(() => store.state.map.distance),
        duration: computed(() => store.state.map.duration),

        // Getters
        isMapReady: computed<boolean>(() => store.getters['map/isMapReady']),

        // Mutantions
        setMap: (map: Mapboxgl.Map) => store.commit('map/setMap', map),
        setPlacesMarkers: (places: Feature[]) => store.commit('map/setPlacesMarkers', places),

        // Actions
        getRouteBetweenPoints: (start: LngLat, end: LngLat) => store.dispatch('map/getRouteBetweenPoints', { start, end }),
    }
}
