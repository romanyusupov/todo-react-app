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
  }
}

export const checkAllAction = () => {
  return {
    type: "CHECK_ALL",
  }
}

export const clearAllAction = () => {
  return {
    type: "CLEAR_ALL",
  }
}

