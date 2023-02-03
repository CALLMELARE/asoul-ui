import { computed, onMounted, watchEffect, ref } from "vue";
import { FolderOpenTwotone } from "@vicons/material";
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import { ASIcon } from "../";
import "./empty.scss";

export const CLS_PREFIX = `${prefix}-empty`;

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
      <div class={`${CLS_PREFIX}`}>
        <ASIcon size="36px" style={`text-align: center;`}>
          <FolderOpenTwotone />
        </ASIcon>
        {slots.default?.()}
        <div class={`${CLS_PREFIX}-description`}>{props.description}</div>
      </div>
    );
  },
});
