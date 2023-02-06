import { PropType } from "vue";
import { NormalTypes } from "../utils/theme/propTypes";

export const TextProps = {
  indent: {
    type: Boolean,
    default: false,
  },
  italic: {
    type: Boolean,
    default: false,
  },
  underline: {
    type: Boolean,
    default: false,
  },
  delete: {
    type: Boolean,
    default: false,
  },
  code: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<NormalTypes>,
    default: "",
  },
};
