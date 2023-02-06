import { PropType } from "vue";
import { AlignTypes, JustifyTypes } from "../utils/theme/propTypes";

export const BasicProps = {
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: "div",
  },
  gutter: {
    type: [String, Number],
    default: 0,
  },
  justify: {
    type: String as PropType<JustifyTypes>,
    default: "start",
  },
  align: {
    type: String as PropType<AlignTypes>,
    default: "top",
  },
};
