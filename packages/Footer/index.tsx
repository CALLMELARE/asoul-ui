import { computed, toRefs } from "vue";
import { createNameSpace } from "../utils";
import "./footer.scss";

const [createComponent] = createNameSpace("Footer");

export default createComponent({
  props: {
    copyinfo: {
      type: String,
      default: "TWT Studio",
    },
    copyright: Boolean,
    bgcolor: {
      type: String,
    },
  },
  setup(props, { attrs, slots, emit }) {
    const getYear = () => {
      const now = new Date();
      return now.getFullYear();
    };

    return () => (
      <div class={`asoul-footer`} style={`background-color:${props.bgcolor};`}>
        <div class={`asoul-footer-row`}>{slots.default?.()}</div>
        {props.copyright ? (
          <div class={`asoul-footer-copyright`}>
            {`©Copyright ${getYear()} ${props.copyinfo} All Rights Reserved.`}
          </div>
        ) : null}
      </div>
    );
  },
});
