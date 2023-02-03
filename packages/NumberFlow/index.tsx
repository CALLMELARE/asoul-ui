import { computed, onMounted, watchEffect, ref } from "vue";
import { createNameSpace } from "../utils";
import "./numberFlow.scss";
import format from "../utils/format";

const [createComponent] = createNameSpace("NumberFlow");

interface RollingProps {
  start: number;
  end: number;
  duration: number;
  handleUpdate: (value: number) => void;
  handleStop: () => void;
}

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

export default createComponent({
  props: {
    start: {
      type: Number,
      default: 0,
    },
    end: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 2000,
    },
    precision: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: false,
    },
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
      <span class={`asoul-numberflow`}>
        {format.round(value.value, props.precision)}
      </span>
    );
  },
});
