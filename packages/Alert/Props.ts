import { PropType } from "vue";
import { NormalTypes } from "../utils/theme/propTypes";

export const BasicProps = {
  type: {
    type: String as PropType<NormalTypes>,
    default: "primary",
  },
  border: {
    type: Boolean,
  },
  outlined: {
    type: Boolean,
  },
};
