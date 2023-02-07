import axios from "axios";

export const fetchTasksAction = () => async (dispatch) => {
  try {
    const res = await fetch(
      "https://63a5914c318b23efa79755f9.mockapi.io/users"
    );
    const data = await res.json();
    dispatch({
      type: "SET_TASKS",
      payload: data,
    });
  } catch (e) {
    console.error(e);
  } finally {
  }
};

export const addTaskAction = (completed, text) => {
  return {
    type: "ADD_TASK",
    payload: {
      completed,
      text,
    },
  };
};

export const removeTaskAction = (id) => {
  axios.delete(`https://63a5914c318b23efa79755f9.mockapi.io/users/${id}`)
  return {
    type: "REM_TASK",
    payload: id,
  };
};

export const newCheckedAction = (id) => {
  return {
    type: "CHANGE_TASKS",
    payload: id,
  };
};

export const checkAllAction = () => {
  return {
    type: "CHECK_ALL",
  };
};

export const clearAllAction = () => {
  return {
    type: "CLEAR_ALL",
  };
};
