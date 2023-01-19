import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const resultPage = ({ formData }) => {
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
          defaultValue={formData.firstName}
          fullWidth
          name="firstName"
          label="Имя"
        />

        <TextField
          defaultValue={formData.lastName}
          fullWidth
          name="lastName"
          label="Фамилия"
        />

        <TextField
          defaultValue={formData.email}
          fullWidth
          name="email"
          label="Email"
        />

        <TextField
          defaultValue={formData.password}
          fullWidth
          name="password"
          label="Пароль"
        />

        <TextField
          defaultValue={formData.city}
          fullWidth
          name="city"
          label="Город"
        />

        <TextField
          defaultValue={formData.street}
          fullWidth
          name="street"
          label="Улица, номер дома"
        />

        <TextField
          defaultValue={formData.flatNumber}
          fullWidth
          name="flatNumber"
          label="Номер квартиры"
        />
      </Stack>
    </div>
  );
};

export default resultPage;
