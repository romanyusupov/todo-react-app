import React from "react";
import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";

function App() {
  const [tabNumber, setTabNumber] = React.useState(0);
  const tabCondition = ["all", "active", "completed"];

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

  const [state, dispatch] = React.useReducer(reducer, [
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

  const itemSwitch = (event) => {
    switch (event.target.id) {
      case "completed":
        setTabNumber(tabCondition.indexOf("completed"));
        break;
      case "active":
        setTabNumber(tabCondition.indexOf("active"));
        break;
      default:
        setTabNumber(tabCondition.indexOf("all"));
        break;
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
        <Tabs value={tabNumber}>
          <Tab id="all" onClick={itemSwitch} label="Все" />
          <Tab id="active" onClick={itemSwitch} label="Активные" />
          <Tab id="completed" onClick={itemSwitch} label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {state
            .filter((obj) => {
              if (tabNumber === 0) {
                return true;
              } else if (tabNumber === 1) {
                return obj.completed;
              } else if (tabNumber === 2) {
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
