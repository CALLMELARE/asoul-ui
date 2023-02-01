<template>
  <div class="number-flow">
    <h1>滚动数值 / NumberFlow</h1>
    <tip>很酷，对吧</tip>
    <h2>基础</h2>
    <ASNumberFlow end="100" active />
    <Code code="<ASNumberFlow end='100' active/>"></Code>
    <h2>自定义区间</h2>
    <ASNumberFlow start="0" end="256" active />
    <Code code="<ASNumberFlow start='0' end='256' active/>"></Code>
    <h2>自定义持续时间</h2>
    <ASNumberFlow start="0" end="256" deration="10000" active />
    <Code
      code="<ASNumberFlow start='0' end='256' deration='10000' active/>"
    ></Code>
    <h1>API</h1>
    <h2>NumberFlow Props</h2>
    <ApiTable :api="numberFlowApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASNumberFlow } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import numberFlowApi from "./apis/numberFlow-api.json";

export default {
  name: "Progress",
  components: { ASNumberFlow, Code, ApiTable },
  setup() {
    return { numberFlowApi };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
