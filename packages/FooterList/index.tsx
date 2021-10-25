import { computed, toRefs } from "vue";
import { createNameSpace } from "../utils";
import "./footerList.scss";

const [createComponent] = createNameSpace("FooterList");

export default createComponent({
  props: {},
  setup(props, { attrs, slots, emit }) {
    return () => <div class="asoul-footer-list">{slots.default?.()}</div>;
  },
});
