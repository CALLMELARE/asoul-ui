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

export const CheckboxGroupProps = {
  disabled: { type: Boolean, default: false },
  modelValue: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  size: {
    type: String as PropType<NormalSizes>,
    default: "medium",
  },
  useRow: { type: Boolean, default: false },
};
