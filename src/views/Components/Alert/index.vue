<template>
  <div class="alert">
    <h1>警告信息 / Alert</h1>
    <tip>发生了某些值得注意的事</tip>
    <h2>基础</h2>
    <ASAlert>大家好，我们是A-SOUL~</ASAlert>
    <Code code="<ASAlert>大家好，我们是A-SOUL~</ASAlert>"></Code>
    <h2>边框</h2>
    <ASAlert border>大家好，我们是A-SOUL~</ASAlert>
    <Code code="<ASAlert border>大家好，我们是A-SOUL~</ASAlert>"></Code>
    <h2>外边框</h2>
    <ASAlert outlined>大家好，我们是A-SOUL~</ASAlert>
    <Code code="<ASAlert outlined>大家好，我们是A-SOUL~</ASAlert>"></Code>
    <h2>信息类型</h2>
    <h3>主题色</h3>
    <ASAlert type="primary">大家好，我们是A-SOUL~</ASAlert>
    <Code code="<ASAlert type='primary'>大家好，我们是A-SOUL~</ASAlert>"></Code>
    <h3>成功</h3>
    <ASAlert type="success">大家好，我们是A-SOUL~</ASAlert>
    <Code code="<ASAlert type='success'>大家好，我们是A-SOUL~</ASAlert>"></Code>
    <h3>警告</h3>
    <ASAlert type="warning">大家好，我们是A-SOUL~</ASAlert>
    <Code code="<ASAlert type='warning'>大家好，我们是A-SOUL~</ASAlert>"></Code>
    <h3>错误</h3>
    <ASAlert type="error">大家好，我们是A-SOUL~</ASAlert>
    <Code code="<ASAlert type='error'>大家好，我们是A-SOUL~</ASAlert>"></Code>
    <h2>混合使用</h2>
    <ASAlert type="success" border outlined>大家好，我们是A-SOUL~</ASAlert>
    <Code
      code="<ASAlert type='success' border outlined>大家好，我们是A-SOUL~</ASAlert>"
    ></Code>
    <h1>API</h1>
    <h2>Alert Props</h2>
    <ApiTable :api="alertApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import { ASAlert } from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import alertApi from "./apis/alert-api.json";

export default {
  name: "Alert",
  components: { ASAlert, Code, ApiTable },
  setup() {
    return { alertApi };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
