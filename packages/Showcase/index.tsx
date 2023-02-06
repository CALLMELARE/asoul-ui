import { computed, reactive, toRefs } from "vue";
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import "./showcase.scss";

export const CLS_PREFIX = `${prefix}-showcase`;

const [createComponent] = createNameSpace("Showcase");

const Showcase = createComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
    height: {
      type: [Number, String],
      default: 500,
    },
  },
  setup(props, { attrs, slots, emit }) {
    const srcExist = () => {
      if (props.src) {
        return "display:block;opacity:1;";
      }
      return "";
    };

    return () => (
      <div class={`${CLS_PREFIX}`} style={`height:${props.height}px;`}>
        <div class={`${CLS_PREFIX}-img-container`}>
          <img
            src={props.src}
            alt="showcase"
            class={`${CLS_PREFIX}-img`}
            style={`${srcExist()}`}
          />
        </div>
        <div class={`${CLS_PREFIX}-content`}>{slots.default?.()}</div>
      </div>
    );
  },
});

export default Showcase;
