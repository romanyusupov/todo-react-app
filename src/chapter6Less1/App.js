import React from "react";
import { Button, Stack, TextField, Paper } from "@mui/material/";
import axios from "axios";

const App = () => {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    const res = await axios.get('https://63a5914c318b23efa79755f9.mockapi.io/users');
    setUsers(res.data);
  };

  const [fields, setFields] = React.useState({
    name: "",
    email: "",
  });

  const onFieldsChange = (event) => {
    const userObj = {
      [event.target.name]: event.target.value,
    };
    setFields((prev) => {
      return { ...prev, ...userObj };
    });
  };

  const sendUser = () => {
    axios.post('https://63a5914c318b23efa79755f9.mockapi.io/users', fields);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={1}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          width: "500px",
        }}
      >
        <Stack alignItems="center" direction="column" width="400px">
          <Paper
            elevation={3}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              width: "250px",
            }}
          >
            <h4>Список пупсиков:</h4>
            <ul>
              {users.map((item) => (
                <li key={item.email}>{item.name}</li>
              ))}
            </ul>
          </Paper>
          <br />
          <Button size="large" fullWidth variant="contained" onClick={getUsers}>
            Получить пупсиков с сервера
          </Button>

        </Stack>

        <br />
        <hr />
        <br />

        <Stack spacing={2} alignItems="center" direction="column" width="400px">
          <h4>Создать пупсика</h4>
          <TextField
            value={fields.name}
            onChange={onFieldsChange}
            fullWidth
            label="Имя"
            name="name"
            size="small"
          />
          <TextField
            value={fields.email}
            onChange={onFieldsChange}
            fullWidth
            label="Email"
            name="email"
            size="small"
          />
          <Button onClick={sendUser} fullWidth variant="contained">
            Отправить пупсика на сервер
          </Button>
        </Stack>
      </Paper>
    </div>
  );
};

export default App;
