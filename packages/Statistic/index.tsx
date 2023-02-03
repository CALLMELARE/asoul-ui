import { computed, PropType, reactive, ref } from "vue";
import classNames from "classnames";
import { NormalTypes } from "../utils/theme/propTypes";
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import "./statistic.scss";

export const CLS_PREFIX = `${prefix}-statistic`;

const [createComponent] = createNameSpace("Statistic");

export default createComponent({
  props: {
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
    },
    label: {
      type: String,
    },
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
