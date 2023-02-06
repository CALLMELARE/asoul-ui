import { computed, toRefs } from "vue";
import { createNameSpace } from "../utils";
import { CLS_PREFIX } from "./";
import "./footer.scss";

const [createComponent] = createNameSpace("FooterList");

const FooterList = createComponent({
  props: {},
  setup(props, { attrs, slots, emit }) {
    return () => <div class={`${CLS_PREFIX}-list`}>{slots.default?.()}</div>;
  },
});

export default FooterList;
