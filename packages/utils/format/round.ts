export function round(number: number, precision?: number) {
  const fun = Math["round"];

  precision =
    precision == null
      ? 0
      : precision >= 0
      ? Math.min(precision, 292)
      : Math.max(precision, -292);
  if (precision) {
    let pair = `${number}e`.split("e");
    const value: number = fun(Number(`${pair[0]}e${+pair[1] + precision}`));
    pair = `${value}e`.split("e");
    return +`${pair[0]}e${+pair[1] - precision}`;
  }
  return fun(number);
}
