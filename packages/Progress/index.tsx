import { computed, toRefs } from "vue";
import { createNameSpace } from "../utils";
import "./progress.scss";

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
      <div class={`asoul-progress`}>
        <div class={`asoul-progress-bar`}>
          <span
            class={`asoul-progress-linear-determinate`}
            style={`width:${setWidth.value}%;`}
          ></span>
          <span
            class={`asoul-progress-linear-background`}
            style={`width:${100 - setWidth.value}%`}
          ></span>
        </div>
      </div>
    );
  },
});
