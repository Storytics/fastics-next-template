export const variantSwitch = (pointer = "default", data: any = {}) => {
  const value = data[pointer];
  return value ? value : data["default"];
};
