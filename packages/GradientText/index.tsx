import { computed, PropType, toRefs } from "vue";
import classNames from "classnames";
import { NormalSizes, NormalTypes } from "../utils/theme/propTypes";
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import "./gradientText.scss";

export const CLS_PREFIX = `${prefix}-gradient_text`;

const [createComponent] = createNameSpace("GradientText");

export type GradientType = {
  from?: String;
  to?: String;
  deg?: {
    type: String | Number;
    default: -45;
  };
};

const GradientText = createComponent({
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
      <div class={`${CLS_PREFIX} ${classNames(props.type)}`}>
        {slots.default?.()}
      </div>
    );
  },
});

export default GradientText;
