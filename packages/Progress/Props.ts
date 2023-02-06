import omit from "omit.js";

export const BasicProps = {
  value: { type: Number, default: 0 },
  maxvalue: { type: Number, default: "100" },
  text: { type: String, default: "" },
  type: { type: String, default: "line" },
  showInfo: { type: Boolean, default: false },
  status: { type: String, default: "" },
  active: { type: Boolean, default: false },
};

export const LineProps = omit(
  {
    ...BasicProps,
  },
  ["type"]
);
