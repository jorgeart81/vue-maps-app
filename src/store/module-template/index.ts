import { Module } from 'vuex';

import state, { ExampleStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { StateInterface } from '../../interfaces';


const exampleModule: Module<ExampleStateInterface, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default exampleModule;