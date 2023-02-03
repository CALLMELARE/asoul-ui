import { computed, PropType, toRefs } from "vue";
import classNames from "classnames";
import { NormalTypes } from "../utils/theme/propTypes";
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import "./alert.scss";

export const CLS_PREFIX = `${prefix}-alert`;

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
        class={`${CLS_PREFIX} ${classNames(props.type, {
          outlined: props.outlined,
          border: props.border,
        })}`}
      >
        <div class={`${CLS_PREFIX}-border`} />
        <div class={`${CLS_PREFIX}-wrapper`}>{slots.default?.()}</div>
      </div>
    );
  },
});
