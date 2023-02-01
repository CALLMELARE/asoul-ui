<template>
  <div class="result">
    <h1>结果页 / Result</h1>
    <tip>Todo</tip>
    <h2>信息</h2>
    <ASResult type="info" title="Info" subtitle="Say something..."></ASResult>
    <Code
      code="<ASResult type='info' title='Info' subtitle='Say something...'></ASResult>"
    ></Code>
    <h2>成功</h2>
    <ASResult
      type="success"
      title="Success"
      subtitle="Say something..."
    ></ASResult>
    <Code
      code="<ASResult type='success' title='Success' subtitle='Say something...'></ASResult>"
    ></Code>
    <h2>警告</h2>
    <ASResult
      type="warning"
      title="Warning"
      subtitle="Say something..."
    ></ASResult>
    <Code
      code="<ASResult type='warning' title='Warning' subtitle='Say something...'></ASResult>"
    ></Code>
    <h2>错误</h2>
    <ASResult type="error" title="Error" subtitle="Say something..."></ASResult>
    <Code
      code="<ASResult type='error' title='Error' subtitle='Say something...'></ASResult>"
    ></Code>
    <h1>API</h1>
    <h2>Result Props</h2>
    <ApiTable :api="api"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASResult } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";
export default {
  name: "Result",
  components: { ASResult, Code, ApiTable },
  setup() {
    const api = [
      {
        name: "type",
        type: "string",
        default: "-",
        option: "'primary', 'success', 'warning', 'error', 'info'",
        desc: "类型",
      },
      {
        name: "title",
        type: "string",
        default: "-",
        option: "-",
        desc: "标题",
      },
      {
        name: "subtitle",
        type: "string",
        default: "-",
        option: "-",
        desc: "副标题",
      },
    ];
    return { api };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>