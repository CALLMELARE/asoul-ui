import { createNameSpace } from "../utils";
import "./modal.scss";
import { ASIcon, ASButton } from "../";

const [createComponent] = createNameSpace("Modal");

export default createComponent({
  props: {
    show: {
      type: Boolean,
    },
  },
  emits: ["click"],
  setup(props, { attrs, slots, emit }) {
    // console.log("show:" + props.show);
    const handleClose = () => {
      emit("click", false);
    };
    return () => (
      <div class={`asoul-modal-mask ${props.show ? "" : "hide"}`}>
        <div class={`asoul-modal`}>
          <div class="asoul-modal-header">
            <span>{slots.header?.()}</span>
            <span>
              {slots.header_extra?.()}
              <ASButton
                onClick={handleClose}
                class="asoul-modal-close"
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
          <div class="asoul-modal-content">{slots.default?.()}</div>
          <div class="asoul-modal-footer">{slots.footer?.()}</div>
        </div>
      </div>
    );
  },
});
