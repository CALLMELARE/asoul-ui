import { computed, ref, Ref, toRefs, watchEffect } from "vue";
import { useProvider } from "../utils/useHooks";
import { createNameSpace } from "../utils";
import { READONLY_TABS_KEY, TabsProvide } from "../Tabs";
import "./tab.scss";

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
    const { context, idx } = useProvider<TabsProvide>(READONLY_TABS_KEY);
    const self = ref<string | number>(props.value);
    if (!context) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[TWT] <Tab> must be a child component of <Tabs>.");
      }
      return;
    }

    watchEffect(() => {
      if (self.value === "") return (self.value = idx);
    });

    const isDisabled = computed(() => {
      return context.currentChecked.value === self.value ? "" : "none";
    });
    return () => (
      <div class={`asoul-tab ${isDisabled.value}`}>{slots.default?.()}</div>
    );
  },
});
