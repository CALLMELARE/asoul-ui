// vue
import {} from "vue";
// props
import { BasicProps } from "./Props";
// external dependencies
import { FolderOpen20Regular } from "@vicons/fluent";
import { Icon } from "@vicons/utils";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
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
        <Icon size="32">
          <FolderOpen20Regular />
        </Icon>
        <div class={`${CLS_PREFIX}-description`}>{props.description}</div>
      </div>
    );
  },
});

export default Empty;
