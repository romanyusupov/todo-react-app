import React from "react";
import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const addTask = (isChecked, inputValue) => {
    //console.log(isChecked, inputValue);
    dispatch({
      type: "ADD_TASK",
      payload: {
        isChecked,
        inputValue,
      },
    });
  };

  const removeTask = (id) => {
    if (window.confirm("Удалить эту задачу?")) {
      dispatch({
        type: "REM_TASK",
        payload: id,
      });
    }
  };

  const newChecked = (id) => {
    dispatch({
      type: "CHANGE_TASKS",
      payload: id,
    });
  };

  const checkAll = () => {
    dispatch({
      type: "CHECK_ALL",
    });
  };

  const clearAll = () => {
    if (window.confirm("Удалить всё?")) {
      dispatch({
        type: "CLEAR_ALL",
      });
    }
  };

  const tabIndex = ["all", "active", "completed"];

  const onTabClick = (index) => {
    const filterIndex = tabIndex[index];
    dispatch({
      type: "TAB_CLICK",
      payload: filterIndex,
    });
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField sendInput={addTask} />
        <Divider />
        <Tabs
          onChange={(_, index) => onTabClick(index)}
          value={tabIndex.indexOf(state.filterBy)}
        >
          <Tab id="all" label="Все" />
          <Tab id="active" label="Активные" />
          <Tab id="completed" label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {state.tasks
            .filter((obj) => {
              if (state.filterBy === "all") {
                return true;
              } else if (state.filterBy === "completed") {
                return obj.completed;
              } else if (state.filterBy === "active") {
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
