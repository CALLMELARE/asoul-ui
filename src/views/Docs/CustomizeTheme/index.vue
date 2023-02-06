<template>
  <div class="customize-theme">
    <h1>{{ $t("docs.CustomizeTheme.name") }}</h1>
    <tip>可通过重新定义 CSS 变量实现主题定制</tip>
    <h2>内置主题</h2>
    <ASButton @click="changeTheme('ava')">Ava</ASButton>
    <ASButton @click="changeTheme('bella')">Bella</ASButton>
    <ASButton @click="changeTheme('carol')">Carol</ASButton>
    <ASButton @click="changeTheme('diana')">Diana</ASButton>
    <ASButton @click="changeTheme('eileen')">Eileen</ASButton>
  </div>
</template>

<script lang="ts">
import { ASButton } from "asoul-ui";
import { presetThemes } from "asoul-ui/utils/theme";
import {
  generateAllDerivedCSSVariables,
  applyTheme,
} from "asoul-ui/utils/theme/useTheme";
import customizeThemeApi from "./apis/customizeTheme-api.json";
import ApiTable from "../../../components/ApiTable.vue";
import { useRouter } from "vue-router";
export default {
  name: "CustomizeTheme",
  components: { ASButton },
  setup() {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }

    const changeTheme = (themeCode: string) => {
      const theme = presetThemes[themeCode];
      let arr = [];
      for (const key in theme) {
        arr.push({ variable: key, value: theme[key] });
      }
      const allVars = generateAllDerivedCSSVariables(arr);
      applyTheme(allVars);
    };

    return { open, jump, changeTheme };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
