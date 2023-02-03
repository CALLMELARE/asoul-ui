import { computed, PropType, provide } from "vue";
import classNames from "classnames";
import { AlignTypes, JustifyTypes } from "../utils/theme/propTypes";
import { createNameSpace } from "../utils";
import "./row.scss";

const [createComponent] = createNameSpace("Row");

export const READONLY_LAYOUT_KEY = "layoutKey";

export default createComponent({
  props: {
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: "div",
    },
    gutter: {
      type: [String, Number],
      default: 0,
    },
    justify: {
      type: String as PropType<JustifyTypes>,
      default: "start",
    },
    align: {
      type: String as PropType<AlignTypes>,
      default: "top",
    },
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
        class={`asoul-row ${classNames({
          [`asoul-justify-${props.justify}`]: props.justify,
          [`asoul-align-${props.align}`]: props.align,
        })}`}
        style={`${setStyle.value}`}
      >
        {slots.default?.()}
      </div>
    );
  },
});
