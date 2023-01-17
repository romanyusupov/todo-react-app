import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, watch, formState } = useForm();
  const onSubmit = (data) => console.log('ФОРМА', data);

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
          {...register("firstName", {
            required: "Это обязательное поле!",
          })}
          helperText={
            formState.errors.firstName && formState.errors.firstName.message
          }
          error={!!formState.errors.firstName}
          label="Имя"
          fullWidth
          name="firstName"
        />
        <TextField
          {...register("lastName", {
            required: "Это обязательное поле!",
          })}
          helperText={
            formState.errors.lastName && formState.errors.lastName.message
          }
          error={!!formState.errors.lastName}
          label="Фамилия"
          fullWidth
          name="lastName"
        />
        <TextField
          {...register("email", {
            required: "Это обязательное поле!",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Неверно указан Email!",
            },
          })}
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
          //type="email"
          label="Email"
          fullWidth
          name="email"
        />
        <TextField
          {...register("password", {
            required: "Это обязательное поле!",
          })}
          helperText={
            formState.errors.password && formState.errors.password.message
          }
          error={!!formState.errors.password}
          type="password"
          label="Пароль"
          fullWidth
          name="password"
        />

        <Button onClick={handleSubmit(onSubmit)} fullWidth variant="contained">
          Зарегистрироваться
        </Button>
        <Button fullWidth variant="outlined">
          Очистить
        </Button>
      </Stack>
    </div>
  );
};

export default App;
