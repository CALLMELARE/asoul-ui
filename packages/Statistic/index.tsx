// vue
import { ref } from "vue";
// props
import { BasicProps } from "./Props";
// external dependencies
import classNames from "classnames";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
// style
import "./statistic.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-statistic`;

// createNameSpace
const [createComponent] = createNameSpace("Statistic");

// component
const Statistic = createComponent({
  props: {
    ...BasicProps,
  },
  setup(props, { attrs, slots, emit }) {
    const styledStat = (n: String) => {
      if (props.separate) {
        const re = /(?=(?!\b)(\d{3})+$)/g;
        return n.replace(re, ",");
      } else {
        return n;
      }
    };
    if (!props.value) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[ASoul] <Statistic> value could not be empty.");
      }
      return;
    }
    const val = ref(props.value);
    const label = ref(props.label);
    return () => (
      <div class={`${CLS_PREFIX} ${classNames(props.type)}`}>
        <div class={`${CLS_PREFIX}-label`}>{label.value}</div>
        <div class={`${CLS_PREFIX}-content`}>{styledStat(val.value)}</div>
      </div>
    );
  },
});

export default Statistic;
