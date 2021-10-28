import { NormalTypes } from "../utils/theme/propTypes";
import { computed, PropType, ref, toRefs } from "vue";
import { createNameSpace } from "../utils";
import "./divider.scss";

const [createComponent] = createNameSpace("Divider");

export default createComponent({
  props: {
    color: {
      type: String,
      default: "",
    },
    dashed: { type: Boolean, default: false },
  },
  setup(props, { attrs, slots, emit }) {
    const isDashed = ref<boolean>(props.dashed);
    const color = ref<string>(props.color);
    return () => (
      <div
        style={color.value ? `border-color:${color.value};` : ""}
        class={`asoul-divider ${isDashed.value ? "dashed" : ""}`}
      ></div>
    );
  },
});
