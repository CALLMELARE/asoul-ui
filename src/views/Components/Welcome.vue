<template>
  <div class="welcome">
    <div class="welcome-text">ASoul</div>
    <div class="welcome-subtext">
      {{$t("welcome")}}
    </div>
  </div>
</template>

<script lang="ts">
import {} from "asoul-ui";
import { useRouter } from "vue-router";
export default {
  name: "Welcome",
  components: {},
  setup() {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }
    return { open, jump };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  .welcome-text {
    cursor: default;
    user-select: none;
    font-size: 4rem;
    letter-spacing: 0.25rem;
    @include font_transparent(theme_color, 0.9);
    animation: focus-in-contract-bck 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
  }
  .welcome-subtext {
    @include font_color(theme_color);
    animation: blink infinite 3s;
    letter-spacing: 0.25rem;
  }
}

@keyframes blink {
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.8;
  }
}

@keyframes focus-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(300px);
    transform: translateZ(300px);
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(12px);
    transform: translateZ(12px);
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
</style>