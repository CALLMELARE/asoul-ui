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

    <h2>组合</h2>
    <ASCheckboxGroup>
      <ASCheckBox size="medium">第一个选项</ASCheckBox
      ><ASCheckBox size="medium">第二个选项</ASCheckBox
      ><ASCheckBox size="medium">第三个选项</ASCheckBox>
    </ASCheckboxGroup>

    <h1>API</h1>
    <h2>Checkbox Props</h2>
    <ApiTable :api="checkboxApi"></ApiTable>
    <h2>CheckboxGroup Props</h2>
    <ApiTable :api="checkboxGroupApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASCheckBox, ASCheckboxGroup } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import checkboxApi from "./apis/checkbox-api.json";
import checkboxGroupApi from "./apis/checkboxGroup-api.json";

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

    return { open, jump, checkboxApi, checkboxGroupApi };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
