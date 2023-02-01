<template>
  <div class="breadcrumb">
    <h1>{{ $t("components.navi.Breadcrumb") }}</h1>
    <tip>能体现层级关系</tip>
    <h2>基础</h2>
    <ASBreadcrumb>
      <ASBreadcrumbItem>link1</ASBreadcrumbItem>
      <ASBreadcrumbItem>link2</ASBreadcrumbItem>
    </ASBreadcrumb>
    <Code
      code="<ASBreadcrumb><ASBreadcrumbItem>...</ASBreadcrumbItem></ASBreadcrumb>"
    ></Code>
    <h2>禁用</h2>
    <ASBreadcrumb disabled>
      <ASBreadcrumbItem>link1</ASBreadcrumbItem>
      <ASBreadcrumbItem>link2</ASBreadcrumbItem>
    </ASBreadcrumb>
    <Code
      code="<ASBreadcrumb disabled><ASBreadcrumbItem>...</ASBreadcrumbItem></ASBreadcrumb>"
    ></Code>
    <h2>自定义分隔符</h2>
    <ASBreadcrumb separator="\">
      <ASBreadcrumbItem>link1</ASBreadcrumbItem>
      <ASBreadcrumbItem>link2</ASBreadcrumbItem>
    </ASBreadcrumb>
    <Code
      code="<ASBreadcrumb separator='\'><ASBreadcrumbItem>...</ASBreadcrumbItem></ASBreadcrumb>"
    ></Code>
    <h1>API</h1>
    <h2>Breadcrumb Props</h2>
    <ApiTable :api="breadcrumbApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASBreadcrumb, ASBreadcrumbItem } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import breadcrumbApi from "./apis/breadcrumb-api.json";

import { useRouter } from "vue-router";
export default {
  name: "Breadcrumb",
  components: { ASBreadcrumb, ASBreadcrumbItem, Code, ApiTable },
  setup() {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }
    return { open, jump, breadcrumbApi };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
