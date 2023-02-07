<template>
  <div class="customize-theme">
    <h1>{{ $t("docs.CustomizeTheme.name") }}</h1>
    <tip>可通过重新定义 CSS 变量实现主题定制</tip>
    <h2>内置主题</h2>
    <div class="theme-btns">
      <div @click="changeTheme('ava')" class="theme-btn ava">
        <span class="block"></span>Ava
      </div>
      <div @click="changeTheme('bella')" class="theme-btn bella">
        <span class="block"></span>Bella
      </div>
      <div @click="changeTheme('carol')" class="theme-btn carol">
        <span class="block"></span>Carol
      </div>
      <div @click="changeTheme('diana')" class="theme-btn diana">
        <span class="block"></span>Diana
      </div>
      <div @click="changeTheme('eileen')" class="theme-btn eileen">
        <span class="block"></span>Eileen
      </div>
    </div>
    <h2>CSS 变量</h2>
    <tip>位于 :root</tip>
    <p>--asoul-theme-color: #576690;</p>
    <p>--asoul-theme-color-90: rgba(87, 102, 144, 0.9);</p>
    <p>--asoul-theme-color-80: rgba(87, 102, 144, 0.8);</p>
    <p>--asoul-theme-color-70: rgba(87, 102, 144, 0.7);</p>
    <p>--asoul-theme-color-60: rgba(87, 102, 144, 0.6);</p>
    <p>--asoul-theme-color-50: rgba(87, 102, 144, 0.5);</p>
    <p>--asoul-theme-color-40: rgba(87, 102, 144, 0.4);</p>
    <p>--asoul-theme-color-30: rgba(87, 102, 144, 0.3);</p>
    <p>--asoul-theme-color-20: rgba(87, 102, 144, 0.2);</p>
    <p>--asoul-theme-color-10: rgba(87, 102, 144, 0.1);</p>
    <p>--asoul-primary-color: #252525;</p>
    <p>--asoul-primary-color-12: rgba(37, 37, 37, 0.12);</p>
    <p>--asoul-secondary-color: #656667;</p>
    <p>--asoul-secondary-color-90: rgba(101, 102, 103, 0.9);</p>
    <p>--asoul-secondary-color-80: rgba(101, 102, 103, 0.8);</p>
    <p>--asoul-secondary-color-30: rgba(101, 102, 103, 0.3);</p>
    <p>--asoul-sub-color: #cccccc;</p>
    <p>--asoul-sub-color-90: rgba(204, 204, 204, 0.9);</p>
    <p>--asoul-sub-color-80: rgba(204, 204, 204, 0.8);</p>
    <p>--asoul-sub-color-60: rgba(204, 204, 204, 0.6);</p>
    <p>--asoul-invert-color: #ffffff;</p>
    <p>--asoul-invert-color-30: rgba(255, 255, 255, 0.3);</p>
    <p>--asoul-error-dark: #eb003b;</p>
    <p>--asoul-error-dark-30: rgba(235, 0, 59, 0.3);</p>
    <p>--asoul-warning-dark: #ffc300;</p>
    <p>--asoul-warning-dark-30: rgba(255, 195, 0, 0.3);</p>
    <p>--asoul-success-dark: #00b945;</p>
    <p>--asoul-success-dark-30: rgba(0, 185, 69, 0.3);</p>
  </div>
</template>

<script lang="ts">
import { ASButton } from "asoul-ui";
import { presetThemes } from "asoul-ui/utils/theme";
import {
  generateAllDerivedCSSVariables,
  applyTheme,
} from "asoul-ui/utils/theme/useTheme";
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

    function changeTheme(
      themeCode: "ava" | "bella" | "carol" | "diana" | "eileen"
    ) {
      const theme = presetThemes[themeCode];
      let arr = [];

      arr.push({
        variable: "--asoul-theme-color",
        value: theme["--asoul-theme-color"],
      });
      arr.push({
        variable: "--asoul-primary-color",
        value: theme["--asoul-primary-color"],
      });
      arr.push({
        variable: "--asoul-secondary-color",
        value: theme["--asoul-secondary-color"],
      });
      arr.push({
        variable: "--asoul-sub-color",
        value: theme["--asoul-sub-color"],
      });
      arr.push({
        variable: "--asoul-invert-color",
        value: theme["--asoul-invert-color"],
      });

      const allVars = generateAllDerivedCSSVariables(arr);
      applyTheme(allVars);
    }

    return { open, jump, changeTheme };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
.theme-btns {
  display: flex;
  .theme-btn {
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .block {
    display: block;
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  .ava {
    color: $AvaTheme;
    .block {
      background-color: $AvaTheme;
    }
  }
  .bella {
    color: $BellaTheme;
    .block {
      background-color: $BellaTheme;
    }
  }
  .carol {
    color: $CarolTheme;
    .block {
      background-color: $CarolTheme;
    }
  }
  .diana {
    color: $DianaTheme;
    .block {
      background-color: $DianaTheme;
    }
  }
  .eileen {
    color: $EileenTheme;
    .block {
      background-color: $EileenTheme;
    }
  }
}
</style>
