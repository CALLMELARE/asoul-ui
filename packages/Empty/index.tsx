import { createNameSpace } from "../utils";
import "./empty.scss";
import { ASIcon } from "../";
import { FolderOpenTwotone } from "@vicons/material";
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
          <FolderOpenTwotone />
        </ASIcon>
        {slots.default?.()}
        <div class="asoul-empty-description">{props.description}</div>
      </div>
    );
  },
});
