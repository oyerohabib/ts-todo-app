// import React, { useReducer } from "react";

// const action = [
//   { type: "ADD", payload: "" },
//   { type: "REMOVE", payload: "" },
//   { type: "COMPLETED", payload: "" },
// ];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       return [
//         ...state,
//         { id: Date.now(), todo: action.payload, isCompleted: false },
//       ];
//     case "REMOVE":
//       return state.filter((todo) => todo.id !== action.payload.id);
//     case "COMPLETE":
//       return state.map((todo) =>
//         todo.id === action.payload.id
//           ? { ...todo, isCompleted: !todo.isCompleted }
//           : todo,
//       );
//     default:
//       return state;
//   }
// };

// const TodoReducer = () => {
//   const [state, dispatch] = useReducer(reducer, []);
//   return <div>TodoReducer</div>;
// };

// export default TodoReducer;
