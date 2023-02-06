// vue
import { computed, defineComponent } from "vue";
// props
import { LineProps } from "./Props";
// internal dependencies
import { createNameSpace } from "../utils";
import { CLS_PREFIX, validProgress } from "./";

// createNameSpace
const [createComponent] = createNameSpace("Progress.Line");

// component
const Line = createComponent({
  props: {
    ...LineProps,
  },
  setup(props, { attrs, slots, emit }) {
    const setWidth = computed(() => {
      const wid = validProgress(props.value / props.maxvalue) * 100;
      return wid;
    });

    return () => (
      <div class={`${CLS_PREFIX}-bar`}>
        <span
          class={`${CLS_PREFIX}-linear-determinate`}
          style={`width:${setWidth.value}%;`}
        ></span>
        <span
          class={`${CLS_PREFIX}-linear-background`}
          style={`width:${100 - setWidth.value}%`}
        ></span>
      </div>
    );
  },
});

export default Line;
