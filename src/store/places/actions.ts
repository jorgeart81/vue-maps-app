import { ActionTree } from 'vuex';
import { searchApi } from '../../apis';
import { Location, PlacesResponse, PlacesState, StateInterface } from '../../interfaces';
import { Feature } from '../../interfaces/mapbox';



const actions: ActionTree<PlacesState, StateInterface> = {

    getInitialLocation({ commit }) {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                const location: Location = { lng: coords.longitude, lat: coords.latitude }
                commit('setLngLat', location)
            },
            (err) => {
                console.error(err);
                throw new Error('No geolocation');
            }
        )
    },

    async searchPlacesByTerm({ commit, state }, query: string): Promise<Feature[]> {

        if (query.length === 0) {
            commit('setPlaces', [])
            return []
        }

        if (!state.userLocation) {
            throw new Error('No hay ubicación del usuario')
        }

        commit('setIsLoadingPlaces')

        const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: [state.userLocation?.lng, state.userLocation?.lat]
            }
        })

        commit('setPlaces', resp.data.features)

        return resp.data.features
    }
}


export default actions;