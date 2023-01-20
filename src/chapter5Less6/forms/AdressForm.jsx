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
    city: yup.string().required("Укажите город"),
    street: yup.string().required("Укажите улицу и номер дома"),
    flatNumber: yup.string().required("Укажите номер квартиры"),
  })
  .required();

const AdressForm = ({setFormData, nextStep}) => {
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
    setFormData((prev) => {
      return {...prev, ...data}
    });
    nextStep('result')
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
          {...register("city")}
          helperText={formState.errors.city && formState.errors.city.message}
          error={!!formState.errors.city}
          label="Город"
          fullWidth
          name="city"
        />

        <TextField
          {...register("street")}
          helperText={formState.errors.street && formState.errors.street.message}
          error={!!formState.errors.street}
          label="Улица, номер дома"
          fullWidth
          name="street"
        />

        <TextField
          {...register("flatNumber")}
          helperText={formState.errors.flatNumber && formState.errors.flatNumber.message}
          error={!!formState.errors.flatNumber}
          label="Номер квартиры"
          fullWidth
          name="flatNumber"
        />

        <Button
          onClick={handleSubmit(onSubmit)}
          endIcon={<ArrowForwardIosSharpIcon />}
          fullWidth
          variant="contained"
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

export default AdressForm;
