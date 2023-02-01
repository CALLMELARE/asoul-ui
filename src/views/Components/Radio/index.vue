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
    <ASRadioGroup>
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
    <ApiTable :api="radioApi"></ApiTable>
    <h2>RadioGroup Props</h2>
    <ApiTable :api="radioGroupApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASRadio, ASRadioGroup } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import radioApi from "./apis/radio-api.json";
import radioGroupApi from "./apis/radioGroup-api.json";

export default {
  name: "Radio",
  components: { ASRadio, ASRadioGroup, Code, ApiTable },
  setup() {
    return { radioApi, radioGroupApi };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
