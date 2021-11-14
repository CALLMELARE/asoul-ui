import { NormalSizes, NormalTypes } from "../utils/theme/propTypes";
import { computed, PropType, toRefs } from "vue";
import { createNameSpace } from "../utils";
import "../Tag/tag.scss";

const [createComponent] = createNameSpace("Tag");

export default createComponent({
  props: {
    size: {
      type: String as PropType<NormalSizes>,
      default: "medium",
    },
    type: {
      type: String as PropType<NormalTypes>,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    invert:{
      type: Boolean,
      default: false,
    }
  },
  setup(props, { attrs, slots, emit }) {
    const setClass = computed(() => {
      const names = [];
      props.size && names.push(props.size);
      props.type && names.push(props.type);
      props.disabled && names.push("disabled");
      props.rounded && names.push("rounded");
      props.outlined && names.push("outlined");
      props.invert && names.push("invert");
      return names.join(" ");
    });
    return () => (
      <div class={`asoul-tag ${setClass.value}`}>
        {slots.default?.()}
      </div>
    );
  },
});
