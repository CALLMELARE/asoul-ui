// vue
import {} from "vue";
// internal dependencies
import { createNameSpace } from "../utils";
import { CLS_PREFIX } from "./";
// style
import "./footer.scss";

// createNameSpace
const [createComponent] = createNameSpace("FooterItem");

// component
const FooterItem = createComponent({
  props: {},
  setup(props, { attrs, slots, emit }) {
    return () => <div class={`${CLS_PREFIX}-item`}>{slots.default?.()}</div>;
  },
});

export default FooterItem;
