<script lang="ts" src="./SearchBar.ts">
import SearchResults from '../search-result/SearchResults.vue';

</script>

<template>
    <div class="searchbar-container">
        <input type="text" class="form-control" placeholder="Buscar lugares..." v-model="searchTerm">
        <SearchResults />
    </div>
</template>

<style scoped>
.searchbar-container {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    left: 30px;
    overflow: hidden;
    padding: 4px;
    position: fixed;
    top: 30px;
    width: 250px;
    z-index: 999;
}
</style>