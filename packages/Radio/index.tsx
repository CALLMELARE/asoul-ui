import { computed, ref, watchEffect, PropType, inject } from "vue";
import { createNameSpace } from "../utils";
import { NormalSizes } from "../utils/theme/propTypes";
import { prefix } from "../utils/core";
import {
  RadioGroupProvide,
  READNONLY_RADIO_GROUP_KEY,
  RadioEvent,
} from "../RadioGroup";
import "./radio.scss";

export const CLS_PREFIX = `${prefix}-radio`;

const [createComponent] = createNameSpace("Radio");

export default createComponent({
  props: {
    checked: Boolean,
    disabled: Boolean,
    rounded: Boolean,
    value: { type: [String, Number], required: true },
    size: {
      type: String as PropType<NormalSizes>,
      default: "medium",
    },
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

    /**
     * when component init,it will execute once.
     * watchEffect will executed auto when the dependence is changed
     */

    if (context) {
      watchEffect(changeStatus);
    }
    /**
     * without radioGroup
     */
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

    const setSize = computed(() => {
      const names: string[] = [];
      props.size && names.push(props.size);
      return names;
    });

    const setRounded = computed(() => {
      const names: string[] = [];
      props.rounded && names.push("rounded");
      return names;
    });

    return () => (
      <div class={`${CLS_PREFIX} ${setSize.value}`}>
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
              class={`${CLS_PREFIX}-point ${
                isDisabled.value ? "disabled" : ""
              } ${selfChecked.value ? "active" : ""} ${setRounded.value}`}
            />
            {slots.default?.()}
          </span>
        </label>
      </div>
    );
  },
});
