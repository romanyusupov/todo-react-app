import { TextField, Button, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const AddField = ({addTask, onInputChange, inputValue, onChecked, isChecked}) => {
  return (
    <div className="field">
      <Checkbox
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        onClick={onChecked}
        checked={isChecked}
      />
      <TextField value={inputValue} onChange={onInputChange} placeholder="Введите текст задачи..." variant="standard" fullWidth />
      <Button onClick={addTask}>
        <AddIcon />
      </Button>
    </div>
  );
};

