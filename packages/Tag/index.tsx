import { computed, PropType, toRefs } from "vue";
import classNames from "classnames";
import { NormalSizes, NormalTypes } from "../utils/theme/propTypes";
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import "./tag.scss";

export const CLS_PREFIX = `${prefix}-tag`;

const [createComponent] = createNameSpace("Tag");

export default createComponent({
  props: {
    size: {
      type: String as PropType<NormalSizes>,
      default: "medium",
    },
    type: {
      type: String as PropType<NormalTypes>,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    inverse: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs, slots, emit }) {
    return () => (
      <div
        class={`${CLS_PREFIX} ${classNames(
          {
            disabled: props.disabled,
            rounded: props.rounded,
            outlined: props.outlined,
            inverse: props.inverse,
          },
          props.size,
          props.type
        )}`}
      >
        {slots.default?.()}
      </div>
    );
  },
});
