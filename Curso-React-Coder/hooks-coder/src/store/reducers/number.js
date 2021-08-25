export function numberReducer(state, action) {
    switch (action.type) {
      case "number_add2":
        return { ...state, number: state.number + 2 };
      case "multiply7":
        return { ...state, number: state.number * 7 };
      case "divisor25":
        return { ...state, number: parseInt(state.number / 25) };
      case "addYourNumber":
        return { ...state, number: state.number + action.payload };
      default:
        return state;
    }
  }
  export default numberReducer;
  