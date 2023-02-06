import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import { ASIcon, ASButton } from "../";
import "./modal.scss";

export const CLS_PREFIX = `${prefix}-modal`;

const [createComponent] = createNameSpace("Modal");

const Modal = createComponent({
  props: {
    show: {
      type: Boolean,
    },
  },
  emits: ["click"],
  setup(props, { attrs, slots, emit }) {
    const handleClose = () => {
      emit("click", false);
    };
    return () => (
      <div class={`${CLS_PREFIX}-mask ${props.show ? "" : "hide"}`}>
        <div class={`${CLS_PREFIX}`}>
          <div class={`${CLS_PREFIX}-header`}>
            <span>{slots.header?.()}</span>
            <span>
              {slots.header_extra?.()}
              <ASButton
                onClick={handleClose}
                class={`${CLS_PREFIX}-close`}
                type="text"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"
                    fill="currentColor"
                  ></path>
                </svg>
              </ASButton>
            </span>
          </div>
          <div class={`${CLS_PREFIX}-content`}>{slots.default?.()}</div>
          <div class={`${CLS_PREFIX}-footer`}>{slots.footer?.()}</div>
        </div>
      </div>
    );
  },
});

export default Modal;
