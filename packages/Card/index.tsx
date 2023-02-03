import { computed, toRefs } from "vue";
import classNames from "classnames";
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import "./card.scss";

export const CLS_PREFIX = `${prefix}-card`;

const [createComponent] = createNameSpace("Card");

export default createComponent({
  props: {
    hoverable: Boolean,
    shadow: Boolean,
    inverse: Boolean,
  },
  setup(props, { attrs, slots, emit }) {
    return () => (
      <div
        class={`${CLS_PREFIX} ${classNames({
          shadow: props.shadow,
          hoverable: props.hoverable,
          inverse: props.inverse,
        })}`}
      >
        <div class={`${CLS_PREFIX}-content`}>{slots.default?.()}</div>
      </div>
    );
  },
});
