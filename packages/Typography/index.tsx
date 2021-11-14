import { createNameSpace } from "../utils";
import "../Typography/typography.scss";
import { computed, PropType } from "vue";
import { NormalTypes } from "../utils/theme/propTypes";

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
    const setClass = computed(() => {
      const names: string[] = [];
      props.indent && names.push("indent");
      props.italic && names.push("italic");
      props.underline && names.push("underline");
      props.delete && names.push("delete");
      props.code && names.push("code");
      props.type && names.push(props.type);
      return names.join(" ");
    });
    return () => (
      <div class={`asoul-text ${setClass.value}`}>{slots.default?.()}</div>
    );
  },
});
