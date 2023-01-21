import React from "react";
import { Button, Stack, TextField, Paper } from "@mui/material/";
import axios from "axios";

const App = () => {
  const [users, setUsers] = React.useState([]);
  const [uploading, setUploading] = React.useState(false);

  const getUsers = async () => {
    const res = await axios.get(
      "https://63a5914c318b23efa79755f9.mockapi.io/users"
    );
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
    axios.post("https://63a5914c318b23efa79755f9.mockapi.io/users", fields);
  };

  const uploadFile = async () => {
    const fileElem = document.querySelector("#file");
    const file = fileElem.files[0];
    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    
    await axios({
      method: "post",
      url: "http://localhost:9999",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    setUploading(false);
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

          <br />
          <br />

          <input id="file" type="file" />

          {uploading && (
            <p>
              <b>Идет загрузка</b>
            </p>
          )}

          <Button
            disabled={uploading}
            onClick={uploadFile}
            fullWidth
            variant="contained"
          >
            upload
          </Button>

          {/* 
          <Button
            endIcon={<CloudDownloadIcon />}
            variant="contained"
            component="label"
            onClick={uploadFile}
          >
            Отправить файл на сервер
            <input hidden accept="image/*" multiple type="file" />
          </Button> */}

          {/* <Button width='200px' endIcon={<CloudDownloadIcon/>} onClick={uploadFile} variant="contained">
            Отправить какашку на сервер
          </Button> */}
        </Stack>
      </Paper>
    </div>
  );
};

export default App;
