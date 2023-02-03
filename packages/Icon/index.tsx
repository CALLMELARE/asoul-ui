import { computed, ref, toRefs } from "vue";
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import "./icon.scss";

export const CLS_PREFIX = `${prefix}-icon`;

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
        class={`${CLS_PREFIX}`}
        style={`color: ${color.value};font-size: ${size.value}`}
      >
        {slots.default?.()}
      </i>
    );
  },
});
