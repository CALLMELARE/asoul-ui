import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

const baseConfig = {
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
};

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "build") {
    return {
      // 生产环境配置
      ...baseConfig,
    };
  } else {
    return {
      // 开发环境配置
      ...baseConfig,
      resolve: {
        alias: [
          { find: "asoul-ui", replacement: resolve(__dirname, "packages") },
          { find: "assets", replacement: resolve(__dirname, "src/assets") },
        ],
      },
    };
  }
});
