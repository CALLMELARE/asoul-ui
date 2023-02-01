<template>
  <div class="radio">
    <h1>单选 / Radio</h1>
    <tip>冷知识：人类曾经借助收音机来获取新闻</tip>
    <h2>基础</h2>
    <ASRadio>Radio</ASRadio>
    <Code code="<ASRadio>Radio</ASRadio>"></Code>
    <h2>选中状态</h2>
    <ASRadio checked>Checked Radio</ASRadio>
    <Code code="<ASRadio checked>Checked Radio</ASRadio>"></Code>
    <h2>尺寸</h2>
    <ASRadio size="mini">Mini Radio</ASRadio>
    <Code code="<ASRadio size='mini'>Mini Radio</ASRadio>"></Code>
    <ASRadio size="small">Small Radio</ASRadio>
    <Code code="<ASRadio size='small'>Small Radio</ASRadio>"></Code>
    <ASRadio size="medium">Medium Radio</ASRadio>
    <Code code="<ASRadio size='medium'>Medium Radio</ASRadio>"></Code>
    <ASRadio size="large">Large Radio</ASRadio>
    <Code code="<ASRadio size='large'>Large Radio</ASRadio>"></Code>
    <h2>把圆角矩形换成圆</h2>
    <ASRadio rounded>Rounded Radio</ASRadio>
    <Code code="<ASRadio rounded>Rounded Radio</ASRadio>"></Code>
    <h2>选项组</h2>
    <tip>意味着你无法同时选中它们两个</tip>
    <ASRadioGroup >
      <ASRadio value="1">鱼</ASRadio>
      <ASRadio value="2">熊掌</ASRadio>
    </ASRadioGroup>
    <Code
      code="<ASRadioGroup><ASRadio value='1'>鱼</ASRadio><ASRadio value='2'>熊掌</ASRadio></ASRadioGroup>"
    ></Code>
    <h2>选项组横排</h2>
    <ASRadioGroup useRow>
      <ASRadio value="1">鱼</ASRadio>
      <ASRadio value="2">熊掌</ASRadio>
    </ASRadioGroup>
    <Code
      code="<ASRadioGroup useRow><ASRadio value='1'>鱼</ASRadio><ASRadio value='2'>熊掌</ASRadio></ASRadioGroup>"
    ></Code>
    <h1>API</h1>
    <h2>Radio Props</h2>
    <ApiTable :api="api1"></ApiTable>
    <h2>RadioGroup Props</h2>
    <ApiTable :api="api2"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASRadio, ASRadioGroup } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";
export default {
  name: "Radio",
  components: { ASRadio, ASRadioGroup, Code, ApiTable },
  setup() {
    const api1 = [
      {
        name: "checked",
        type: "boolean",
        default: "false",
        option: "-",
        desc: "选中状态",
      },
      {
        name: "rounded",
        type: "boolean",
        default: "false",
        option: "-",
        desc: "把圆角矩形换成圆",
      },
      {
        name: "size",
        type: "string",
        default: "'medium'",
        option: "'mini', 'small', 'medium', 'large'",
        desc: "尺寸",
      },
    ];
    const api2 = [
      {
        name: "initialValue",
        type: "string,number",
        default: "-",
        option: "-",
        desc: "默认值",
      },
      {
        name: "useRow",
        type: "boolean",
        default: "false",
        option: "-",
        desc: "横排",
      },
    ];
    return { api1, api2 };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>