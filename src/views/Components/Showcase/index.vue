<template>
  <div class="showcase">
    <h1>橱窗 / Showcase</h1>
    <tip>用来在背景图片上写些内容</tip>
    <ASShowcase :src="img" height="700">
      <p style="font-size: 3rem">ASoul Showcase</p>
    </ASShowcase>
    <Code code="<ASShowcase :src='img'>...</ASShowcase>"></Code>

    <h1>API</h1>
    <h2>Showcase Props</h2>
    <ApiTable :api="showcaseApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASShowcase } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import showcaseApi from "./apis/showcase-api.json";

import { useRouter } from "vue-router";
export default {
  name: "Showcase",
  components: { ASShowcase, Code, ApiTable },
  setup() {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }
    const img = require("../../../assets/asoulall.png");

    return { open, jump, showcaseApi, img };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
