<template>
  <div class="icon">
    <h1>图标 / Icon</h1>
    <tip>用来在背景图片上写些内容</tip>
    <h2>基础</h2>
    <ASIcon>
      <Wrench16Regular />
    </ASIcon>
    <Code code="<ASIcon :src='img'>...</ASIcon>"></Code>

    <h1>API</h1>
    <h2>Icon Props</h2>
    <ApiTable :api="iconApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASIcon } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import iconApi from "./apis/icon-api.json";

import { Wrench16Regular } from "@vicons/fluent";
export default {
  name: "Icon",
  components: { ASIcon, Code, ApiTable, Wrench16Regular },
  setup() {
    return { iconApi };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
