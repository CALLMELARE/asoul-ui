<template>
  <div class="gradient-text">
    <h1>渐变文字 / GradientText</h1>
    <tip>不过是好看罢了</tip>
    <h2>基础</h2>
    <ASGradientText>Gradient Text</ASGradientText>
    <Code code="<ASGradientText>Gradient Text</ASGradientText>"></Code>
    <h2>类型</h2>
    <ASGradientText type="success">Success</ASGradientText>
    <Code code="<ASGradientText type='success'>Success</ASGradientText>"></Code>
    <ASGradientText type="warning">Warning</ASGradientText>
    <Code code="<ASGradientText type='warning'>Warning</ASGradientText>"></Code>
    <ASGradientText type="error">Error</ASGradientText>
    <Code code="<ASGradientText type='error'>Error</ASGradientText>"></Code>
    <h1>API</h1>
    <h2>GradientText Props</h2>
    <ApiTable :api="gradientTextApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASGradientText } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import gradientTextApi from "./apis/gradientText-api.json";

import { useRouter } from "vue-router";
export default {
  name: "GradientText",
  components: { ASGradientText, Code, ApiTable },
  setup() {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }

    return { open, jump, gradientTextApi };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
