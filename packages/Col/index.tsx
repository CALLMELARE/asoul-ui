import { computed, CSSProperties, PropType, ref, toRefs } from "vue";
import classNames from "classnames";
import { prefix } from "../utils/core";
import { createNameSpace } from "../utils";
import "./col.scss";

export const CLS_PREFIX = `${prefix}-col`;

const [createComponent] = createNameSpace("Col");

const calc = (n: number) => {
  const base = 100 / 24;
  if (n >= 24) {
    return "100%";
  } else {
    return `${base * n}%`;
  }
};

export default createComponent({
  props: {
    id: {
      type: String,
    },
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: "div",
    },
    span: {
      type: [String, Number],
      default: 24,
    },
    offset: {
      type: [String, Number],
      default: 0,
    },
    align: {
      type: String,
    },
  },
  setup(props, { attrs, slots, emit }) {
    const gutter = ref<string | number>(0);
    const setStyle = computed(() => {
      if (gutter.value) {
        const half = Number(gutter.value) / 2;
        return `padding-left:${half}px;padding-right:${half}px;`;
      }
      return "";
    });
    return () => (
      <tag
        style={setStyle.value}
        class={`${CLS_PREFIX} ${classNames(
          [`${CLS_PREFIX}-${props.span}`],
          [`${CLS_PREFIX}-offset-${props.offset}`]
        )}`}
      >
        {slots.default?.()}
      </tag>
    );
  },
});
