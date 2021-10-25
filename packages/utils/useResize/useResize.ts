import { ref } from "vue";
import { useEventListener } from "../useHooks";

/**
 * control viewprot size
 */

export const useResize = () => {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);
  const Resize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };
  useEventListener("resize", Resize);
  return { width, height };
};
