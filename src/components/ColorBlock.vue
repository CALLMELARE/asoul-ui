<template>
  <div class="color-block" :style="`background-color:${scolor}`">
    <div class="color-text">
      <span class="color-item"> {{ sname }}</span>
      <span class="color-item"> {{ "$" + svar }}</span>
      <span class="color-item"> {{ scolor }}</span>
      <span class="color-item"> {{ colorRgb(scolor) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {} from "asoul-ui";
import { reactive } from "vue";

export default {
  name: "Menu",
  components: {},
  props: {
    color: String,
    name: String,
    var: String,
  },
  setup(props: any) {
    const scolor = reactive(props.color);
    const sname = reactive(props.name);
    const svar = reactive(props.var);
    function colorRgb(data: string) {
      // 16进制颜色值的正则
      let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      // 把颜色值变成小写
      let color = data.toLowerCase();
      if (reg.test(color)) {
        // 如果只有三位的值，需变成六位，如：#fff => #ffffff
        if (color.length === 4) {
          let colorNew = "#";
          for (let i = 1; i < 4; i += 1) {
            colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
          }
          color = colorNew;
        }
        // 处理六位的颜色值，转为RGB
        let colorChange = [];
        for (let i = 1; i < 7; i += 2) {
          colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
        }
        return "rgb(" + colorChange.join(",") + ")";
      } else {
        return color;
      }
    }
    return { scolor, sname, svar, colorRgb };
  },
};
</script>

<style lang="scss">
@import "asoul-ui/utils/styles/mixin.scss";
.color-block {
  height: 2.5rem;
  border-radius: 5px;
  background-color: var(--asoul-invert-color);
  .color-text {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin: 0.5rem 0;
    .color-item {
      font-size: 1rem;
      color: var(--asoul-invert-color);
      line-height: 2.5rem;
      text-align: center;
      font-weight: lighter;
    }
  }
}
</style>
