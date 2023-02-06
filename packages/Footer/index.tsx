// vue
import {} from "vue";
// props
import { BasicProps } from "./Props";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import FooterItem from "./FooterItem";
import FooterList from "./FooterList";
import FooterTitle from "./FooterTitle";
// style
import "./footer.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-footer`;

// createNameSpace
const [createComponent] = createNameSpace("Footer");

// component
const Footer = createComponent({
  props: {
    ...BasicProps,
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

Footer.Item = FooterItem;
Footer.List = FooterList;
Footer.Title = FooterTitle;

export default Footer;
export { FooterItem, FooterList, FooterTitle };
