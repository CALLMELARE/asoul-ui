import { computed, PropType, toRefs } from "vue";
import classNames from "classnames";
import { NormalSizes, NormalTypes } from "../utils/theme/propTypes";
import { createNameSpace } from "../utils";
import "../GradientText/gradientText.scss";

const [createComponent] = createNameSpace("GradientText");

export type GradientType = {
  from?: String;
  to?: String;
  deg?: {
    type: String | Number;
    default: -45;
  };
};

export default createComponent({
  props: {
    type: {
      type: String as PropType<NormalTypes>,
      default: "",
    },
    gradient: {
      type: Object as PropType<GradientType>,
    },
  },
  setup(props, { attrs, slots, emit }) {
    return () => (
      <div class={`asoul-gradient-text ${classNames(props.type)}`}>
        {slots.default?.()}
      </div>
    );
  },
});
