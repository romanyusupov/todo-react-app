import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const App = () => {
  const [fields, setFields] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onChangeFields = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickClear = () => {
    setFields({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  const onClickRegistr = () => {
    //console.log(fields.firstName.length);
    const valid =
      (fields.firstName.length > 2 || fields.lastName.length > 2) &&
      fields.email.include("@") &&
      fields.password.length > 5;
    if (!(fields.firstName.length > 1 && fields.lastName.length > 1)) {
      alert("Поля имя и фамилия должны содержать более одного символа!");
    } else if (!fields.email.includes("@")) {
      alert("Поле Email должно содержать символ @ !");
    } else if (!(fields.password.length > 5)) {
      alert("Пароль должен быть более 5 символов!");
    } else {
      console.log(fields);
      handleClickClear();
    }
  };

  const isValid =
    !!fields.firstName &&
    !!fields.lastName &&
    !!fields.email &&
    !!fields.password;
  return (
    <div className="App">
      <Stack
        alignItems="center"
        component="form"
        direction="column"
        spacing={2}
        width="500px"
      >
        <TextField
          value={fields.firstName}
          onChange={onChangeFields}
          label="Имя"
          fullWidth
          name="firstName"
        />
        <TextField
          value={fields.lastName}
          onChange={onChangeFields}
          label="Фамилия"
          fullWidth
          name="lastName"
        />
        <TextField
          value={fields.email}
          onChange={onChangeFields}
          type="email"
          label="Email"
          fullWidth
          name="email"
        />
        <TextField
          value={fields.password}
          onChange={onChangeFields}
          type="password"
          label="Пароль"
          fullWidth
          name="password"
        />

        <Button
          disabled={!isValid}
          onClick={onClickRegistr}
          fullWidth
          variant="contained"
        >
          Зарегистрироваться
        </Button>
        <Button onClick={handleClickClear} fullWidth variant="outlined">
          Очистить
        </Button>
      </Stack>
    </div>
  );
};

export default App;
