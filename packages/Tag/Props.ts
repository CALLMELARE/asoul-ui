import { PropType } from "vue";
import { NormalSizes, NormalTypes } from "../utils/theme/propTypes";

export const BasicProps = {
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
};
