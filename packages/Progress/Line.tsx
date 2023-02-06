import { computed, defineComponent } from "vue";
import { createNameSpace } from "../utils";
import { CLS_PREFIX, validProgress } from "./";

const [createComponent] = createNameSpace("Progress.Line");

export default createComponent({
  props: {
    value: { type: Number, required: true },
    maxvalue: {
      type: Number,
      default: "100",
    },
    text: { type: String },
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
