import { computed, toRefs } from "vue";
import classNames from "classnames";
import { createNameSpace } from "../utils";
import "./card.scss";

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
        class={`asoul-card ${classNames({
          shadow: props.shadow,
          hoverable: props.hoverable,
          inverse: props.inverse,
        })}`}
      >
        <div class={"asoul-card-content"}>{slots.default?.()}</div>
      </div>
    );
  },
});
