export const BasicProps = {
  title: { type: String, default: "" },
  value: { type: [String, Number], default: "" },
  disabled: { type: Boolean, default: false },
};

export const TabsProps = {
  select: { type: [String, Number], default: 0 },
};

export const TabTitleProps = {
  title: { type: String, default: "" },
  value: { type: [String, Number], default: "" },
  disabled: { type: Boolean, default: false },
  active: { type: [String, Number], default: 0 },
};
