import { PropType } from "vue";
import { NormalTypes } from "../utils/theme/propTypes";
import { GradientType } from "./";

export const BasicProps = {
  type: {
    type: String as PropType<NormalTypes>,
    default: "",
  },
  gradient: {
    type: Object as PropType<GradientType>,
  },
};
