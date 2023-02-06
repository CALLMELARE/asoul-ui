import { PropType } from "vue";
import { NormalSizes } from "../utils/theme/propTypes";

export const BasicProps = {
  disabled: Boolean,
  modelValue: Boolean,
  size: {
    type: String as PropType<NormalSizes>,
    default: "medium",
  },
  label: {
    type: [String],
    default: "",
  },
};
