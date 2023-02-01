<template>
  <div class="tabs">
    <h1>标签页 / Tabs</h1>
    <tip>它让你在同一块地方切换不同内容</tip>
    <h2>基础</h2>
    <ASTabs>
      <ASTab title="向晚" value="0">《水母之歌》</ASTab>
      <ASTab title="贝拉" value="1">《Shiny Dancer》</ASTab>
      <ASTab title="珈乐" value="2">《红色高跟鞋》</ASTab>
      <ASTab title="嘉然" value="3">《猫中毒》</ASTab>
      <ASTab title="乃琳" value="4">《迷迭香》</ASTab>
    </ASTabs>
    <Code
      code="<ASTabs><ASTab title='向晚'>《水母之歌》</ASTab>...</ASTabs>"
    ></Code>

    <h1>API</h1>
    <h2>Tab Props</h2>
    <ApiTable :api="tabApi"></ApiTable>
    <h2>Tabs Props</h2>
    <ApiTable :api="tabsApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASTab, ASTabs } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import tabApi from "./apis/tab-api.json";
import tabsApi from "./apis/tabs-api.json";

import { useRouter } from "vue-router";
export default {
  name: "Tabs",
  components: { ASTab, ASTabs, Code, ApiTable },
  setup() {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }

    return { open, jump, tabApi, tabsApi };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
