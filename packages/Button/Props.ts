import { PropType } from "vue";
import {
  ButtonTypes,
  NormalSizes,
  NormalTypes,
} from "../utils/theme/propTypes";

export const BasicProps = {
  type: {
    type: String as PropType<ButtonTypes>,
    default: "",
  },
  size: {
    type: String as PropType<NormalSizes>,
    default: "medium",
  },
  color: {
    type: String as PropType<NormalTypes>,
    default: "primary",
  },
  disabled: Boolean,
  loading: Boolean,
  auto: Boolean,
  block: Boolean,
};
