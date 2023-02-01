import { PropType, provide } from "vue";
import { createNameSpace } from "../utils";
import { NormalSizes } from "../utils/theme/propTypes";
const [createComponent] = createNameSpace("CheckboxGroup");
import "./checkboxGroup.scss";

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

export default createComponent({
  props: {
    disabled: Boolean,
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    size: {
      type: String as PropType<NormalSizes>,
      default: "medium",
    },
    useRow: Boolean,
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
      <div class={`asoul-checkbox_group ${props.useRow ? "useRow" : ""}`}>
        {slots.default?.()}
      </div>
    );
  },
});
