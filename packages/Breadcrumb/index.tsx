import { NormalSizes } from "../utils/theme/propTypes";
import { computed, PropType, toRefs } from "vue";
import { createNameSpace } from "../utils";
import "../Breadcrumb/breadcrumb.scss";
import { createProvider } from "@fect-ui/vue-hooks";

const [createComponent] = createNameSpace("Breadcrumb");
export const READONLY_BREADCRUMB_KEY = "breadcrumbKey";
export type BreadcrumbProvider = {
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
    const { provider } = createProvider(READONLY_BREADCRUMB_KEY);
    provider({ separator: props.separator, disabled: props.disabled });
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
