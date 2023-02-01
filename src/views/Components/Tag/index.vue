<template>
  <div class="tag">
    <h1>标签 / Tag</h1>
    <tip>表面某种属性或特征</tip>
    <h2>基础</h2>
    <ASTag>Default</ASTag>
    <Code code="<ASTag>Default</ASTag>"></Code>
    <h2>禁用</h2>
    <ASTag disabled>Rounded</ASTag>
    <Code code="<ASTag disabled>Rounded</ASTag>"></Code>
    <h2>形状</h2>
    <ASTag rounded>Rounded</ASTag>
    <Code code="<ASTag rounded>Rounded</ASTag>"></Code>
    <h2>线框</h2>
    <ASTag outlined>Outlined</ASTag>
    <Code code="<ASTag outlined>Outlined</ASTag>"></Code>
    <h2>反色</h2>
    <ASTag invert>Invert</ASTag>
    <Code code="<ASTag invert>Invert</ASTag>"></Code>
    <h2>类型</h2>
    <ASTag type="success">Success</ASTag>
    <Code code="<ASTag type='success'>Success</ASTag>"></Code>
    <ASTag type="warning">Warning</ASTag>
    <Code code="<ASTag type='warning'>Warning</ASTag>"></Code>
    <ASTag type="error">Error</ASTag>
    <Code code="<ASTag type='error'>Error</ASTag>"></Code>
    <h2>尺寸</h2>
    <ASTag size="mini">Mini</ASTag>
    <Code code="<ASTag size='mini'>Mini</ASTag>"></Code>
    <ASTag size="small">Small</ASTag>
    <Code code="<ASTag size='small'>Small</ASTag>"></Code>
    <ASTag size="medium">Medium</ASTag>
    <Code code="<ASTag size='medium'>Medium</ASTag>"></Code>
    <ASTag size="large">Large</ASTag>
    <Code code="<ASTag size='large'>Large</ASTag>"></Code>
    <h1>API</h1>
    <h2>Tag Props</h2>
    <ApiTable :api="tagApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASTag } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import tagApi from "./apis/tag-api.json";

import { useRouter } from "vue-router";
export default {
  name: "Tag",
  components: { ASTag, Code, ApiTable },
  setup() {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }

    return { open, jump, tagApi };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
