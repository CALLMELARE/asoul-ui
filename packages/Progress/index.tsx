// vue
import { computed } from "vue";
// props
import { BasicProps } from "./Props";
// External dependencies
import omit from "omit.js";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import Line from "./Line";
// style
import "./progress.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-progress`;

// createNameSpace
const [createComponent] = createNameSpace("Progress");

// internal methods
export const validProgress = (p?: number) => {
  if (!p || p < 0) {
    return 0;
  }
  if (p > 100) {
    return 100;
  }
  return p;
};

// component
export default createComponent({
  props: {
    ...BasicProps,
  },
  setup(props, { attrs, slots, emit }) {
    const setWidth = computed(() => {
      const wid = validProgress(props.value / props.maxvalue) * 100;
      return wid;
    });

    const renderProgress = () => {
      if (props.type === "line") {
        return <Line {...omit(props, ["type"])} />;
      }
    };

    return () => <div class={`${CLS_PREFIX}`}>{renderProgress()}</div>;
  },
});
