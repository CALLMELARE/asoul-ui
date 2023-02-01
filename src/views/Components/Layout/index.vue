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
    <ApiTable :api="colApi"></ApiTable>
    <h2>Col Props</h2>
    <ApiTable :api="rowApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASRow, ASCol } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import colApi from "./apis/col-api.json";
import rowApi from "./apis/row-api.json";

export default {
  name: "Layout",
  components: { ASRow, ASCol, Code, ApiTable },
  setup() {
    return { colApi, rowApi };
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
  background-color: var(--theme_color);
}
.bg-2 {
  background-color: var(--theme_color_50);
}
</style>
