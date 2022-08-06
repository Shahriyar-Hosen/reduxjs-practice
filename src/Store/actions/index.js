export const incNumber = (num) => {
  return { type: "INCREMENT", payload: num };
};

export const dicNumber = () => {
  return { type: "DECREMENT" };
};
