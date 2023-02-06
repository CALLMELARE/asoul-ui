// vue
import { provide } from "vue";
// props
import { BasicProps } from "./Props";
// external dependencies
import classNames from "classnames";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import BreadcrumbItem from "./breadcrumb-item";
// style
import "./breadcrumb.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-breadcrumb`;

// createNameSpace
const [createComponent] = createNameSpace("Breadcrumb");

export const READONLY_BREADCRUMB_KEY = "breadcrumbKey";

export type BreadcrumbProvide = {
  separator: String;
  disabled: Boolean;
};

// component
const Breadcrumb = createComponent({
  props: {
    ...BasicProps,
  },
  setup(props, { attrs, slots, emit }) {
    provide(READONLY_BREADCRUMB_KEY, {
      separator: props.separator,
      disabled: props.disabled,
    });

    return () => (
      <nav class={`${CLS_PREFIX} ${classNames(props.size)}`}>
        {slots.default?.()}
      </nav>
    );
  },
});

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
