// vue
import {} from "vue";
// props
import { TextProps } from "./Props";
// external dependencies
import classNames from "classnames";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
// style
import "./typography.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}`;

// createNameSpace
const [createComponent] = createNameSpace("GradientText");

// component
export const H1 = createComponent({
  setup(props, { attrs, slots, emit }) {
    return () => <div class={`${CLS_PREFIX}-h1`}>{slots.default?.()}</div>;
  },
});

export const H2 = createComponent({
  setup(props, { attrs, slots, emit }) {
    return () => <div class={`${CLS_PREFIX}-h2`}>{slots.default?.()}</div>;
  },
});

export const H3 = createComponent({
  setup(props, { attrs, slots, emit }) {
    return () => <div class={`${CLS_PREFIX}-h3`}>{slots.default?.()}</div>;
  },
});

export const Tip = createComponent({
  setup(props, { attrs, slots, emit }) {
    return () => <div class={`${CLS_PREFIX}-tip`}>{slots.default?.()}</div>;
  },
});

export const Text = createComponent({
  props: {
    ...TextProps,
  },
  setup(props, { attrs, slots, emit }) {
    return () => (
      <div
        class={`${CLS_PREFIX}-text ${classNames(
          {
            indent: props.indent,
            italic: props.italic,
            underline: props.underline,
            delete: props.delete,
            code: props.code,
          },
          props.type
        )}`}
      >
        {slots.default?.()}
      </div>
    );
  },
});
