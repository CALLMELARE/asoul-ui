// vue
import { computed, CSSProperties, PropType, ref, toRefs } from "vue";
// props
import { BasicProps } from "./Props";
// external dependencies
import classNames from "classnames";
// internal dependencies
import { prefix } from "../utils/core";
import { createNameSpace } from "../utils";
// style
import "./col.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-col`;

// createNameSpace
const [createComponent] = createNameSpace("Col");

// component
const Col = createComponent({
  props: {
    ...BasicProps,
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

export default Col;
