import { NormalSizes } from "../utils/theme/propTypes";
import { computed, PropType, reactive, ref, toRefs } from "vue";
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import "./textField.scss";

export const CLS_PREFIX = `${prefix}-text_field`;

const [createComponent] = createNameSpace("TextField");

const TextField = createComponent({
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    type: { type: String, default: "text" },
    placeholder: String,
    size: {
      type: String as PropType<NormalSizes>,
      default: "medium",
    },
    autocomplete: String,
    readonly: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    label: String,
    block: Boolean,
    prefix: [String, Number],
    suffix: [String, Number],
  },
  emits: ["change", "blur", "focus", "clearClick"],
  setup(props, { attrs, slots, emit }) {
    const state = reactive({
      value: props.value,
    });
    const inputRef = ref<HTMLInputElement>();
    const hover = ref<boolean>(false);
    const selfType = ref<string>(props.type);
    const setHoverable = (pre: boolean) => (hover.value = pre);
    const InputHandler = (e: Event) => {
      state.value = (e.target as HTMLInputElement).value;
    };

    const FocusHandler = (e: Event) => {
      setHoverable(true);
      emit("focus", e);
    };

    const BlurHandler = (e: Event) => {
      setHoverable(false);
      emit("blur", e);
    };

    const ChangeHandler = (e: Event) => {
      if (props.disabled || props.readonly) return;
      emit("change", e);
    };

    return () => (
      <div class={`${CLS_PREFIX}`}>
        <div class={`${CLS_PREFIX}-wrapper`}>
          <div class={`${CLS_PREFIX}-box`}>
            <input
              style={`${props.block ? "width:100%;" : ""}`}
              class={`${CLS_PREFIX}-input ${props.disabled ? "disabled" : ""}`}
              type={selfType.value}
              ref={inputRef}
              value={state.value}
              placeholder={props.placeholder}
              autocomplete={props.autocomplete}
              onInput={InputHandler}
              onFocus={FocusHandler}
              onBlur={BlurHandler}
              onChange={ChangeHandler}
            />
            {props.label && (
              <div
                class={`${CLS_PREFIX}-label ${
                  state.value || props.placeholder ? "focused" : ""
                }`}
              >
                {props.label}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
});

export default TextField;
