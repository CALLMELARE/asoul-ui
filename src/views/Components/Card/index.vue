<template>
  <div class="card">
    <h1>卡片 / Card</h1>
    <tip>Todo</tip>
    <h2>基础</h2>
    <ASCard>平平无奇的卡片</ASCard>
    <Code code="<ASCard>Text</ASCard>"></Code>
    <h2>悬浮</h2>
    <ASCard hoverable>你可以试着把鼠标挪到这里</ASCard>
    <Code code="<ASCard hoverable>你可以试着把鼠标挪到这里</ASCard>"></Code>
    <h2>阴影</h2>
    <ASCard shadow>求阴影面积</ASCard>
    <Code code="<ASCard shadow>求阴影面积</ASCard>"></Code>
    <h2>反色</h2>
    <ASCard inverse>反转了，是乃琳应援色</ASCard>
    <Code code="<ASCard inverse>反转了，是乃琳应援色</ASCard>"></Code>
    <h1>API</h1>
    <h2>Card Props</h2>
    <ApiTable :api="cardApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASCard } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import cardApi from "./apis/card-api.json";

import { useRouter } from "vue-router";
export default {
  name: "Card",
  components: { ASCard, Code, ApiTable },
  setup() {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }

    return { open, jump, cardApi };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
