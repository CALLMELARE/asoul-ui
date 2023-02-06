import { computed, toRefs } from "vue";
import omit from "omit.js";
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import Line from "./Line";
import "./progress.scss";

export const CLS_PREFIX = `${prefix}-progress`;

const [createComponent] = createNameSpace("Progress");

const BasicProps = {
  value: { type: Number, default: 0 },
  maxvalue: { type: Number, default: "100" },
  text: { type: String, default: "" },
  type: { type: String, default: "line" },
};

export const validProgress = (p?: number) => {
  if (!p || p < 0) {
    return 0;
  }
  if (p > 100) {
    return 100;
  }
  return p;
};

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
