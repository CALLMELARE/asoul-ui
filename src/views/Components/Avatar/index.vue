<template>
  <div class="avatar">
    <h1>头像 / Avatar</h1>
    <tip>Todo</tip>

    <Code code=""></Code>

    <h1>API</h1>
    <h2>Avatar Props</h2>
    <ApiTable :api="avatarApi"></ApiTable>
  </div>
</template>

<script lang="ts">
import {} from "asoul-ui";
import Code from "../../../components/Code.vue";
import ApiTable from "../../../components/ApiTable.vue";

import avatarApi from "./apis/avatar-api.json";

import { useRouter } from "vue-router";
export default {
  name: "Avatar",
  components: { Code, ApiTable },
  setup() {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }

    return { open, jump, avatarApi };
  },
};
</script>
<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
@import "../../style.scss";
</style>
