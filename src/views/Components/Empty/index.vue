<template>
  <div class="card">
    <h1>空状态 / Empty</h1>
    <tip>没东西可展示时，显示这个</tip>
    <h2>基础</h2>
    <ASEmpty />
    <Code code="<ASEmpty />"></Code>
    <h2>自定义描述</h2>
    <ASEmpty description="Nothing here" /><Code
      code="<ASEmpty description='Nothing here' />"
    ></Code>
    <h1>API</h1>
    <h2>Empty Props</h2>
    <ApiTable :api="emptyApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASEmpty } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";
import { WifiOff20Filled } from "@vicons/fluent";

import emptyApi from "./apis/empty-api.json";

export default {
  name: "Empty",
  components: { ASEmpty, Code, ApiTable },
  setup() {
    return { open, emptyApi, WifiOff20Filled };
  },
};
</script>

<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
