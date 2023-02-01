<template>
  <div class="tabs">
    <h1>标签页 / Tabs</h1>
    <tip>它让你在同一块地方切换不同内容</tip>
    <h2>基础</h2>
    <ASTabs>
      <ASTab title="向晚">《水母之歌》</ASTab>
      <ASTab title="贝拉">《Shiny Dancer》</ASTab>
      <ASTab title="珈乐">《红色高跟鞋》</ASTab>
      <ASTab title="嘉然">《猫中毒》</ASTab>
      <ASTab title="乃琳">《迷迭香》</ASTab>
    </ASTabs>
    <Code
      code="<ASTabs><ASTab title='向晚'>《水母之歌》</ASTab>...</ASTabs>"
    ></Code>

    <h1>API</h1>
    <h2>Tab Props</h2>
    <ApiTable :api="api1"></ApiTable>
    <h2>Tabs Props</h2>
    <ApiTable :api="api2"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASTab, ASTabs } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";
import { useRouter } from "vue-router";
export default {
  name: "Tabs",
  components: { ASTab, ASTabs, Code, ApiTable },
  setup() {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }
    const api1 = [
      {
        name: "title",
        type: "string",
        default: "-",
        option: "-",
        desc: "标签名",
      },
      {
        name: "value",
        type: "string,number",
        default: "-",
        option: "-",
        desc: "标签值",
      },
    ];
    const api2 = [
      {
        name: "select",
        type: "string,number",
        default: "0",
        option: "",
        desc: "指定标签",
      },
    ];
    return { open, jump, api1, api2 };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>