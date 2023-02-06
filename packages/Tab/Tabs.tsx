import {
  computed,
  Ref,
  ref,
  watch,
  provide,
  reactive,
  ComponentPublicInstance,
} from "vue";
import { createNameSpace } from "../utils";
import { CLS_PREFIX } from "./";
import TabTitle, { TabTitleEmit } from "./TabTitle";
import "./tab.scss";

export const READONLY_TABS_KEY = "tabsKey";

const [createComponent] = createNameSpace("Tabs");

export type TabsProvide = {
  props: {
    active: string | number;
    hideDivider: boolean;
  };
  currentChecked: Ref<string | number>;
};

const Tabs = createComponent({
  props: {
    select: {
      type: [String, Number],
      default: 0,
    },
  },
  emits: ["change", "update:active", "click"],

  setup(props, { attrs, slots, emit }) {
    const currentChecked = ref<string | number>(props.select);

    provide(READONLY_TABS_KEY, { props, currentChecked });

    const setSelect = (data: TabTitleEmit) => {
      const { value, e } = data;
      currentChecked.value = value;
      const selfEvent = {
        target: {
          checkValue: value,
        },
        stopPropagation: e.stopPropagation,
        preventDefault: e.preventDefault,
        nativeEvent: e,
      };
      emit("update:active", value);
      emit("click", selfEvent);
    };

    watch(currentChecked, (pre) => emit("change", pre));

    const renderTitle = () => {
      const children = slots.default?.();
      if (children) {
        return children.map((e, i) => {
          return (
            <TabTitle
              title={e.props?.title}
              value={e.props?.value || i}
              key={i}
              active={currentChecked.value}
              onClick={setSelect}
            />
          );
        });
      }
    };

    return () => (
      <div class={`${CLS_PREFIX}-tabs`}>
        <header class={`${CLS_PREFIX}-header`}>{renderTitle()}</header>
        {slots.default?.()}
      </div>
    );
  },
});

export default Tabs;
