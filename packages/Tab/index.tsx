// vue
import { computed, ref, inject } from "vue";
// props
import { BasicProps } from "./Props";
// internal dependencies
import { createNameSpace } from "../utils";
import Tabs, { READONLY_TABS_KEY, TabsProvide } from "./Tabs";
import TabTitle from "./TabTitle";
import { prefix } from "../utils/core";
// style
import "./tab.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-tab`;

// createNameSpace
const [createComponent] = createNameSpace("Tab");

// component
const Tab = createComponent({
  props: {
    ...BasicProps,
  },
  setup(props, { attrs, slots, emit }) {
    const context = inject<TabsProvide>(READONLY_TABS_KEY);

    const self = ref<string | number>(props.value);

    if (!context) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[ASoul] <Tab> must be a child component of <Tabs>.");
      }
      return;
    }

    const isSelected = computed(() => {
      return context.currentChecked.value == self.value ? "" : "none";
    });

    return () => (
      <div class={`${CLS_PREFIX} ${isSelected.value}`}>{slots.default?.()}</div>
    );
  },
});

export default Tab;
export { Tabs, TabTitle };
