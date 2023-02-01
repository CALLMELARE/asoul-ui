<template>
  <div class="docs">
    <ASRow class="docs-control">
      <ASCol style="min-width: 15rem" span="3">
        <Menu :list="menuList" :key="new Date().getTime()"></Menu>
        <!-- :key="new Date().getTime()" -->
        <!-- 奇技淫巧：重载组件实现i18n语言切换 -->
      </ASCol>
      <ASCol style="max-width: calc(100% - 15rem)" span="21">
        <div class="docs-container">
          <router-view></router-view>
        </div>
      </ASCol>
    </ASRow>
  </div>
</template>

<script lang="ts">
import { ASCol, ASRow } from "asoul-ui";
import Menu from "../../components/Menu.vue";
import { useI18n } from "vue-i18n";
import { computed } from "@vue/reactivity";
export default {
  name: "Docs",
  components: { ASCol, ASRow, Menu },
  setup() {
    const { t } = useI18n();

    const menuList = computed(() => {
      return [
        {
          name: t("docs.GetStarted"),
          path: "docs",
          children: [
            { name: t("docs.Install.name"), path: "install" },
            { name: t("docs.ImportOnDemand"), path: "import-on-demand" },
          ],
        },
        {
          name: t("docs.Theme"),
          path: "docs",
          children: [
            { name: t("docs.Color.name"), path: "colors" },
            { name: t("docs.CustomizeTheme.name"), path: "customize-theme" },
          ],
        },
      ];
    });

    return { menuList };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
.docs {
  position: relative;
  height: calc(100vh - 3.75rem - 1px);
  .docs-control {
    min-height: calc(100vh - 3.75rem - 1px);
    display: flex;
  }
  .docs-container {
    overflow-y: auto;
    padding: 2rem;
    height: calc(100vh - 7.75rem - 1px);
    max-height: calc(100vh - 7.75rem - 1px);
  }
}
</style>
