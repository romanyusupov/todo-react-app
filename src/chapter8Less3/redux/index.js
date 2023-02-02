// import { createStore } from "redux";

// const reducer = (state, action) => {
//   if (action.type === "ADD_TASK") {
//     return {
//       ...state,
//       tasks: [
//         ...state.tasks,
//         {
//           text: action.payload.inputValue,
//           id: state.length + 1,
//           completed: action.payload.isChecked,
//         },
//       ]
//     };
//   }

//   if (action.type === "REM_TASK") {
//     return {
//       ...state,
//       tasks: state.filter((task) => task.id !== action.payload)
//     };
//   }

//   if (action.type === "CHANGE_TASKS") {
//     return {
//       ...state,
//       tasks: state.map((obj) => {
//         if (obj.id === action.payload) {
//           return {
//             ...obj,
//             completed: !obj.completed,
//           };
//         }
//         return obj;
//       }),
//     }
//   }

//   if (action.type === "CHECK_ALL") {
//     return {
//       ...state,
//       tasks: state.map((obj) => {
//         if (state.filter((obj) => obj.completed).length === state.length) {
//           return {
//             ...obj,
//             completed: false,
//           };
//         } else {
//           return {
//             ...obj,
//             completed: true,
//           };
//         }
//       }),
//     }
//   }

//   if (action.type === "CLEAR_ALL") {
//     return {
//       ...state, 
//       tasks: [],
//     };
//   }

//   if (action.type === "SET_FILTER") {
//     return [
//       ...state,
//       filterBy: action.payload,
//     ];
//   }

//   return state;
// };

// const state = createStore(reducer, {
//   filterBy: 'all',
//   tasks: [{
//     text: "Купить клей",
//     id: "1",
//     completed: false,
//   },
//   {
//     text: "Поздравить маму",
//     id: "2",
//     completed: true,
//   },
//   {
//     text: "Написать ТЗ",
//     id: "3",
//     completed: false,
//   },]
//   }
//   );

// export default state;
