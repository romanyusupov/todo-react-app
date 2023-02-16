import React from "react";
import { Paper, Divider, Button, List } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./components/Filter";
import {
  addTaskAction,
  removeTaskAction,
  newCheckedAction,
  checkAllAction,
  clearAllAction,
  fetchTasksAction,
} from "./redux/actions/tasks";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  React.useEffect(() => {
    dispatch(fetchTasksAction());
  }, []);

  const addTask = (isChecked, inputValue) => {
    dispatch(addTaskAction(isChecked, inputValue));
  };

  const removeTask = (id) => {
    if (window.confirm("Удалить эту задачу?")) {
      dispatch(removeTaskAction(id));
    }
  };

  const newChecked = (id) => {
    dispatch(newCheckedAction(id));
  };

  const checkAll = () => {
    dispatch(checkAllAction());
  };

  const clearAll = () => {
    if (window.confirm("Удалить всё?")) {
      dispatch(clearAllAction());
    }
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField sendInput={addTask} />
        <Divider />
        <Filter />
        <Divider />
        <List>
          {state.tasks
            .filter((obj) => {
              if (state.filter.filterBy === "all") {
                return true;
              } else if (state.filter.filterBy === "completed") {
                return obj.completed;
              } else if (state.filter.filterBy === "active") {
                return !obj.completed;
              }
            })
            .map((obj) => (
              <Item
                sendDelId={() => removeTask(obj.id)}
                onClickCheck={() => newChecked(obj.id)}
                key={obj.id}
                isChecked={obj.completed}
                text={obj.text}
              />
            ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button onClick={checkAll}>Отметить всё</Button>
          <Button onClick={clearAll}>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
