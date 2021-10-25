import { computed, toRefs } from "vue";
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
    const setClass = computed(() => {
      const names = [];
      props.shadow && names.push("shadow");
      props.hoverable && names.push("hoverable");
      props.inverse && names.push("inverse");
      return names.join(" ");
    });
    return () => (
      <div class={`asoul-card ${setClass.value}`}>
        <div class={"asoul-card-content"}>{slots.default?.()}</div>
      </div>
    );
  },
});
