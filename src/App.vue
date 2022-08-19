<script setup lang="ts">
</script>

<template>
  <!-- <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <router-view></router-view>
  <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />

</template>

<style scoped>
.logo {
  width: 100px;
  /* padding: 1.5em; */
  will-change: filter;
  position: fixed;
  bottom: 30px;
  right: 30px;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
