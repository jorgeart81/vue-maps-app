import { ActionTree } from 'vuex';
import { StateInterface } from '../../interfaces';
import { ExampleStateInterface } from './state';


const actions: ActionTree<ExampleStateInterface, StateInterface> = {
    someAction( /*{ commit }, payload  */ ) {
        // a line to prevent linter errors
    }
}



export default actions;