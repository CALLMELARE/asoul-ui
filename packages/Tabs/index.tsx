import { createProvider } from "../utils/useHooks";
import { ComponentInstance } from "../utils/base";
import { computed, Ref, ref, watch } from "vue";
import { createNameSpace } from "../utils";
import TabTitle, { TabTitleEmit } from "../TabTitle";
import "./tabs.scss";

export const READONLY_TABS_KEY = "tabsKey";

const [createComponent] = createNameSpace("Tabs");

export type TabsProvide = {
  props: {
    active: string | number;
    hideDivider: boolean;
  };
  currentChecked: Ref<string | number>;
};

export default createComponent({
  props: {
    select: {
      type: [String, Number],
      default: 0,
    },
  },
  emits: ["change", "update:active", "click"],

  setup(props, { attrs, slots, emit }) {
    const currentChecked = ref<string | number>(props.select);

    const { provider, children } = createProvider<ComponentInstance>(
      READONLY_TABS_KEY
    );

    provider({ props, currentChecked });

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
      return children.map((e, i) => (
        <TabTitle
          title={e.title}
          value={e.value || i}
          key={i}
          active={currentChecked.value}
          onClick={setSelect}
        />
      ));
    };

    return () => (
      <div class={`asoul-tabs`}>
        <header class={`asoul-tab-header`}>{renderTitle()}</header>
        {slots.default?.()}
      </div>
    );
  },
});
