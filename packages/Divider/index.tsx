import { computed, PropType, ref, toRefs } from "vue";
import { NormalTypes } from "../utils/theme/propTypes";
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import "./divider.scss";

export const CLS_PREFIX = `${prefix}-divider`;

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
        class={`${CLS_PREFIX} ${isDashed.value ? "dashed" : ""}`}
      ></div>
    );
  },
});
