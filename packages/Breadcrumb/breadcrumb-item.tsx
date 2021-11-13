import { createNameSpace } from "../utils";
import "../Breadcrumb/breadcrumb.scss";
import { useProvider } from "@fect-ui/vue-hooks";
import { useRouter } from "vue-router";
import { BreadcrumbProvider, READONLY_BREADCRUMB_KEY } from "./index";

const [createComponent] = createNameSpace("BreadcrumbItem");

export default createComponent({
  props: {
    to: {
      type: [String, Object],
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
  },
  setup(props, { attrs, slots, emit }) {
    const router = useRouter();
    const { context } = useProvider<BreadcrumbProvider>(
      READONLY_BREADCRUMB_KEY
    );
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
      <div class={`asoul-breadcrumb-item`}>
        {context.disabled ? (
          <span class={`asoul-breadcrumb-content disabled`}>
            {slots.default?.()}
          </span>
        ) : (
          <span
            class={`asoul-breadcrumb-content`}
            onClick={() => link(props.to ? props.to : props.href)}
          >
            {slots.default?.()}
          </span>
        )}
        <span class={`asoul-breadcrumb-separator`}>{context.separator}</span>
      </div>
    );
  },
});
