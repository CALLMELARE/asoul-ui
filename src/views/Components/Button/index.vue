<template>
  <div class="button">
    <h1>按钮 / Button</h1>
    <tip>按钮用来触发一些动作</tip>
    <h2>基础</h2>
    <ASButton>Default</ASButton>
    <Code code="<ASButton>Default</ASButton>"></Code>
    <h2>加载中</h2>
    <ASButton loading>Loading</ASButton>
    <Code code="<ASButton loading>Loading</ASButton>"></Code>
    <h2>禁用</h2>
    <ASButton disabled>Disabled</ASButton>
    <Code code="<ASButton disabled>Disabled</ASButton>"></Code>
    <h2>外框线</h2>
    <ASButton type="outlined">Outlined</ASButton>
    <Code code="<ASButton type='outlined'>Outlined</ASButton>"></Code>
    <h2>文本</h2>
    <ASButton type="text">Text</ASButton>
    <Code code="<ASButton type='text'>Text</ASButton>"></Code>
    <h2>毛玻璃</h2>
    <tip
      >使用backdrop-filter实现，浏览器兼容性请查看<ASButton
        type="text"
        @click="
          open(
            'https://developer.mozilla.org/zh-CN/docs/Web/CSS/backdrop-filter'
          )
        "
        >MDN：backdrop-filter</ASButton
      ></tip
    >
    <ASButton type="glass">Glass</ASButton>
    <Code code="<ASButton type='glass'>Glass</ASButton>"></Code>
    <h2>独占一行</h2>
    <ASButton block>Block</ASButton>
    <Code code="<ASButton block>Block</ASButton>"></Code>
    <h2>尺寸</h2>
    <ASButton size="mini">Mini</ASButton>
    <Code code="<ASButton size='mini'>Mini</ASButton>"></Code>
    <ASButton size="small">Small</ASButton>
    <Code code="<ASButton size='small'>Small</ASButton>"></Code>
    <ASButton size="medium">Medium</ASButton>
    <Code code="<ASButton size='medium'>Medium</ASButton>"></Code>
    <ASButton size="large">Large</ASButton>
    <Code code="<ASButton size='large'>Large</ASButton>"></Code>
    <h2>颜色</h2>
    <ASButton color="primary">Primary</ASButton>
    <Code code="<ASButton color='primary'>Primary</ASButton>"></Code>
    <ASButton color="success">Success</ASButton>
    <Code code="<ASButton color='success'>Success</ASButton>"></Code>
    <ASButton color="warning">Warning</ASButton>
    <Code code="<ASButton color='warning'>Warning</ASButton>"></Code>
    <ASButton color="error">Error</ASButton>
    <Code code="<ASButton color='error'>Error</ASButton>"></Code>
    <h1>API</h1>
    <h2>Button Props</h2>
    <ApiTable :api="buttonApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASButton } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import buttonApi from "./apis/button-api.json";

import { useRouter } from "vue-router";
export default {
  name: "Button",
  components: { ASButton, Code, ApiTable },
  setup() {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }

    return { open, jump, buttonApi };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
