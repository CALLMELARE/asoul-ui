import { computed, toRefs } from "vue";
import { createNameSpace } from "../utils";
import { CLS_PREFIX } from "./";
import "./footer.scss";

const [createComponent] = createNameSpace("FooterItem");

export default createComponent({
  props: {},
  setup(props, { attrs, slots, emit }) {
    return () => <div class={`${CLS_PREFIX}-item`}>{slots.default?.()}</div>;
  },
});
