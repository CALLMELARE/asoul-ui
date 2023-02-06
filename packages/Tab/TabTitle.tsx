// vue
import { defineComponent } from "vue";
// props
import { TabTitleProps } from "./Props";
// external dependencies
import classNames from "classnames";
// internal dependencies
import { CLS_PREFIX } from "./";
// style
import "./tab.scss";

export type TabTitleEmit = {
  title: string;
  value: string | number;
  e: MouseEvent;
};

// component
export default defineComponent({
  props: {
    ...TabTitleProps,
  },
  emits: ["click"],
  setup(props, { attrs, slots, emit }) {
    const handleClick = (e: MouseEvent) => {
      const { title, value } = props;
      // when tab has disabled attrs,event is not allowed
      if (props.disabled) return;
      emit("click", { title, value, e } as TabTitleEmit);
    };

    return () => (
      <div
        class={`${CLS_PREFIX}-title ${classNames({
          disabled: props.disabled,
          active: props.active == props.value,
        })}`}
        onClick={(e) => handleClick(e)}
      >
        {props.title}
        <span class={`${CLS_PREFIX}-slider`} />
      </div>
    );
  },
});
