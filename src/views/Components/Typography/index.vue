<template>
  <div class="typography">
    <h1>排版 / Typography</h1>
    <tip>Todo</tip>
    <ASH1>一级标题</ASH1>
    <Code code="<ASH1>一级标题</ASH1>"></Code>
    <ASH2>二级标题</ASH2>
    <Code code="<ASH2>二级标题</ASH2>"></Code>
    <ASH3>三级标题</ASH3>
    <Code code="<ASH3>三级标题</ASH3>"></Code>
    <ASTip>提示语</ASTip>
    <Code code="<ASTip>提示语</ASTip>"></Code>
    <ASText indent
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.</ASText
    >
    <Code code="<ASText indent>Lorem ipsum...</ASText>"></Code>
    <h1>API</h1>
    <h2>Typography Props</h2>
    <ApiTable :api="typographyApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASH1, ASH2, ASH3, ASTip, ASText } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import typographyApi from "./apis/typography-api.json";

import { useRouter } from "vue-router";
export default {
  name: "Typography",
  components: { ASH1, ASH2, ASH3, ASTip, ASText, Code, ApiTable },
  setup() {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }

    return { open, jump, typographyApi };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
