<template>
  <div class="menu">
    <div class="menu-item" v-bind:key="i" v-for="i in menu">
      <div class="menu-title">
        {{ i.name + " " }}
        ({{ i.children.length }})
      </div>
      <a
        :class="
          comparePath(i.path, s.path) ? 'menu-subtitle active' : 'menu-subtitle'
        "
        v-bind:key="s"
        v-for="s in i.children"
        @click="jump(i.path, s.path)"
      >
        {{ s.name }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import {} from "asoul-ui";
import { useRouter } from "vue-router";
import { PropType, reactive } from "vue";

interface MenuSubItem {
  name: string;
  path: string;
}

interface MenuItem {
  name: string;
  path: string;
  children: MenuSubItem[];
}

export default {
  name: "Menu",
  components: {},
  props: {
    list: Array as PropType<MenuItem[]>,
  },
  setup(props: any) {
    const router = useRouter();
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(parent: any, children: any) {
      router.push(`/${parent}/${children}`);
    }
    function comparePath(parent: any, children: any) {
      if (`/${parent}/${children}` === router.currentRoute.value.fullPath) {
        return true;
      } else {
        return false;
      }
    }
    const menu = reactive(props.list);
    // console.log(props.list);
    // console.log(router.currentRoute.value.fullPath);
    return { open, jump, menu, comparePath };
  },
};
</script>

<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
}
.menu {
  padding-top: 1rem;
  overflow-y: auto;
  height: calc(100vh - 4.75rem - 1px);
  max-height: calc(100vh - 4.75rem - 1px);

  .menu-item {
    .menu-title {
      margin: 0.25rem;
      padding: 0 1rem 0 1rem;
      @include font_color(theme_color);
      cursor: default;
      font-size: 1rem;
      height: 36px;
      display: flex;
      font-weight: normal;
      align-items: center;
    }
    .menu-subtitle {
      display: block;
      margin: 0.2rem 0.25rem;
      padding: 0 1rem 0 2rem;
      border-radius: 5px;
      @include font_color(secondary_color);
      cursor: pointer;
      font-size: 0.9rem;
      height: 36px;
      line-height: 36px;
      &:hover,
      &.active {
        @include background_transparent(theme_color, 0.8);
        @include font_color(theme_color);
      }
    }
  }
}
</style>
