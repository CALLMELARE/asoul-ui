// vue
import {} from "vue";
// props
import { BasicProps } from "./Props";
// external dependencies
import { FolderOpenTwotone } from "@vicons/material";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import { ASIcon } from "../";
// style
import "./empty.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-empty`;

// createNameSpace
const [createComponent] = createNameSpace("Empty");

// component
const Empty = createComponent({
  props: {
    ...BasicProps,
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

export default Empty;
