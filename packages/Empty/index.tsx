import { createNameSpace } from "../utils";
import "./empty.scss";
import { ASIcon } from "../";
import { Archive20Regular } from "@vicons/fluent";
import { computed, onMounted, watchEffect, ref } from "vue";

const [createComponent] = createNameSpace("Empty");

export default createComponent({
  props: {
    description: {
      type: String,
      default: "空空如也",
    },
  },
  setup(props, { attrs, slots, emit }) {
    return () => (
      <div class="asoul-empty">
        <ASIcon size="36px" style={`text-align: center;`}>
          <Archive20Regular />
        </ASIcon>
        {slots.default?.()}
        <div class="asoul-empty-description">{props.description}</div>
      </div>
    );
  },
});
