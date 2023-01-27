import React from "react";
import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";

function App() {
  const [obj, setObj] = React.useState({});
  const [inputValue, setInputValue] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);
  const [eventInput, setEventInput] = React.useState();

  const onChecked = (event) => {
    setIsChecked(event.target.checked);
    setObj({
      text: inputValue,
      id: `${arr.length + 1}`,
      completed: event.target.checked,
    });
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
    setObj({
      text: event.target.value,
      id: `${arr.length + 1}`,
      completed: isChecked,
    });
  };


  const reducer = (arr, action) => {
    if (action.type === "ADD_TASK") {
      setInputValue("");
      setIsChecked(false);
      return [...arr, obj];
    }
    return arr;
  };

  const [arr, dispatch] = React.useReducer(reducer, [
    {
      text: "Купить клей",
      id: "1",
      completed: false,
    },
    {
      text: "Поздравить маму",
      id: "2",
      completed: false,
    },
    {
      text: "Написать ТЗ",
      id: "3",
      completed: false,
    },
  ]);

  const addTask = () => {
    dispatch({
      type: "ADD_TASK",
    });
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField
          isChecked={isChecked}
          onChecked={onChecked}
          inputValue={inputValue}
          onInputChange={onInputChange}
          addTask={addTask}
        />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {arr.map((obj) => (
            <Item isChecked={obj.completed} key={obj.id} text={obj.text} />
          ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button>Отметить всё</Button>
          <Button>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
