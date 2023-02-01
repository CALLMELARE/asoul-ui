<template>
  <div class="colors">
    <h1>{{ $t("docs.Color.name") }}</h1>
    <tip> {{ $t("docs.Color.tip") }} </tip>
    <h2>{{ $t("docs.Color.default.name") }}</h2>
    <CBlock
      :key="new Date().getTime()"
      :name="$t('docs.Color.default.themeColor')"
      var="primaryDefault"
      color="#576690"
    ></CBlock>
    <h2>{{ $t("docs.Color.alter.name") }}</h2>
    <tip> {{ $t("docs.Color.alter.tip") }}</tip>
    <CBlock name="向晚 Ava" var="AvaTheme" color="#9AC8E2"></CBlock>
    <CBlock name="贝拉 Bella" var="BellaTheme" color="#BD7D74"></CBlock>
    <CBlock name="珈乐 Carol" var="CarolTheme" color="#B8A6D9"></CBlock>
    <CBlock name="嘉然 Diana" var="DianaTheme" color="#E799B0"></CBlock>
    <CBlock name="乃琳 Eileen" var="EileenTheme" color="#576690"></CBlock>
    <h2>{{ $t("docs.Color.common.name") }}</h2>
    <CBlock name="Black" var="black" color="#252525"></CBlock>
    <CBlock name="Gray" var="gray" color="#656667"></CBlock>
    <CBlock
      name="Gray Light"
      var="grayLight"
      color="#CCCCCC
"
    ></CBlock>
    <h2>{{ $t("docs.Color.state.name") }}</h2>
    <h3>{{ $t("docs.Color.success") }}</h3>
    <CBlock name="Success Light" var="successLight" color="#58E000"></CBlock>
    <CBlock
      name="Success Default"
      var="successDefault"
      color="#14D100"
    ></CBlock>
    <CBlock name="Success Dark" var="successDark" color="#00B945"></CBlock>
    <h3>{{ $t("docs.Color.warning") }}</h3>
    <CBlock name="Warning Light" var="warningLight" color="#FFDE00"></CBlock>
    <CBlock
      name="Warning Default"
      var="warningDefault"
      color="#FFD100"
    ></CBlock>
    <CBlock name="Warning Dark" var="warningDark" color="#FFC300"></CBlock>
    <h3>{{ $t("docs.Color.error") }}</h3>
    <CBlock name="Error Light" var="errorLight" color="#FF2C00"></CBlock>
    <CBlock name="Error Default" var="errorDefault" color="#FB000D"></CBlock>
    <CBlock name="Error Dark" var="errorDark" color="#EB003B"></CBlock>
  </div>
</template>

<script lang="ts">
import {} from "asoul-ui";
import { useRouter } from "vue-router";
import CBlock from "../../../components/ColorBlock.vue";
export default {
  name: "Colors",
  components: { CBlock },
  setup() {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }
    return { open, jump };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
.colors {
}
</style>