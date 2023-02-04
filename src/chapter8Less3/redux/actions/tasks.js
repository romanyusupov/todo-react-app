export const fetchTasksAction = () => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:3002/todo/tasks");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: "SET_TASKS",
      payload: data,
    });
  } catch (e) {
    console.error(e);
  } finally {
  }
};

export const addTaskAction = (isChecked, inputValue) => {
  return {
    type: "ADD_TASK",
    payload: {
      isChecked,
      inputValue,
    },
  };
};

export const removeTaskAction = (id) => {
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
