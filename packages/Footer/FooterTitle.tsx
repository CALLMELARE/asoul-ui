// vue
import {} from "vue";
// internal dependencies
import { createNameSpace } from "../utils";
import { CLS_PREFIX } from "./";
// style
import "./footer.scss";

// createNameSpace
const [createComponent] = createNameSpace("Footer.Title");

// component
const FooterTitle = createComponent({
  props: {},
  setup(props, { attrs, slots, emit }) {
    return () => <div class={`${CLS_PREFIX}-title`}>{slots.default?.()}</div>;
  },
});

export default FooterTitle;
