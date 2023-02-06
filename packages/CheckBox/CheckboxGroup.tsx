// vue
import { PropType, provide } from "vue";
// props
import { CheckboxGroupProps } from "./Props";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import { NormalSizes } from "../utils/theme/propTypes";
// style
import "./checkBox.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-checkbox_group`;

// createNameSpace
const [createComponent] = createNameSpace("CheckboxGroup");

export const READONLY_CHECKBOX_KEY = "checkboxKey";

interface CheckboxEeventTarget {
  checked?: boolean;
  value?: string[];
}

export interface CheckboxEvent {
  target: CheckboxEeventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: Event;
}

export type CheckboxGroupProvide = {
  props: {
    disabled: boolean;
    modelValue: string[];
    size: NormalSizes;
    useRow: boolean;
  };
  updateParentValue: (val: unknown[]) => void;
  handlerParentChange: (e: CheckboxEvent) => void;
};

// component
const CheckboxGroup = createComponent({
  props: {
    ...CheckboxGroupProps,
  },
  emits: ["change", "update:modelValue"],
  setup(props, { slots, emit }) {
    const updateParentValue = (pre: unknown[]) =>
      emit("update:modelValue", pre);
    const handlerParentChange = (e: CheckboxEvent) => emit("change", e);

    provide(READONLY_CHECKBOX_KEY, {
      props,
      updateParentValue,
      handlerParentChange,
    });

    return () => (
      <div class={`${CLS_PREFIX} ${props.useRow ? "useRow" : ""}`}>
        {slots.default?.()}
      </div>
    );
  },
});

export default CheckboxGroup;
