<template>
  <div class="Statistic">
    <h1>统计数据 / Statistic</h1>
    <tip>用来展示数字的</tip>
    <h2>基础</h2>
    <ASStatistic label="一个魂数量" value="1234567"></ASStatistic>
    <Code
      code="<ASStatistic label='一个魂数量' value='1234567'></ASStatistic>"
    ></Code>
    <h2>千分位分隔符</h2>
    <ASStatistic label="一个魂数量" value="1234567" separate></ASStatistic>
    <Code
      code="<ASStatistic label='一个魂数量' value='1234567' separate></ASStatistic>"
    ></Code>
    <h1>API</h1>
    <h2>Statistic Props</h2>
    <ApiTable :api="statisticApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASStatistic } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import statisticApi from "./apis/statistic-api.json";

import { useRouter } from "vue-router";
export default {
  name: "Statistic",
  components: { ASStatistic, Code, ApiTable },
  setup() {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }

    return { open, jump, statisticApi };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
