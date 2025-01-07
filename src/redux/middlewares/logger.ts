const logger = (state) => (next) => (action) => {
  console.group(action.type);
  console.info("previous state", state.getState());
  const result = next(action);
  console.info("next state", state.getState());
  console.groupEnd();
  return result;
};

// function Logger(state) {
//   return function (action) {
//     return function (next) {
//       console.log(state.getState());
//       console.log(action);
//     };
//   };
// }
export default logger;
