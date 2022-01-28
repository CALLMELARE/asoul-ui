import { computed, toRefs, PropType, reactive, onMounted, nextTick } from "vue";
import {
  createNameSpace,
  createProvider,
  useProvider,
  uniqueId,
} from "../utils";
import { ChartTypes } from "../utils/theme/propTypes";
import "./visual.scss";
import echarts, { EChartsOption } from "echarts";
import chart from "./chart";

const [createComponent] = createNameSpace("Visual");

interface VisualContext {}

const READONLY_VISUAL_KEY = Symbol("visual");

const createVisualContext = () => createProvider(READONLY_VISUAL_KEY);

const useVisualContext = () => useProvider<VisualContext>(READONLY_VISUAL_KEY);

const defaultOptions = {
  title: {
    text: "Visual 入门示例",
  },
  tooltip: {},
  legend: {
    data: ["销量"],
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

export default createComponent({
  props: {
    type: {
      type: String as PropType<ChartTypes>,
      required: true,
    },
    width: {
      type: String,
      default: "800px",
    },
    height: {
      type: String,
      default: "600px",
    },
    options: {
      type: Object as PropType<EChartsOption>,
      default: defaultOptions,
    },
  },
  setup(props, { attrs, slots, emit }) {
    const genContainerUID = uniqueId("asoul_visual");
    const genDomUID = uniqueId("asoul_visual");
    const state = reactive({
      containerId: genContainerUID,
      domId: genDomUID,
    });

    if (!props.type) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[ASoul] <Visual> type could not be empty.");
      }
      return;
    }

    if (!props.options) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[ASoul] <Visual> options could not be empty.");
      }
      return;
    }

    // must be here or cannot find dom
    onMounted(() => {
      echarts
        .init(document.getElementById(`${state.domId}`) as HTMLElement)
        .setOption(props.options);
    });

    return () => <chart cID={state.containerId} dID={state.domId}></chart>;
  },
});
