import { App } from "vue";

import Alert from "./Alert";
import Button from "./Button";
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from "./Breadcrumb/breadcrumb-item";
import Card from "./Card";
import CheckBox from "./CheckBox";
import CheckboxGroup from "./CheckboxGroup";
import Col from "./Col";
import Divider from "./Divider";
import Footer from "./Footer";
import FooterItem from "./FooterItem";
import FooterList from "./FooterList";
import FooterTitle from "./FooterTitle";
import Icon from "./Icon";
import Progress from "./Progress";
import Radio from "./Radio";
import RadioGroup from "./RadioGroup";
import Result from "./Result";
import Row from "./Row";
import Showcase from "./Showcase";
import Tab from "./Tab";
import Tabs from "./Tabs";
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
  Footer,
  FooterItem,
  FooterList,
  FooterTitle,
  Icon,
  Progress,
  Radio,
  RadioGroup,
  Result,
  Row,
  Showcase,
  Tab,
  Tabs,
  TextField,
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
  Footer as ASFooter,
  FooterItem as ASFooterItem,
  FooterList as ASFooterList,
  FooterTitle as ASFooterTitle,
  Icon as ASIcon,
  Progress as ASProgress,
  Radio as ASRadio,
  RadioGroup as ASRadioGroup,
  Result as ASResult,
  Row as ASRow,
  Showcase as ASShowcase,
  Tab as ASTab,
  Tabs as ASTabs,
  TextField as ASTextField,
};
