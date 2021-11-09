import { NormalSizes } from "asoul-ui/utils/theme/propTypes";
import { computed, PropType, toRefs } from "vue";
import { createNameSpace } from "asoul-ui/utils";
import "asoul-ui/Breadcrumb/breadcrumb.scss";
import { createProvider } from "@fect-ui/vue-hooks";

const [createComponent] = createNameSpace("Breadcrumb");
export const READONLY_BREADCRUMB_KEY = 'breadcrumbKey';
export type BreadcrumbProvider = {
  separator: String
}

export default createComponent({
  props: {
    separator: {
      type: String,
      default: '/'
    },
    size: {
      type: String as PropType<NormalSizes>,
      default: "medium"
    }
  },
  setup(props, { attrs, slots, emit }) {
    const { provider } = createProvider(READONLY_BREADCRUMB_KEY);
    provider({ separator: props.separator || '/' })
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
