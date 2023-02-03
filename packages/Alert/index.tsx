import { computed, PropType, toRefs } from "vue";
import classNames from "classnames";
import { NormalTypes } from "../utils/theme/propTypes";
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
    return () => (
      <div
        class={`asoul-alert ${classNames(props.type, {
          outlined: props.outlined,
          border: props.border,
        })}`}
      >
        <div class={`asoul-alert-border`} />
        <div class={`asoul-alert-wrapper`}>{slots.default?.()}</div>
      </div>
    );
  },
});
