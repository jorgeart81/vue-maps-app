import { GetterTree } from 'vuex';
import { PlacesState, StateInterface } from '../../interfaces';


const getters: GetterTree<PlacesState, StateInterface> = {
    isUserLocationReady(state: PlacesState) {
        return !!state.userLocation;
    }
}



export default getters;