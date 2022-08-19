import { PlacesState } from "../../interfaces";

function state(): PlacesState {
    return {
        isLoading: true,
        isLoadingPlaces: false,
        places: [],
        userLocation: undefined,
    }
}

export default state;