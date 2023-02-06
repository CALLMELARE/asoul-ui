// vue
import { ref } from "vue";
// props
import { BasicProps } from "./Props";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
// style
import "./icon.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-icon`;

// createNameSpace
const [createComponent] = createNameSpace("Icon");

// component
const Icon = createComponent({
  props: {
    ...BasicProps,
  },
  setup(props, { attrs, slots, emit }) {
    const color = ref<string>(props.color);
    const size = ref<string>(props.size);
    return () => (
      <i
        class={`${CLS_PREFIX}`}
        style={`color: ${color.value};font-size: ${size.value}`}
      >
        {slots.default?.()}
      </i>
    );
  },
});

export default Icon;
