import { GetterTree } from 'vuex';
import { MapState, StateInterface } from '../../interfaces';
import state from './state';


const getters: GetterTree<MapState, StateInterface> = {
    isMapReady(state) {
        return !!state.map
    }
}



export default getters;