function uniqueId(prefix: string = "$asoul_ui$"): string {
  const hexDigits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const s = [];
  for (let i = 0; i < 6; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  const randomId = s.join("");
  if (prefix === "$asoul-ui$") {
    return `${randomId}`;
  }

  return `${prefix}_${randomId}`;
}

export default uniqueId;
