import { Module } from 'vuex';

import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import { MapState, StateInterface } from '../../interfaces';


const exampleModule: Module<MapState, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default exampleModule;