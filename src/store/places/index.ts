import { Module } from 'vuex';

import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { PlacesState, StateInterface } from '../../interfaces';


const exampleModule: Module<PlacesState, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default exampleModule;