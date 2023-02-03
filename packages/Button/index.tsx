import { computed, ref, PropType } from "vue";
import classNames from "classnames";
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import {
  ButtonTypes,
  NormalSizes,
  NormalTypes,
} from "../utils/theme/propTypes";
import ButtonDrip from "./button-drip";
import ButtonLoading from "./button-loading";
import "./button.scss";

export const CLS_PREFIX = `${prefix}-btn`;

const [createComponent] = createNameSpace("Button");

export default createComponent({
  props: {
    type: {
      type: String as PropType<ButtonTypes>,
      default: "default",
    },
    size: {
      type: String as PropType<NormalSizes>,
      default: "medium",
    },
    color: {
      type: String as PropType<NormalTypes>,
      default: "primary",
    },
    disabled: Boolean,
    loading: Boolean,
    auto: Boolean,
    block: Boolean,
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const buttonRef = ref<HTMLButtonElement>();
    const drapShow = ref<boolean>(false); // control drap component display
    const drapX = ref<number>(0);
    const drapY = ref<number>(0);

    const clickHandler = (e: MouseEvent) => {
      if (props.disabled || props.loading) return;
      const showDrip = true;
      if (showDrip) {
        const rect = buttonRef.value?.getBoundingClientRect();
        drapShow.value = true;
        drapX.value = e.clientX - rect!.left;
        drapY.value = e.clientY - rect!.top;
        emit("click", e);
      }
    };

    const dripCompleteHandler = () => {
      setTimeout(() => {
        drapShow.value = false;
        drapX.value = 0;
        drapY.value = 0;
      }, 350);
    };

    return () => (
      <button
        disabled={props.disabled}
        class={`${CLS_PREFIX} ${classNames(
          {
            loading: props.loading,
            disabled: props.disabled,
            block: props.block,
            auto: props.auto,
          },
          props.type,
          props.size,
          props.color
        )}`}
        ref={buttonRef}
        onClick={clickHandler}
      >
        {props.loading && <ButtonLoading />}
        {drapShow.value && (
          <ButtonDrip
            x={drapX.value}
            y={drapY.value}
            onCompleted={dripCompleteHandler}
          />
        )}
        {slots.default?.()}
      </button>
    );
  },
});
