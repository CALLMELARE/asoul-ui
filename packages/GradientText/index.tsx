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
import "./gradientText.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-gradient_text`;

// createNameSpace
const [createComponent] = createNameSpace("GradientText");

export type GradientType = {
  from?: String;
  to?: String;
  deg?: {
    type: String | Number;
    default: -45;
  };
};

// component
const GradientText = createComponent({
  props: {
    ...BasicProps,
  },
  setup(props, { attrs, slots, emit }) {
    return () => (
      <div class={`${CLS_PREFIX} ${classNames(props.type)}`}>
        {slots.default?.()}
      </div>
    );
  },
});

export default GradientText;
