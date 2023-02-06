// vue
import { ref, Ref, provide } from "vue";
// props
import { RadioGroupProps } from "./Props";
import classNames from "classnames";
// internal dependencies
import { createNameSpace } from "../utils";
import { NormalSizes } from "../utils/theme/propTypes";
import { prefix } from "../utils/core";
// style
import "./radio.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-radio_group`;

// createNameSpace
const [createComponent] = createNameSpace("RadioGroup");

export const READNONLY_RADIO_GROUP_KEY = "radioGroupKey";

export type RadioGroupProvide = {
  props: {
    initialValue: string | number;
    useRow: boolean;
    disabled: boolean;
    size: NormalSizes;
  };
  updateState: (val: RadioEvent) => void;
  groupValue: Ref<unknown>;
};

interface RadioEeventTarget {
  checked?: boolean;
  checkedVal?: string | number;
}

export interface RadioEvent {
  target: RadioEeventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: Event;
}

// component
const RadioGroup = createComponent({
  props: {
    ...RadioGroupProps,
  },
  emits: ["change"],
  setup(props, { slots, emit }) {
    const groupValue = ref(null);

    const updateState = (nextVal: RadioEvent) => emit("change", nextVal);

    provide(READNONLY_RADIO_GROUP_KEY, { props, updateState, groupValue });

    return () => (
      <div class={`${CLS_PREFIX} ${classNames({ useRow: props.useRow })}`}>
        {slots.default?.()}
      </div>
    );
  },
});

export default RadioGroup;
