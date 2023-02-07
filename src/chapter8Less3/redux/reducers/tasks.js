let initialState = [
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
    case "SET_TASKS":
      return action.payload;

    case "ADD_TASK":
      fetch("https://63a5914c318b23efa79755f9.mockapi.io/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      });
      return [
        ...state,
        {
          text: action.payload.text,
          id: state.length + 1,
          completed: action.payload.completed,
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
        if (state.length !== state.filter((obj) => obj.completed).length) {
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
