const initialState = [
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
];

export function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          text: action.payload.inputValue,
          id: state.length + 1,
          completed: action.payload.isChecked,
        },
      ];
    case "REM_TASK":
      return state.filter((task) => task.id !== action.payload);

    case "CHANGE_TASKS":
      return state.map((obj) => {
        if (obj.id === action.payload) {
          return {
            ...obj,
            completed: !obj.completed,
          };
        }
        return obj;
      });

    case "CHECK_ALL":
      return state.map((obj) => {
        if (
          state.length !==
          state.filter((obj) => obj.completed).length
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
      });

    case "CLEAR_ALL":
      return [];

    default:
      return state;
  }
}
