const initialSate = 0;

const changeNumber = (state = initialSate, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

export default changeNumber;
