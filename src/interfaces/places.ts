import { Feature } from "./mapbox";

export interface PlacesState {
    isLoading: boolean;
    userLocation?: Location; //lgn,lat
    places: Feature[];
    isLoadingPlaces: boolean;
}
export interface Location {
    lng: number;
    lat: number;
}