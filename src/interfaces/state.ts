import { PlacesState } from "./places";
import { MapState } from './map';

export interface StateInterface {
    places: PlacesState;
    map: MapState
}
