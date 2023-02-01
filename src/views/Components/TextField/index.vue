<template>
  <div class="text-field">
    <h1>文本框 / TextField</h1>
    <tip>获取用户输入的文本</tip>
    <h2>基础</h2>
    <ASTextField placeholder="TextField"></ASTextField>
    <Code code="<ASTextField placeholder='TextField'></ASTextField>"></Code>
    <h2>标签</h2>
    <ASTextField label="Label"></ASTextField>
    <Code code="<ASTextField label='Label'></ASTextField>"></Code>
    <h2>禁用</h2>
    <ASTextField value="Disabled" disabled></ASTextField>
    <Code code="<ASTextField value='Disabled' disabled></ASTextField>"></Code>
    <h2>独占一行</h2>
    <ASTextField value="Block" block></ASTextField>
    <Code code="<ASTextField value='Block' block></ASTextField>"></Code>
    <h1>API</h1>
    <h2>TextField Props</h2>
    <ApiTable :api="api"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASTextField } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";
export default {
  name: "TextField",
  components: { ASTextField, Code, ApiTable },
  setup() {
    const api = [
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        option: "-",
        desc: "是否禁用",
      },
      {
        name: "label",
        type: "string",
        default: "-",
        option: "-",
        desc: "标签",
      },
      {
        name: "block",
        type: "boolean",
        default: "false",
        option: "-",
        desc: "独占一行",
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