import { computed, toRefs } from "vue";
import { createNameSpace } from "../utils";
import "./footerItem.scss";

const [createComponent] = createNameSpace("FooterItem");

export default createComponent({
  props: {},
  setup(props, { attrs, slots, emit }) {
    return () => <div class="asoul-footer-item">{slots.default?.()}</div>;
  },
});
