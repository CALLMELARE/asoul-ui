import omit from "omit.js";

export const BasicProps = {
  value: { type: Number, default: 0 },
  maxvalue: { type: Number, default: "100" },
  text: { type: String, default: "" },
  type: { type: String, default: "line" },
};

export const LineProps = omit(
  {
    ...BasicProps,
  },
  ["type"]
);
