import { NormalTypes } from "../utils/theme/propTypes";
import { computed, toRefs, PropType } from "vue";
import { createNameSpace } from "../utils";
import "./result.scss";

const [createComponent] = createNameSpace("Result");

export default createComponent({
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
      <div class={`asoul-result`}>
        <div class={`asoul-result-icon ${props.type}`}>{renderIcon()}</div>
        <div class={`asoul-result-title`}>{props.title}</div>
        <div class={`asoul-result-subtitle`}>{props.subtitle}</div>
        {slots.default?.()}
      </div>
    );
  },
});
