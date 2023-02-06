import { PropType } from "vue";
import { NormalSizes } from "../utils/theme/propTypes";

export const BasicProps = {
  checked: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  rounded: { type: Boolean, default: false },
  value: { type: [String, Number], default: "" },
  size: {
    type: String as PropType<NormalSizes>,
    default: "medium",
  },
};

export const RadioGroupProps = {
  initialValue: { type: [String, Number], default: "" },
  useRow: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  size: {
    type: String as PropType<NormalSizes>,
    default: "medium",
  },
};
