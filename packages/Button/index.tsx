// vue
import { ref } from "vue";
// props
import { BasicProps } from "./Props";
// external dependencies
import classNames from "classnames";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import ButtonDrip from "./button-drip";
import ButtonLoading from "./button-loading";
// style
import "./button.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-btn`;

// createNameSpace
const [createComponent] = createNameSpace("Button");

// component
const Button = createComponent({
  props: {
    ...BasicProps,
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

export default Button;
