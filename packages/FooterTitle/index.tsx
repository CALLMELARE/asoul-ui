import { computed, toRefs } from "vue";
import { createNameSpace } from "../utils";
import "./footerTitle.scss";

const [createComponent] = createNameSpace("FooterTitle");

export default createComponent({
  props: {},
  setup(props, { attrs, slots, emit }) {
    return () => <div class="asoul-footer-title">{slots.default?.()}</div>;
  },
});
