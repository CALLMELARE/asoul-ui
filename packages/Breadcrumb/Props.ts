import { PropType } from "vue";
import { NormalSizes } from "../utils/theme/propTypes";

export const BasicProps = {
  separator: {
    type: String,
    default: ">",
  },
  size: {
    type: String as PropType<NormalSizes>,
    default: "medium",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

export const ItemProps = {
  to: {
    type: [String, Object],
    default: "",
  },
  href: {
    type: String,
    default: "",
  },
};
