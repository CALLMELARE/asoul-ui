import { NormalTypes } from "../utils/theme/propTypes";
import { computed, PropType, toRefs } from "vue";
import { createNameSpace } from "../utils";
import "./alert.scss";

const [createComponent] = createNameSpace("Alert");

export default createComponent({
  props: {
    type: {
      type: String as PropType<NormalTypes>,
      default: "primary",
    },
    border: {
      type: Boolean,
    },
    outlined: {
      type: Boolean,
    },
  },
  setup(props, { attrs, slots, emit }) {
    const setClass = computed(() => {
      const names = [];
      props.type && names.push(props.type);
      props.outlined && names.push("outlined");
      props.border && names.push("border");
      return names.join(" ");
    });
    return () => (
      <div class={`asoul-alert ${setClass.value}`}>
        <div class={`asoul-alert-border`} />
        <div class={`asoul-alert-wrapper`}>{slots.default?.()}</div>
      </div>
    );
  },
});
