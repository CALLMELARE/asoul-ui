// vue
import { reactive, ref } from "vue";
// props
import { BasicProps } from "./Props";
// external dependencies
import classNames from "classnames";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
// style
import "./textField.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-text_field`;

// createNameSpace
const [createComponent] = createNameSpace("TextField");

// component
const TextField = createComponent({
  props: { ...BasicProps },
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
              class={`${CLS_PREFIX}-input ${classNames({
                disabled: props.disabled,
              })}`}
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
