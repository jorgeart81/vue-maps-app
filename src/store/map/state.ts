import { MapState } from '../../interfaces';

function state(): MapState {
    return {
        distance: undefined,
        duration: undefined,
        map: undefined,
        markers: [],
    }
}

export default state;