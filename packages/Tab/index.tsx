import { computed, ref, inject, watchEffect } from "vue";
import { createNameSpace } from "../utils";
import Tabs, { READONLY_TABS_KEY, TabsProvide } from "./Tabs";
import TabTitle from "./TabTitle";
import { prefix } from "../utils/core";
import "./tab.scss";

export const CLS_PREFIX = `${prefix}-tab`;

const [createComponent] = createNameSpace("Tab");

export default createComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    disabled: Boolean,
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

    const isDisabled = computed(() => {
      return context.currentChecked.value == self.value ? "" : "none";
    });

    return () => (
      <div class={`${CLS_PREFIX} ${isDisabled.value}`}>{slots.default?.()}</div>
    );
  },
});

export { Tabs, TabTitle };
