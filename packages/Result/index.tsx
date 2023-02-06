import { computed, toRefs, PropType } from "vue";
import { NormalTypes } from "../utils/theme/propTypes";
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import "./result.scss";

export const CLS_PREFIX = `${prefix}-result`;

const [createComponent] = createNameSpace("Result");

const Result = createComponent({
  props: {
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
  },
  setup(props, { attrs, slots, emit }) {
    const renderIcon = () => {
      if (props.type === "success") return <span class="success-icon"></span>;
      if (props.type === "warning") return <span class="warning-icon"></span>;
      if (props.type === "error") return <span class="error-icon"></span>;
      if (props.type === "info") return <span class="info-icon"></span>;
    };

    return () => (
      <div class={`${CLS_PREFIX}`}>
        <div class={`${CLS_PREFIX}-icon ${props.type}`}>{renderIcon()}</div>
        <div class={`${CLS_PREFIX}-title`}>{props.title}</div>
        <div class={`${CLS_PREFIX}-subtitle`}>{props.subtitle}</div>
        {slots.default?.()}
      </div>
    );
  },
});

export default Result;
