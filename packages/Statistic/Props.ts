import { PropType } from "vue";
import { NormalTypes } from "../utils/theme/propTypes";

export const BasicProps = {
  separate: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<NormalTypes>,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
};
