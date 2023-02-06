// vue
import { computed, provide } from "vue";
// props
import { BasicProps } from "./Props";
// external dependencies
import classNames from "classnames";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
// style
import "./row.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-row`;

// createNameSpace
const [createComponent] = createNameSpace("Row");

export const READONLY_LAYOUT_KEY = "layoutKey";

// component
const Row = createComponent({
  props: {
    ...BasicProps,
  },
  setup(props, { attrs, slots, emit }) {
    provide(READONLY_LAYOUT_KEY, { gutter: props.gutter });

    const setStyle = computed(() => {
      if (props.gutter) {
        const half = Number(props.gutter) / 2;
        return `margin-left:${half}px;margin-right:${half}px;`;
      }
      return "";
    });

    return () => (
      <div
        class={`${CLS_PREFIX} ${classNames({
          [`${CLS_PREFIX}-justify-${props.justify}`]: props.justify,
          [`${CLS_PREFIX}-align-${props.align}`]: props.align,
        })}`}
        style={`${setStyle.value}`}
      >
        {slots.default?.()}
      </div>
    );
  },
});

export default Row;
