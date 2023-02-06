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
import "./alert.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-alert`;

// createNameSpace
const [createComponent] = createNameSpace("Alert");

// component
const Alert = createComponent({
  props: {
    ...BasicProps,
  },
  setup(props, { attrs, slots, emit }) {
    return () => (
      <div
        class={`${CLS_PREFIX} ${classNames(props.type, {
          outlined: props.outlined,
          border: props.border,
        })}`}
      >
        <div class={`${CLS_PREFIX}-border`} />
        <div class={`${CLS_PREFIX}-wrapper`}>{slots.default?.()}</div>
      </div>
    );
  },
});

export default Alert;
