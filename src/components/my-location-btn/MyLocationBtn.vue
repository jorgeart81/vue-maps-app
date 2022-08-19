<template>
    <button v-if="isBtnReady" @click="onMyLocationClicked" class="btn btn-primary">
        Ir a mi ubicación
    </button>
</template>

<script setup lang="ts">
import { useMapStore, usePlacesStore } from '@/composables';
import { computed } from '@vue/reactivity';


const { userLocation, isUserLocationReady } = usePlacesStore()
const { map, isMapReady } = useMapStore()

const isBtnReady = computed<boolean>(() => isUserLocationReady.value && isMapReady.value)

const onMyLocationClicked = () => {
    map.value?.flyTo({
        center: [userLocation.value!.lng, userLocation.value!.lat],
        zoom: 14
    })
}
</script>

<style scoped>
button {
    position: fixed;
    top: 30px;
    right: 30px;
}
</style>