import { PropType } from "vue";

export const BasicProps = {
  id: {
    type: String,
    default: "",
  },
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: "div",
  },
  span: {
    type: [String, Number],
    default: 24,
  },
  offset: {
    type: [String, Number],
    default: 0,
  },
  align: {
    type: String,
    default: "left",
  },
};
