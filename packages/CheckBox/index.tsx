import { computed, ref, watchEffect, PropType, inject } from "vue";
import { createNameSpace } from "../utils";
import { NormalSizes } from "../utils/theme/propTypes";
import { prefix } from "../utils/core";
import {
  READONLY_CHECKBOX_KEY,
  CheckboxEvent,
  CheckboxGroupProvide,
} from "../CheckboxGroup";
import "./checkBox.scss";

export const CLS_PREFIX = `${prefix}-check_box`;

const [createComponent] = createNameSpace("Checkbox");

export default createComponent({
  props: {
    disabled: Boolean,
    modelValue: Boolean,
    size: {
      type: String as PropType<NormalSizes>,
      default: "medium",
    },
    label: {
      type: [String],
      default: "",
    },
  },
  emits: ["change", "update:modelValue"],
  setup(props, { slots, emit }) {
    const isChecked = ref<boolean>(props.modelValue);
    const selfSize = ref<NormalSizes>(props.size);
    const isDisabled = ref<boolean>(props.disabled);

    const context = inject<CheckboxGroupProvide>(READONLY_CHECKBOX_KEY);

    const setCurrentState = () => {
      const { modelValue } = context!.props;
      const value = modelValue.slice();
      isChecked.value = Boolean(value.find((v) => v === props.label));
    };

    const setCurrentStyle = () => {
      isDisabled.value = context!.props.disabled;
      selfSize.value = context!.props.size;
    };

    const setParentValue = (event: CheckboxEvent) => {
      const { label } = props;
      const { modelValue } = context!.props;
      const { updateParentValue, handlerParentChange } = context!;
      const value = modelValue.slice();
      if (!isChecked.value) {
        const index = value.indexOf(label);
        value.splice(index, 1);
      } else {
        if (value.indexOf(label) === -1) {
          value.push(label);
        }
      }
      updateParentValue(value);
      handlerParentChange({ ...event, target: { value } });
    };

    const handleChange = (e: Event) => {
      isChecked.value = !isChecked.value;
      const CheckboxEvent: CheckboxEvent = {
        target: {
          checked: isChecked.value,
        },
        stopPropagation: e.stopPropagation,
        preventDefault: e.preventDefault,
        nativeEvent: e,
      };
      if (context) {
        setParentValue(CheckboxEvent);
      }
      if (!context) {
        emit("update:modelValue", isChecked.value);
        emit("change", CheckboxEvent);
      }
    };

    if (context) {
      watchEffect(() => {
        setCurrentState();
        setCurrentStyle();
      });
    }

    const setSize = computed(() => {
      const names: string[] = [];
      props.size && names.push(props.size);
      return names;
    });

    return () => (
      <label
        class={`${CLS_PREFIX} ${isDisabled.value ? "disabled" : ""} ${
          setSize.value
        }`}
      >
        <input
          type="checkbox"
          disabled={isDisabled.value}
          checked={isChecked.value}
          onChange={handleChange}
        ></input>
        <span class={`${CLS_PREFIX}-text_inner`}>
          <span
            class={`${CLS_PREFIX}-point ${isDisabled.value ? "disabled" : ""} ${
              isChecked.value ? "active" : ""
            }`}
          />
          {slots.default?.()}
        </span>
      </label>
    );
  },
});
