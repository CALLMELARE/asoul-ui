import { AlignTypes, JustifyTypes } from "../utils/theme/propTypes";
import { computed, PropType, toRefs } from "vue";
import { createNameSpace } from "../utils";
import "./row.scss";
import { createProvider } from "../utils/useHooks";

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
    const { provider } = createProvider(READONLY_LAYOUT_KEY);
    provider({ gutter: props.gutter });

    const setClass = computed(() => {
      const style: string[] = [];
      props.justify && style.push(`asoul-justify-${props.justify}`);
      props.align && style.push(`asoul-align-${props.align}`);
      return style.join(" ");
    });

    const setStyle = computed(() => {
      if (props.gutter) {
        const half = Number(props.gutter) / 2;
        return `margin-left:${half}px;margin-right:${half}px;`;
      }
      return "";
    });

    return () => (
      <div class={`asoul-row ${setClass.value}`} style={`${setStyle.value}`}>
        {slots.default?.()}
      </div>
    );
  },
});
