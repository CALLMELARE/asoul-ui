import { computed, PropType } from "vue";
import classNames from "classnames";
import { NormalTypes } from "../utils/theme/propTypes";
import { createNameSpace } from "../utils";
import "./typography.scss";

const [createComponent] = createNameSpace("GradientText");

export const H1 = createComponent({
  setup(props, { attrs, slots, emit }) {
    return () => <div class={`asoul-h1`}>{slots.default?.()}</div>;
  },
});

export const H2 = createComponent({
  setup(props, { attrs, slots, emit }) {
    return () => <div class={`asoul-h2`}>{slots.default?.()}</div>;
  },
});

export const H3 = createComponent({
  setup(props, { attrs, slots, emit }) {
    return () => <div class={`asoul-h3`}>{slots.default?.()}</div>;
  },
});

export const Tip = createComponent({
  setup(props, { attrs, slots, emit }) {
    return () => <div class={`asoul-tip`}>{slots.default?.()}</div>;
  },
});

export const Text = createComponent({
  props: {
    indent: {
      type: Boolean,
      default: false,
    },
    italic: {
      type: Boolean,
      default: false,
    },
    underline: {
      type: Boolean,
      default: false,
    },
    delete: {
      type: Boolean,
      default: false,
    },
    code: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<NormalTypes>,
      default: "",
    },
  },
  setup(props, { attrs, slots, emit }) {
    return () => (
      <div
        class={`asoul-text ${classNames(
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
