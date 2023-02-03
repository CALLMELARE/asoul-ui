import { computed, toRefs } from "vue";
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import "./progress.scss";

export const CLS_PREFIX = `${prefix}-progress`;

const [createComponent] = createNameSpace("Progress");

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
      const wid = (props.value / props.maxvalue) * 100;
      return wid;
    });
    return () => (
      <div class={`${CLS_PREFIX}`}>
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
      </div>
    );
  },
});
