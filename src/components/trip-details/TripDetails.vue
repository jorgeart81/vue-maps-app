<template>
    <div v-if="distance" class="trip-container column">
        <div class="col">Distancia: <strong>{{ distance }} kms</strong></div>
        <div class="col">Duración: <strong>{{ duration }} minutos</strong></div>
    </div>
</template>

<script setup lang="ts">
import { useMapStore } from "@/composables";

const { distance, duration } = useMapStore()
</script>


<style scoped>
.trip-container {
    background-color: white;
    border-radius: 10px;
    bottom: 40px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 18px;
    right: 140px;
    padding: 10px;
    position: fixed;
    width: auto;
}

strong {
    color: #42b983;
}
</style>