import React from "react";
import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";

function App() {
  const [tabNumber, setTabNumber] = React.useState(0);
  const tabCondition = ["all", "active", "completed"];

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

  const [state, dispatch] = React.useReducer(reducer, {
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
