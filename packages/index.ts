import { App } from "vue";

import Alert from "./Alert";
import Button from "./Button";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "./Breadcrumb/breadcrumb-item";
import Card from "./Card";
import CheckBox, { CheckboxGroup } from "./CheckBox";
import Col from "./Col";
import Divider from "./Divider";
import Empty from "./Empty";
import Footer, { FooterItem, FooterList, FooterTitle } from "./Footer";
import GradientText from "./GradientText";
import { H1, H2, H3, Tip, Text } from "./Typography";
import Icon from "./Icon";
import Modal from "./Modal";
import NumberFlow from "./NumberFlow";
import Progress from "./Progress";
import Radio from "./Radio";
import RadioGroup from "./RadioGroup";
import Result from "./Result";
import Row from "./Row";
import Showcase from "./Showcase";
import Statistic from "./Statistic";
import Tab, { Tabs } from "./Tab";
import Tag from "./Tag";
import TextField from "./TextField";

const components = [
  Alert,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CheckBox,
  Col,
  Divider,
  Empty,
  Footer,
  FooterItem,
  FooterList,
  FooterTitle,
  GradientText,
  H1,
  H2,
  H3,
  Icon,
  Modal,
  NumberFlow,
  Progress,
  Radio,
  RadioGroup,
  Result,
  Row,
  Showcase,
  Statistic,
  Tab,
  Tabs,
  Tag,
  Text,
  TextField,
  Tip,
];
const install = (app: App) => {
  components.forEach((c: any) => {
    if (c.install) {
      app.use(c);
    } else if (c.name) {
      app.component(c.name, c);
    }
  });
};

export { install };

export default { install };

export {
  Alert as ASAlert,
  Button as ASButton,
  Breadcrumb as ASBreadcrumb,
  BreadcrumbItem as ASBreadcrumbItem,
  Card as ASCard,
  CheckBox as ASCheckBox,
  CheckboxGroup as ASCheckboxGroup,
  Col as ASCol,
  Divider as ASDivider,
  Empty as ASEmpty,
  Footer as ASFooter,
  FooterItem as ASFooterItem,
  FooterList as ASFooterList,
  FooterTitle as ASFooterTitle,
  GradientText as ASGradientText,
  H1 as ASH1,
  H2 as ASH2,
  H3 as ASH3,
  Icon as ASIcon,
  Modal as ASModal,
  NumberFlow as ASNumberFlow,
  Progress as ASProgress,
  Radio as ASRadio,
  RadioGroup as ASRadioGroup,
  Result as ASResult,
  Row as ASRow,
  Showcase as ASShowcase,
  Statistic as ASStatistic,
  Tab as ASTab,
  Tabs as ASTabs,
  Tag as ASTag,
  Text as ASText,
  TextField as ASTextField,
  Tip as ASTip,
  // Visual as ASVisual,
};
