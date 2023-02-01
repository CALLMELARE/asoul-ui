<template>
  <div class="components">
    <ASRow class="components-control">
      <ASCol style="min-width: 15rem" span="3">
        <Menu :list="menuList" :key="new Date().getTime()"></Menu>
      </ASCol>
      <ASCol style="max-width: calc(100% - 15rem)" span="21">
        <div class="components-container">
          <router-view></router-view>
        </div>
      </ASCol>
    </ASRow>
  </div>
</template>

<script lang="ts">
import { ASCol, ASRow } from "asoul-ui";
import Menu from "../../components/Menu.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
export default {
  name: "Components",
  components: { Menu, ASCol, ASRow },
  setup() {
    const { t } = useI18n();

    const menuList = computed(() => {
      return [
        {
          name: t("components.layout.name"),
          path: "components",
          children: [{ name: t("components.layout.Layout"), path: "layout" }],
        },
        {
          name: t("components.common.name"),
          path: "components",
          children: [
            // { name: "头像 / Avatar", path: "avatar" },
            { name: t("components.common.Button"), path: "button" },
            { name: t("components.common.Card"), path: "card" },
            {
              name: t("components.common.GradientText"),
              path: "gradient-text",
            },
            { name: t("components.common.Icon"), path: "icon" },
            { name: t("components.common.Showcase"), path: "showcase" },
            { name: t("components.common.Tag"), path: "tag" },
            // { name: t("components.common.Typography"), path: "typography" },
          ],
        },
        {
          name: t("components.input.name"),
          path: "components",
          children: [
            { name: t("components.input.Checkbox"), path: "checkbox" },
            { name: t("components.input.Radio"), path: "radio" },
            { name: t("components.input.TextField"), path: "text-field" },
          ],
        },
        {
          name: t("components.display.name"),
          path: "components",
          children: [
            { name: t("components.display.Statistic"), path: "statistic" },
            { name: t("components.display.NumberFlow"), path: "number-flow" },
          ],
        },
        {
          name: t("components.navi.name"),
          path: "components",
          children: [
            { name: t("components.navi.Tabs"), path: "tabs" },
            { name: t("components.navi.Breadcrumb"), path: "breadcrumb" },
          ],
        },
        {
          name: t("components.feedback.name"),
          path: "components",
          children: [
            { name: t("components.feedback.Alert"), path: "alert" },
            { name: t("components.feedback.Progress"), path: "progress" },
            { name: t("components.feedback.Result"), path: "result" },
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

.components {
  position: relative;
  height: calc(100vh - 3.75rem - 1px);
  .components-control {
    min-height: calc(100vh - 3.75rem - 1px);
    display: flex;
  }
  .components-container {
    overflow-y: auto;
    padding: 2rem;
    height: calc(100vh - 7.75rem - 1px);
    max-height: calc(100vh - 7.75rem - 1px);
  }
}
</style>
