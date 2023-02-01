import { computed, PropType, provide } from "vue";
import { NormalSizes } from "../utils/theme/propTypes";
import { createNameSpace } from "../utils";
import "./breadcrumb.scss";

const [createComponent] = createNameSpace("Breadcrumb");

export const READONLY_BREADCRUMB_KEY = "breadcrumbKey";

export type BreadcrumbProvide = {
  separator: String;
  disabled: Boolean;
};

export default createComponent({
  props: {
    separator: {
      type: String,
      default: ">",
    },
    size: {
      type: String as PropType<NormalSizes>,
      default: "medium",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs, slots, emit }) {
    provide(READONLY_BREADCRUMB_KEY, {
      separator: props.separator,
      disabled: props.disabled,
    });
    const setClass = computed(() => {
      const names = [];
      props.size && names.push(props.size);
      return names.join(" ");
    });
    return () => (
      <nav class={`asoul-breadcrumb ${setClass.value}`}>
        {slots.default?.()}
      </nav>
    );
  },
});
