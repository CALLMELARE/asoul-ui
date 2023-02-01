<template>
  <div class="customize-theme">
    <h1>{{$t("docs.CustomizeTheme.name")}}</h1>
    <tip>Todo</tip>
  </div>
</template>

<script lang="ts">
import {} from "asoul-ui";
import { useRouter } from "vue-router";
export default {
  name: "CustomizeTheme",
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
@import "../../style.scss";
</style>