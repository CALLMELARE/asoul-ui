import { computed, CSSProperties, PropType, ref, toRefs } from "vue";
import { createNameSpace } from "../utils";
import "./col.scss";

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
    const setClass = computed(() => {
      const style: string[] = [];
      props.span && style.push(`asoul-col-${props.span}`);
      props.offset && style.push(`asoul-offset-${props.offset}`);
      return style.join(" ");
    });
    const setStyle = computed(() => {
      if (gutter.value) {
        const half = Number(gutter.value) / 2;
        return `padding-left:${half}px;padding-right:${half}px;`;
      }
      return "";
    });
    return () => (
      <tag style={setStyle.value} class={`asoul-col ${setClass.value}`}>
        {slots.default?.()}
      </tag>
    );
  },
});
