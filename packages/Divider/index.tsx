// vue
import { ref } from "vue";
// props
import { BasicProps } from "./Props";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
// style
import "./divider.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-divider`;

// createNameSpace
const [createComponent] = createNameSpace("Divider");

// component
const Divider = createComponent({
  props: {
    ...BasicProps,
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

export default Divider;
