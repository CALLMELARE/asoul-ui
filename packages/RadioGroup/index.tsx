import { ref, PropType, Ref, provide } from "vue";
import { createNameSpace } from "../utils";
import { NormalSizes } from "../utils/theme/propTypes";
import "./radioGroup.scss";

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

export default createComponent({
  props: {
    initialValue: [String, Number],
    useRow: Boolean,
    disabled: Boolean,
    size: {
      type: String as PropType<NormalSizes>,
      default: "medium",
    },
  },
  emits: ["change"],
  setup(props, { slots, emit }) {
    const groupValue = ref(null);

    const updateState = (nextVal: RadioEvent) => emit("change", nextVal);

    provide(READNONLY_RADIO_GROUP_KEY, { props, updateState, groupValue });

    return () => (
      <div class={`asoul-radio-group ${props.useRow ? "useRow" : ""}`}>
        {slots.default?.()}
      </div>
    );
  },
});
