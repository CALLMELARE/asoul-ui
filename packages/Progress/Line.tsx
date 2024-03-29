// vue
import { computed } from "vue";
// props
import { LineProps } from "./Props";
// external dependencies
import { CheckmarkCircle16Filled, DismissCircle16Filled } from "@vicons/fluent";
// internal dependencies
import { createNameSpace } from "../utils";
import { CLS_PREFIX, validProgress } from "./";
import Icon from "../Icon";
import classNames from "classnames";

// createNameSpace
const [createComponent] = createNameSpace("Progress.Line");

// component
const Line = createComponent({
  props: {
    ...LineProps,
  },
  setup(props, { attrs, slots, emit }) {
    const renderStatus = () => {
      let dom = null;
      const successIcon = (
        <Icon size="16">
          <CheckmarkCircle16Filled />
        </Icon>
      );
      const failureIcon = (
        <Icon size="16">
          <DismissCircle16Filled />
        </Icon>
      );
      if (props.status === "success") {
        dom = successIcon;
      } else if (props.status === "fail") {
        dom = failureIcon;
      }
      return dom;
    };

    const setWidth = computed(() => {
      const wid = validProgress(props.value / props.maxvalue) * 100;
      return wid;
    });

    return () => (
      <div
        class={`${CLS_PREFIX}-line ${classNames({
          [`${CLS_PREFIX}-line-with-info`]: props.showInfo || props.status,
          [`${CLS_PREFIX}-line-with-info-success`]: props.status === "success",
          [`${CLS_PREFIX}-line-with-info-fail`]: props.status === "fail",
          [`${CLS_PREFIX}-line-active`]: props.active,
        })}`}
      >
        <div class={`${CLS_PREFIX}-line-outer`}>
          <span
            class={`${CLS_PREFIX}-line-completed`}
            style={`width:${setWidth.value}%;`}
          ></span>
          <span
            class={`${CLS_PREFIX}-line-background`}
            style={`width:${100 - setWidth.value}%`}
          ></span>
        </div>
        <div class={`${CLS_PREFIX}-line-info`}>
          {props.status ? (
            renderStatus()
          ) : (
            <span class={`${CLS_PREFIX}-line-info-text`}>
              {(props.value / props.maxvalue) * 100 + "%"}
            </span>
          )}
        </div>
      </div>
    );
  },
});

export default Line;
