// vue
import { ref } from "vue";
// props
import { BasicProps } from "./Props";
// external dependencies
import { Icon as vIcon } from "@vicons/utils";
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
      <i class={`${CLS_PREFIX}`}>
        <vIcon size={size} color={color}>
          {slots.default?.()}
        </vIcon>
      </i>
    );
  },
});

export default Icon;
