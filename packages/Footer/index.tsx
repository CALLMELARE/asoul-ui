import { computed, toRefs } from "vue";
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import FooterItem from "./FooterItem";
import FooterList from "./FooterList";
import FooterTitle from "./FooterTitle";
import "./footer.scss";

export const CLS_PREFIX = `${prefix}-footer`;

const [createComponent] = createNameSpace("Footer");

export default createComponent({
  props: {
    copyinfo: {
      type: String,
      default: "ASoul UI",
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
      <div class={`${CLS_PREFIX}`} style={`background-color:${props.bgcolor};`}>
        <div class={`${CLS_PREFIX}-row`}>{slots.default?.()}</div>
        {props.copyright ? (
          <div class={`${CLS_PREFIX}-copyright`}>
            {`©Copyright ${getYear()} ${props.copyinfo} All Rights Reserved.`}
          </div>
        ) : null}
      </div>
    );
  },
});

export { FooterItem, FooterList, FooterTitle };
