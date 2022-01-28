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

const [createComponent] = createNameSpace("Chart");

export default createComponent({
  props: {
    cID: {
      type: String,
    },
    dID: {
      type: String,
    },
  },
  setup(props, { attrs, slots, emit }) {
    return () => (
      <div
        class="asoul-visual"
        style={`width:${props.width};height:${props.height};`}
        id={`${state.containerId}`}
      >
        <div class="asoul-visual-dom" id={`${state.domId}`}></div>
      </div>
    );
  },
});
