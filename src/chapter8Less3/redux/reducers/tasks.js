import axios from "axios";

let initialState = [];

const checkOnServer = async (isTrue, obj) => {
  await axios
    .put(`https://63a5914c318b23efa79755f9.mockapi.io/users/${obj.id}`, {
      ...obj,
      completed: isTrue,
    })
    .then()
    .catch(error => console.error('There was an error!', error));
};

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
      axios.delete(
        `https://63a5914c318b23efa79755f9.mockapi.io/users/${action.payload}`
      );
      return state.filter((task) => task.id !== action.payload);

    case "CHANGE_TASKS":
      axios.put(
        `https://63a5914c318b23efa79755f9.mockapi.io/users/${action.payload}`,
        {
          ...state[action.payload - 1],
          completed: !state[action.payload - 1].completed,
        }
      );
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
          checkOnServer(true, obj);
          return {
            ...obj,
            completed: true,
          };
        } else {
          checkOnServer(false, obj);
          return {
            ...obj,
            completed: false,
          };
        }
      });

    case "CLEAR_ALL":
      return [];

    default:
      return state;
  }
}
