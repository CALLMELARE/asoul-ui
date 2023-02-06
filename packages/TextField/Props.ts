import { PropType } from "vue";
import { NormalSizes } from "../utils/theme/propTypes";

export const BasicProps = {
  value: {
    type: [String, Number],
    default: "",
  },
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "" },
  size: {
    type: String as PropType<NormalSizes>,
    default: "medium",
  },
  autocomplete: { type: String, default: "text" },
  readonly: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  label: { type: String, default: "" },
  block: { type: Boolean, default: false },
  prefix: { type: [String, Number], default: "" },
  suffix: { type: [String, Number], default: "" },
};
