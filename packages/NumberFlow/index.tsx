// vue
import { onMounted, watchEffect, ref } from "vue";
// props
import { BasicProps } from "./Props";
// internal dependencies
import { createNameSpace } from "../utils";
import { prefix } from "../utils/core";
import format from "../utils/format";
// style
import "./numberFlow.scss";

// prefix definition
export const CLS_PREFIX = `${prefix}-number_flow`;

// createNameSpace
const [createComponent] = createNameSpace("NumberFlow");

interface RollingProps {
  start: number;
  end: number;
  duration: number;
  handleUpdate: (value: number) => void;
  handleStop: () => void;
}

// internal methods
const easeOut = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

function rolling(props: RollingProps): void {
  const { start, end, duration, handleUpdate, handleStop } = props;
  const tiktok = (): void => {
    const current = performance.now();
    // performance is a Web API measured in milliseconds.
    const elapsed = Math.min(current - startPoint, duration);
    const value = start + (end - start) * easeOut(elapsed / duration);
    if (elapsed === duration) {
      handleStop();
      return;
    }
    handleUpdate(value);
    requestAnimationFrame(tiktok);
    // requestAnimationFrame is a Web API that tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint
  };
  const startPoint = performance.now();
  tiktok();
}

// component
const NumberFlow = createComponent({
  props: {
    ...BasicProps,
  },
  setup(props, { attrs, slots, emit }) {
    let ongoing = false;
    const { duration } = props;
    const value = ref(props.start);

    const handleUpdate = (currentValue: number): void => {
      value.value = currentValue;
    };

    const handleStop = (): void => {
      value.value = props.end;
      ongoing = false;
    };

    const animation = (
      start: number = props.start,
      end: number = props.end
    ): void => {
      ongoing = true;
      value.value = props.start;
      if (start !== end) {
        // rolling
        rolling({
          start,
          end,
          duration,
          handleUpdate,
          handleStop,
        });
      }
    };

    onMounted(() => {
      watchEffect(() => {
        if (props.active) animation();
      });
    });

    return () => (
      <span class={`${CLS_PREFIX}`}>
        {format.round(value.value, props.precision)}
      </span>
    );
  },
});

export default NumberFlow;
