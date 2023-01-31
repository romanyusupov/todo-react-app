import { createStore } from "redux";

const reducer = (state, action) => {
  if (action.type === "ADD_TASK") {
    return [
      ...state,
      {
        text: action.payload.inputValue,
        id: state.length + 1,
        completed: action.payload.isChecked,
      },
    ];
  }

  if (action.type === "REM_TASK") {
    return state.filter((task) => task.id !== action.payload);
  }

  if (action.type === "CHANGE_TASKS") {
    return state.map((obj) => {
      if (obj.id === action.payload) {
        return {
          ...obj,
          completed: !obj.completed,
        };
      }
      return obj;
    });
  }

  if (action.type === "CHECK_ALL") {
    return state.map((obj) => {
      return {
        ...obj,
        completed: !obj.completed,
      };
    });
  }

  if (action.type === "CLEAR_ALL") {
    return [];
  }

  return state;
};

const store = createStore(reducer, [
  {
    text: "Купить клей",
    id: "1",
    completed: false,
  },
  {
    text: "Поздравить маму",
    id: "2",
    completed: true,
  },
  {
    text: "Написать ТЗ",
    id: "3",
    completed: false,
  },
]);
export default store;
