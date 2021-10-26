import { computed, toRefs } from "vue";
import { createNameSpace } from "../utils";
import "./progress.scss";

const [createComponent] = createNameSpace("Icon");

export default createComponent({
  props: {
    color: { type: String },
    size: { type: [String, Number] },
  },
  setup(props, { attrs, slots, emit }) {
    return () => (
      <i class={`asoul-icon`} style={`color: ${props.color};font-size: ${props.size}`}>
        {slots.default?.()}
      </i>
    );
  },
});
