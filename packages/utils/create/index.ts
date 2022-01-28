import { createComponent } from "./component";
import uniqueId from "./uniqueId";
const createNameSpace = (name: string) => {
  const declareName = `asoul-${name}`;
  return [createComponent(declareName)];
};

export { createNameSpace, uniqueId };
