// vue
import {} from "vue";
// props
import { BasicProps } from "./Props";
// external dependencies
import classNames from "classnames";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
// style
import "./tag.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-tag`;

// createNameSpace
const [createComponent] = createNameSpace("Tag");

// component
const Tag = createComponent({
  props: {
    ...BasicProps,
  },
  setup(props, { attrs, slots, emit }) {
    return () => (
      <div
        class={`${CLS_PREFIX} ${classNames(
          {
            disabled: props.disabled,
            rounded: props.rounded,
            outlined: props.outlined,
            inverse: props.inverse,
          },
          props.size,
          props.type
        )}`}
      >
        {slots.default?.()}
      </div>
    );
  },
});

export default Tag;
