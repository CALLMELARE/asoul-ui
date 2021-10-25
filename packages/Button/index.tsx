import { computed, ref, PropType } from "vue";
import { createNameSpace } from "../utils";
import {
  ButtonTypes,
  NormalSizes,
  NormalTypes,
} from "../utils/theme/propTypes";
import ButtonDrip from "./button-drip";
import ButtonLoading from './button-loading'
import "./button.scss";

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

    const setClass = computed(() => {
      const names: string[] = [];
      props.loading && names.push("loading");
      props.disabled && names.push("disabled");
      props.block && names.push("block");
      props.auto && names.push("auto");
      props.type && names.push(props.type);
      props.size && names.push(props.size);
      props.color && names.push(props.color);
      return names.join(" ");
    });

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
        class={`asoul-btn ${setClass.value}`}
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
