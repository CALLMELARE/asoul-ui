// vue
import { computed, ref, watchEffect, inject } from "vue";
// props
import { BasicProps } from "./Props";
// external dependencies
import classNames from "classnames";
// internal dependencies
import { createNameSpace } from "../utils";
import { NormalSizes } from "../utils/theme/propTypes";
import { prefix } from "../utils/core";
import RadioGroup, {
  RadioGroupProvide,
  READNONLY_RADIO_GROUP_KEY,
  RadioEvent,
} from "./RadioGroup";
// style
import "./radio.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-radio`;

// createNameSpace
const [createComponent] = createNameSpace("Radio");

// component
const Radio = createComponent({
  props: {
    ...BasicProps,
  },
  emits: ["change"],
  setup(props, { emit, slots }) {
    const radioValue = ref<string | number>(props.value);
    const radioSize = ref<NormalSizes>(props.size);
    const isDisabled = ref<boolean>(props.disabled);
    const selfChecked = ref<boolean>(!!props.checked);

    const context = inject<RadioGroupProvide>(READNONLY_RADIO_GROUP_KEY);

    const changeStatus = () => {
      const { disabled, size, initialValue } = context!.props;
      isDisabled.value = disabled;
      radioSize.value = size;
      /** refactor */
      const parentValue = initialValue || null;
      if (context?.groupValue.value) {
        selfChecked.value = context.groupValue.value === props.value;
      }
      if (!context?.groupValue.value) {
        if (parentValue) selfChecked.value = parentValue === props.value;
      }
    };

    if (context) {
      watchEffect(changeStatus);
    }

    if (!context) {
      watchEffect(() => {
        selfChecked.value = props.checked ? true : false;
      });
    }

    const handleChange = (e: Event) => {
      if (isDisabled.value) return;
      selfChecked.value = !selfChecked.value;
      const radioEvent: RadioEvent = {
        target: {
          checked: selfChecked.value,
        },
        stopPropagation: e.stopPropagation,
        preventDefault: e.preventDefault,
        nativeEvent: e,
      };
      if (context) {
        context.groupValue.value = props.value;
        context.updateState &&
          context.updateState({
            ...radioEvent,
            target: { checkedVal: radioValue.value },
          });
      }
      if (!context) {
        emit("change", radioEvent);
      }
    };

    return () => (
      <div class={`${CLS_PREFIX} ${classNames(props.size)}`}>
        <label class={`${isDisabled.value ? "disabled" : ""}`}>
          <input
            type="radio"
            value={radioValue.value}
            checked={selfChecked.value}
            onChange={handleChange}
            disabled={isDisabled.value}
          ></input>
          <span class={`${CLS_PREFIX}-name`}>
            <span
              class={`${CLS_PREFIX}-point ${classNames(
                {
                  rounded: props.rounded,
                  active: selfChecked.value,
                  disabled: isDisabled.value,
                },
                props.size
              )}`}
            />
            {slots.default?.()}
          </span>
        </label>
      </div>
    );
  },
});

Radio.Group = RadioGroup;

export default Radio;
export { RadioGroup };
