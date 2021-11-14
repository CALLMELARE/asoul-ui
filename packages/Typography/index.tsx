import { createNameSpace } from "../utils";
import "../Typography/typography.scss";
import { computed } from "vue";

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
    quote: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs, slots, emit }) {
    const setClass = computed(() => {
      const names: string[] = [];
      props.indent && names.push("indent");
      props.quote && names.push("quote");
      return names.join(" ");
    });
    return () => (
      <div class={`asoul-text ${setClass.value}`}>{slots.default?.()}</div>
    );
  },
});
