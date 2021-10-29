import { computed, ref, toRefs } from "vue";
import { createNameSpace } from "../utils";
import "./icon.scss";

const [createComponent] = createNameSpace("Icon");

export default createComponent({
  props: {
    color: { type: String, default: "" },
    size: { type: String, default: "" },
  },
  setup(props, { attrs, slots, emit }) {
    const color = ref<string>(props.color);
    const size = ref<string>(props.size);
    return () => (
      <i
        class={`asoul-icon`}
        style={`color: ${color.value};font-size: ${size.value}`}
      >
        {slots.default?.()}
      </i>
    );
  },
});
