<template>
  <div class="install">
    <h1>{{ $t("docs.Install.name") }}</h1>
    <tip>{{ $t("docs.Install.tip") }}</tip>
    <h2>npm</h2>
    <text>{{ $t("docs.Install.useXtoInstall", { mode: "npm" }) }}</text>
    <Code code="npm install -D asoul-ui"></Code>
    <h2>cnpm</h2>
    <text>{{ $t("docs.Install.useXtoInstall", { mode: "cnpm" }) }}</text>
    <Code code="cnpm install -D asoul-ui"></Code>
    <h2>{{ $t("docs.Install.icon") }}</h2>
    <text>
      {{ $t("docs.Install.iconlib") }}
      <ASButton type="text" @click="open('https://www.xicons.org')">
        xicons
      </ASButton>
    </text>
  </div>
</template>

<script lang="ts">
import { ASButton } from "asoul-ui";
import Code from "../../../components/Code.vue";
import { useRouter } from "vue-router";
export default {
  name: "Install",
  components: { ASButton, Code },
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
<style lang="scss" scoped>
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>