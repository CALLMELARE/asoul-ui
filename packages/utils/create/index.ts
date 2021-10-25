import { createComponent } from "./component";

const createNameSpace = (name: string) => {
  const declareName = `asoul-${name}`;
  return [createComponent(declareName)];
};

export { createNameSpace };
