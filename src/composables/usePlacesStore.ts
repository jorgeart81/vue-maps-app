import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useStore } from "vuex"
import { StateInterface } from "../interfaces";


export const usePlacesStore = () => {
    const store = useStore<StateInterface>();

    onMounted(() => {
        if (!store.getters['places/isUserLocationReady']) {
            store.dispatch('places/getInitialLocation')
        }
    })

    return {
        // State
        isLoading: computed<boolean>(() => store.state.places.isLoading),
        isLoadingPlaces: computed(() => store.state.places.isLoadingPlaces),
        places: computed(() => store.state.places.places),
        userLocation: computed(() => store.state.places.userLocation),

        // Getters
        isUserLocationReady: computed<boolean>(() => store.getters['places/isUserLocationReady']),

        // Actions
        searchPlacesByTerm: (query = '') => store.dispatch('places/searchPlacesByTerm', query),
    }
}