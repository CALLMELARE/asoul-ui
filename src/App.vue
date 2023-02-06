<template>
  <div class="app">
    <keep-alive>
      <Navbar></Navbar>
    </keep-alive>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";

body {
  margin: 0;
}
.app {
  background-color: var(--asoul-invert-color);
  height: 100vh;
}
</style>
