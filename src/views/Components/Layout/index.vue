<template>
  <div class="layout">
    <h1>布局 / Layout</h1>
    <tip>事实上这个组件用了也不一定省事</tip>
    <h2>行</h2>
    <ASRow class="bg bg-1"></ASRow>
    <Code code="<ASRow class=''></ASRow>"> </Code>
    <h2>列</h2>
    <ASRow>
      <ASCol span="6" class="bg bg-1"></ASCol>
      <ASCol span="18" class="bg bg-2"></ASCol>
    </ASRow>
    <ASRow>
      <ASCol span="20" class="bg bg-1"></ASCol>
      <ASCol span="4" class="bg bg-2"></ASCol>
    </ASRow>
    <h1>API</h1>
    <h2>Row Props</h2>
    <ApiTable :api="api1"></ApiTable>
    <h2>Col Props</h2>
    <ApiTable :api="api2"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASRow, ASCol } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";
export default {
  name: "Layout",
  components: { ASRow, ASCol, Code, ApiTable },
  setup() {
    const api1 = [
      {
        name: "align",
        type: "string",
        default: "'top'",
        option: "'top', 'middle', 'bottom'",
        desc: "垂直对齐",
      },
      {
        name: "gutter",
        type: "number, string",
        default: "0",
        option: "-",
        desc: "间隔",
      },
      {
        name: "justify",
        type: "string",
        default: "'start'",
        option: "'start', 'end', 'center', 'space-around', 'space-between'",
        desc: "水平对齐",
      },
      {
        name: "tag",
        type: "HTMLElementTagNameMap",
        default: "div",
        option: "-",
        desc: "标签名",
      },
    ];
    const api2 = [
      {
        name: "id",
        type: "string",
        default: "-",
        option: "-",
        desc: "标识符",
      },
      {
        name: "tag",
        type: "HTMLElementTagNameMap",
        default: "div",
        option: "-",
        desc: "标签名",
      },
      {
        name: "span",
        type: "string, number",
        default: "24",
        option: "[1-24]",
        desc: "所占列数",
      },
      {
        name: "offset",
        type: "string, number",
        default: "0",
        option: "-",
        desc: "偏移",
      },
    ];
    return { api1, api2 };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
.bg {
  height: 2.25rem;
  border-radius: 5px;
  margin: 0.2rem 0;
}
.bg-1 {
  @include background_color(theme_color);
}
.bg-2 {
  @include background_transparent(theme_color, 0.5);
}
</style>