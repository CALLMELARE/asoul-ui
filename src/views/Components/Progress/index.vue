<template>
  <div class="progress">
    <h1>进度 / Progress</h1>
    <tip>它能表达事情进行到什么程度了</tip>
    <h2>基础</h2>
    <ASProgress value="66.66"></ASProgress>
    <Code code="<ASProgress value='66.66'></ASProgress>"></Code>
    <h2>显示信息</h2>
    <ASProgress value="66.66" showInfo="true"></ASProgress>
    <Code code="<ASProgress value='66.66' showInfo='true'></ASProgress>"></Code>
    <h2>显示状态</h2>
    <ASProgress value="66.66" status="success"></ASProgress>
    <Code code="<ASProgress value='66.66' status='success'></ASProgress>"></Code
    ><ASProgress value="66.66" status="fail"></ASProgress>
    <Code code="<ASProgress value='66.66' status='fail'></ASProgress>"></Code>
    <ASProgress value="66.66" showInfo="true" active="true"></ASProgress>
    <Code
      code="<ASProgress value='66.66' showInfo='true' active='true'></ASProgress>"
    ></Code>
    <h2>自定义上限</h2>
    <ASProgress value="648" maxvalue="1024"></ASProgress>
    <Code code="<ASProgress value='648' maxvalue='1024'></ASProgress>"></Code>

    <h1>API</h1>
    <h2>Progress Props</h2>
    <ApiTable :api="progressApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASProgress } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import progressApi from "./apis/progress-api.json";

export default {
  name: "Progress",
  components: { ASProgress, Code, ApiTable },
  setup() {
    return { progressApi };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
