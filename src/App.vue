<template>
  <div class="app">
    <keep-alive>
      <Navbar></Navbar>
    </keep-alive>
    <router-view />
  </div>
</template>

<script>
import useTheme from "asoul-ui/utils/theme/useTheme";
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  setup() {
    useTheme("light");
  },
};
</script>

<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";

body {
  margin: 0;
}
.app {
  @include background_color(invert_color);
  height: 100vh;
}
</style>
