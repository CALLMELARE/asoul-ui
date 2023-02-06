import { PropType } from "vue";
import { NormalTypes } from "../utils/theme/propTypes";

export const BasicProps = {
  type: {
    type: String as PropType<NormalTypes>,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
};
