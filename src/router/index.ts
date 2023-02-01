import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Docs from "../views/Docs/index.vue";
import Install from "../views/Docs/Install/index.vue";
import ImportOnDemand from "../views/Docs/ImportOnDemand/index.vue";
import CustomizeTheme from "../views/Docs/CustomizeTheme/index.vue";
import Comp from "../views/Components/index.vue";
import Welcome from "../views/Docs/Welcome.vue";
import Welcomee from "../views/Components/Welcome.vue";
import Colors from "../views/Docs/Colors/index.vue";
import Avatar from "../views/Components/Avatar/index.vue";
import Alert from "../views/Components/Alert/index.vue";
import Breadcrumb from "../views/Components/Breadcrumb/index.vue";
import Button from "../views/Components/Button/index.vue";
import Card from "../views/Components/Card/index.vue";
import Checkbox from "../views/Components/Checkbox/index.vue";
import GradientText from "../views/Components/GradientText/index.vue";
import Icon from "../views/Components/Icon/index.vue";
import NumberFlow from "../views/Components/NumberFlow/index.vue";
import Layout from "../views/Components/Layout/index.vue";
import Progress from "../views/Components/Progress/index.vue";
import Radio from "../views/Components/Radio/index.vue";
import Result from "../views/Components/Result/index.vue";
import Showcase from "../views/Components/Showcase/index.vue";
import Statistic from "../views/Components/Statistic/index.vue";
import Tabs from "../views/Components/Tabs/index.vue";
import Tag from "../views/Components/Tag/index.vue";
import TextField from "../views/Components/TextField/index.vue";
import Typography from "../views/Components/Typography/index.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/docs",
    name: "Docs",
    component: Docs,
    meta: { title: "文档" },
    children: [
      {
        path: "",
        name: "Welcome",
        component: Welcome,
        meta: { title: "文档" },
      },
      {
        path: "install",
        name: "Install",
        component: Install,
        meta: { title: "安装" },
      },
      {
        path: "import-on-demand",
        name: "ImportOnDemand",
        component: ImportOnDemand,
        meta: { title: "按需引入" },
      },
      {
        path: "colors",
        name: "Colors",
        component: Colors,
        meta: { title: "色彩" },
      },
      {
        path: "customize-theme",
        name: "CustomizeTheme",
        component: CustomizeTheme,
        meta: { title: "定制主题" },
      },
    ],
  },
  {
    path: "/components",
    name: "Components",
    component: Comp,
    meta: { title: "组件" },
    children: [
      {
        path: "",
        name: "Welcomee",
        component: Welcomee,
        meta: { title: "组件" },
      },
      {
        path: "alert",
        name: "Alert",
        component: Alert,
        meta: { title: "警告信息 / Alert" },
      },
      {
        path: "avatar",
        name: "Avatar",
        component: Avatar,
        meta: { title: "头像 / Avatar" },
      },
      {
        path: "breadcrumb",
        name: "Breadcrumb",
        component: Breadcrumb,
        meta: { title: "面包屑 / Breadcrumb" },
      },
      {
        path: "button",
        name: "Button",
        component: Button,
        meta: { title: "按钮 / Button" },
      },
      {
        path: "card",
        name: "Card",
        component: Card,
        meta: { title: "卡片 / Card" },
      },
      {
        path: "checkbox",
        name: "Checkbox",
        component: Checkbox,
        meta: { title: "复选框 / Checkbox" },
      },
      {
        path: "gradient-text",
        name: "GradientText",
        component: GradientText,
        meta: { title: "渐变文字 / GradientText" },
      },
      {
        path: "icon",
        name: "Icon",
        component: Icon,
        meta: { title: "图标 / Icon" },
      },
      {
        path: "layout",
        name: "Layout",
        component: Layout,
        meta: { title: "布局 / Layout" },
      },
      {
        path: "progress",
        name: "Progress",
        component: Progress,
        meta: { title: "进度 / Progress" },
      },
      {
        path: "radio",
        name: "Radio",
        component: Radio,
        meta: { title: "单选 / Radio" },
      },
      {
        path: "result",
        name: "Result",
        component: Result,
        meta: { title: "结果页 / Result" },
      },
      {
        path: "statistic",
        name: "Statistic",
        component: Statistic,
        meta: { title: "统计数据 / Statistic" },
      },
      {
        path: "number-flow",
        name: "NumberFlow",
        component: NumberFlow,
        meta: { title: "滚动数值 / NumberFlow" },
      },
      {
        path: "showcase",
        name: "Showcase",
        component: Showcase,
        meta: { title: "橱窗 / Showcase" },
      },
      {
        path: "tabs",
        name: "Tabs",
        component: Tabs,
        meta: { title: "标签页 / Tabs" },
      },
      {
        path: "tag",
        name: "Tag",
        component: Tag,
        meta: { title: "标签 / Tag" },
      },
      {
        path: "text-field",
        name: "TextField",
        component: TextField,
        meta: { title: "文本框 / TextField" },
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography,
        meta: { title: "排版 / Typography" },
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { title: "关于" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  // 设置标签页title
  window.document.title =
    to.meta.title == undefined
      ? "ASoul UI : 一个魂的Vue3组件库"
      : `${to.meta.title} - ASoul UI`;
  next();
});

export default router;
