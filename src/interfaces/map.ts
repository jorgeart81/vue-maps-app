import Mapboxgl from 'mapbox-gl';

export interface MapState {
    map?: Mapboxgl.Map;
    markers: Mapboxgl.Marker[];
    distance?: number;
    duration?: number;
}
