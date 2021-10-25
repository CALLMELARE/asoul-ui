import { computed, reactive, toRefs } from "vue";
import { createNameSpace } from "../utils";
import "./showcase.scss";

const [createComponent] = createNameSpace("Showcase");

export default createComponent({
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
      <div class={`asoul-showcase`} style={`height:${props.height}px;`}>
        <div class={`asoul-showcase-img-container`}>
          <img
            src={props.src}
            alt="showcase"
            class={`asoul-showcase-img`}
            style={`${srcExist()}`}
          />
        </div>
        <div class={`asoul-showcase-content`}>{slots.default?.()}</div>
      </div>
    );
  },
});
