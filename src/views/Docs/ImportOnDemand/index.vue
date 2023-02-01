<template>
  <div class="import-on-demand">
    <h1>{{$t("docs.ImportOnDemand")}}</h1>
    <tip>两种使用方法</tip>
    <h2>全局引入</h2>
    <h3>第一步：导入ASoul UI</h3>
    <Code code="import * as Component from 'asoul-ui'"></Code>
    <h3>第二步：在components:{...}中加入组件</h3>
    <Code code="components: { ...Component },"></Code>
    <h2>按需引入</h2>
    <h3>第一步：导入要用的组件</h3>
    <Code code="import { ASButton } from 'asoul-ui'"></Code>
    <h3>第二步：在components:{...}中加入组件</h3>
    <Code code="components: { ASButton },"></Code>
  </div>
</template>

<script lang="ts">
import {} from "asoul-ui";
import { useRouter } from "vue-router";
import Code from "../../../components/Code.vue";
export default {
  name: "ImportOnDemand",
  components: {Code},
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

.import-on-demand {
}
</style>