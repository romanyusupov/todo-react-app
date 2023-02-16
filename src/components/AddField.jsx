import React from "react";
import { TextField, Button, Checkbox } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const AddField = ({ sendInput }) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const addTask = () => {
    sendInput(isChecked, inputValue);
    setIsChecked(false);
    setInputValue("");
  };

  return (
    <div className="field">
      <Checkbox
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        checked={isChecked}
        onChange={(event) => setIsChecked(event.target.checked)}
      />
      <TextField
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Введите текст задачи..."
        variant="standard"
        fullWidth
      />
      <Button onClick={addTask}>
        <AddIcon />
      </Button>
    </div>
  );
};
