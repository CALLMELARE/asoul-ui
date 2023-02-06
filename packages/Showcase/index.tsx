// vue
import {} from "vue";
// props
import { BasicProps } from "./Props";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
// style
import "./showcase.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-showcase`;

// createNameSpace
const [createComponent] = createNameSpace("Showcase");

// component
const Showcase = createComponent({
  props: {
    ...BasicProps,
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
