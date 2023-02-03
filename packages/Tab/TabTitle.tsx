import { computed, defineComponent } from "vue";
import { CLS_PREFIX } from "./";

import "./tab.scss";

export type TabTitleEmit = {
  title: string;
  value: string | number;
  e: MouseEvent;
};

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    disabled: Boolean,
    active: [String, Number],
  },
  emits: ["click"],
  setup(props, { attrs, slots, emit }) {
    const handleClick = (e: MouseEvent) => {
      const { title, value } = props;
      // when tab has disabled attrs,event is not allowed
      if (props.disabled) return;
      emit("click", { title, value, e } as TabTitleEmit);
    };

    const setDisabled = computed(() => {
      return props.disabled ? "disabled" : "";
    });

    const setActive = computed(() => {
      return props.active == props.value ? "active" : "";
    });

    return () => (
      <div
        class={`${CLS_PREFIX}-title ${setDisabled.value} ${setActive.value}`}
        onClick={(e) => handleClick(e)}
      >
        {props.title}
        <span class={`${CLS_PREFIX}-slider`} />
      </div>
    );
  },
});
