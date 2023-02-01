<template>
  <div class="Checkbox">
    <h1>复选框 / Checkbox</h1>
    <tip>小孩子才做选择题，成年人全都要</tip>
    <h2>基础</h2>
    <ASCheckBox>ASoul</ASCheckBox>
    <Code code="<ASCheckBox>ASoul</ASCheckBox>"></Code>
    <h2>禁用</h2>
    <ASCheckBox disabled>没得选</ASCheckBox>
    <Code code="<ASCheckBox disabled>没得选</ASCheckBox>"></Code>
    <h2>尺寸</h2>
    <ASCheckBox size="mini">Mini Checkbox</ASCheckBox>
    <Code code="<ASCheckBox size='mini'>Mini Checkbox</ASCheckBox>"></Code>
    <ASCheckBox size="small">Small Checkbox</ASCheckBox>
    <Code code="<ASCheckBox size='small'>Small Checkbox</ASCheckBox>"></Code>
    <ASCheckBox size="medium">Medium Checkbox</ASCheckBox>
    <Code code="<ASCheckBox size='medium'>Medium Checkbox</ASCheckBox>"></Code>
    <ASCheckBox size="large">Large Checkbox</ASCheckBox>
    <Code code="<ASCheckBox size='large'>Large Checkbox</ASCheckBox>"></Code>

    <h1>API</h1>
    <h2>Checkbox Props</h2>
    <ApiTable :api="checkboxApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASCheckBox } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import checkboxApi from "./apis/checkbox-api.json";

import { useRouter } from "vue-router";
export default {
  name: "Checkbox",
  components: { ASCheckBox, Code, ApiTable },
  setup() {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }

    return { open, jump, checkboxApi };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
