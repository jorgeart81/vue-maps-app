import { createStore } from 'vuex';

import { StateInterface } from '../interfaces';
// My custom modules
import placesModule from './places'
import mapModule from './map'


export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule
  }
})