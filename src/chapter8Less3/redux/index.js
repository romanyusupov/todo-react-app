import { createStore } from "redux";

const reducer = (state, action) => {
  if (action.type === "ADD_TASK") {
    return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          text: action.payload.inputValue,
          id: state.tasks.length + 1,
          completed: action.payload.isChecked,
        },
      ],
    };
  }

  if (action.type === "REM_TASK") {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload),
    };
  }

  if (action.type === "CHANGE_TASKS") {
    return {
      ...state,
      tasks: state.tasks.map((obj) => {
        if (obj.id === action.payload) {
          return {
            ...obj,
            completed: !obj.completed,
          };
        }
        return obj;
      }),
    };
  }

  if (action.type === "CHECK_ALL") {
    console.log(
      state.tasks.length,
      state.tasks.filter((obj) => obj.completed).length
    );
    return {
      ...state,
      tasks: state.tasks.map((obj) => {
        if (
          state.tasks.length !==
          state.tasks.filter((obj) => obj.completed).length
        ) {
          return {
            ...obj,
            completed: true,
          };
        } else {
          return {
            ...obj,
            completed: !obj.completed,
          };
        }
      }),
    };
  }

  if (action.type === "CLEAR_ALL") {
    return {
      ...state,
      tasks: [],
    };
  }

  if (action.type === "TAB_CLICK") {
    return {
      ...state,
      filterBy: action.payload,
    };
  }

  return state;
};

const store = createStore(reducer, {
  filterBy: "all",
  tasks: [
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
  ],
});

export default store;
