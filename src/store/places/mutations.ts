import { MutationTree } from 'vuex';
import { PlacesState, Location, Feature } from '../../interfaces';


const mutation: MutationTree<PlacesState> = {

    setLngLat(state: PlacesState, coords: Location) {
        state.userLocation = coords;
        state.isLoading = false;
    },

    setIsLoadingPlaces(state) {
        state.isLoadingPlaces = true
    },

    setPlaces(state, places: Feature[]) {
        state.places = places
        state.isLoadingPlaces = false
    },

}


export default mutation;