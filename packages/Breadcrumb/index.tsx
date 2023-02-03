import { computed, PropType, provide } from "vue";
import classNames from "classnames";
import { NormalSizes } from "../utils/theme/propTypes";
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import "./breadcrumb.scss";

export const CLS_PREFIX = `${prefix}-breadcrumb`;

const [createComponent] = createNameSpace("Breadcrumb");

export const READONLY_BREADCRUMB_KEY = "breadcrumbKey";

export type BreadcrumbProvide = {
  separator: String;
  disabled: Boolean;
};

export default createComponent({
  props: {
    separator: {
      type: String,
      default: ">",
    },
    size: {
      type: String as PropType<NormalSizes>,
      default: "medium",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
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
