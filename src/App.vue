<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import * as Component from "../packages";
export default {
  components: {
    ...Component
  }
};
</script>


<style lang="scss">
body {
  margin: 0;
}
.app {
  margin: 3rem;
  /* background-image: url("./assets/bg.jpeg"); */
  background-size: cover;
}
</style>
