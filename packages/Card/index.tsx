// vue
import {} from "vue";
// props
import { BasicProps } from "./Props";
// external dependencies
import classNames from "classnames";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
// style
import "./card.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-card`;

// createNameSpace
const [createComponent] = createNameSpace("Card");

// component
const Card = createComponent({
  props: {
    ...BasicProps,
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

export default Card;
