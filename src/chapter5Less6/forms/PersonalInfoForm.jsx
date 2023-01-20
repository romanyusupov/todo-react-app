import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    firstName: yup.string().min(2, "Слишком короткое имя!"),
    lastName: yup.string().min(2, "Слишком короткая фамилия!"),
    email: yup
      .string()
      .email("Это не почта!")
      .required("Это поле должно быть заполнено!"),
    password: yup
      .string()
      .min(6, "Пароль должен быть не менее 6 символов!")
      .max(32, "Пароль должен быть не более 32 символов!"),
  })
  .required();

const PersonalInfoForm = ({ setFormData, nextStep }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setFormData(data);
    nextStep("address");
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <Stack
        alignItems="center"
        component="form"
        direction="column"
        spacing={2}
        width="500px"
      >
        <TextField
          {...register("firstName")}
          helperText={
            formState.errors.firstName && formState.errors.firstName.message
          }
          error={!!formState.errors.firstName}
          label="Имя"
          fullWidth
          name="firstName"
        />
        <TextField
          {...register("lastName")}
          helperText={
            formState.errors.lastName && formState.errors.lastName.message
          }
          error={!!formState.errors.lastName}
          label="Фамилия"
          fullWidth
          name="lastName"
        />
        <TextField
          {...register("email")}
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

        <Button
          onClick={handleSubmit(onSubmit)}
          endIcon={<ArrowForwardIosSharpIcon />}
          fullWidth
          variant="contained"
          to="/step2"
        >
          Далее
        </Button>
        <Button
          type="button"
          onClick={() => {
            reset();
          }}
          fullWidth
          variant="outlined"
        >
          Очистить
        </Button>
      </Stack>
    </div>
  );
};

export default PersonalInfoForm;
