// vue
import { inject } from "vue";
import { useRouter } from "vue-router";
// props
import { ItemProps } from "./Props";
// internal dependencies
import { createNameSpace } from "../utils";
import { CLS_PREFIX, BreadcrumbProvide, READONLY_BREADCRUMB_KEY } from "./";
// style
import "./breadcrumb.scss";

// createNameSpace
const [createComponent] = createNameSpace("BreadcrumbItem");

// component
const BreadcrumbItem = createComponent({
  props: {
    ...ItemProps,
  },
  setup(props, { attrs, slots, emit }) {
    const router = useRouter();
    const context = inject<BreadcrumbProvide>(READONLY_BREADCRUMB_KEY);
    function open(url: string | undefined) {
      window.open(url);
    }
    function jump(url: any) {
      router.push(url);
    }
    function link(url: any) {
      if (props.to) {
        return jump(url);
      } else {
        return open(url);
      }
    }
    if (!context) {
      if (process.env.NODE_ENV !== "production") {
        console.error(
          "[ASoul] <BreadcrumbItem> must be a child component of <Breadcrumb>."
        );
      }
      return;
    }
    return () => (
      <div class={`${CLS_PREFIX}-item`}>
        {context.disabled ? (
          <span class={`${CLS_PREFIX}-content disabled`}>
            {slots.default?.()}
          </span>
        ) : (
          <span
            class={`${CLS_PREFIX}-content`}
            onClick={() => link(props.to ? props.to : props.href)}
          >
            {slots.default?.()}
          </span>
        )}
        <span class={`${CLS_PREFIX}-separator`}>{context.separator}</span>
      </div>
    );
  },
});

export default BreadcrumbItem;
