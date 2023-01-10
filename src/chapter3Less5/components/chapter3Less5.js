import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

const Chapter3Less5 = () => {
  const [comments, setComments] = React.useState([
    {
      fullName: "Вася Пупкин",
      email: "vasya@mail.ru",
      createdAt: "Thu Oct 14 2021 13:41:01",
      text: ".....",
    },
    {
      fullName: "Вася Пупкин",
      email: "vasya@mail.ru",
      createdAt: "Thu Oct 14 2021 13:41:02",
      text: ".....",
    },
    {
      fullName: "Вася Пупкин",
      email: "vasya@mail.ru",
      createdAt: "Thu Oct 14 2021 13:41:03",
      text: ".....",
    },
    {
      fullName: "Вася Пупкин",
      email: "vasya@mail.ru",
      createdAt: "Thu Oct 14 2021 13:41:05",
      text: ".....",
    },

  ]);

  // const [obj, setObj] = React.useState({
  //   fullName: "",
  //   email: "",
  //   createdAt: "",
  //   text: "",
  // })

  // const [fullName, setFullName] = React.useState('');
  // const [email, setEmail] = React.useState('');
  // const [text, setText] = React.useState('');
  

  // const onFildsChange = (event) => {

  //   if(event.target.id === 'fullName') {
  //     setFullName(event.target.value);
  //   } else if (event.target.id === 'email') {
  //     setEmail(event.target.value);
  //   } else {
  //     setText(event.target.value);
  //   }
  // }

  // const onSubmit = () => {
  //   // setObj({
  //   //   fullName: fullName,
  //   //   email: email,
  //   //   createdAt: "",
  //   //   text: text,
  //   // })
  //   console.log(obj);
  // }

  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments]);

  return (
    <div>
      <List
        sx={{
          width: "100%",
          margin: "30px auto",
          marginTop: 30,
          maxWidth: 450,
          bgcolor: "background.paper",
        }}
      >
        {comments.map((comment) => (
          <ListItem key={comment.createdAt}>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={comment.fullName}
              secondary={comment.text}
            />
          </ListItem>
        ))}
      </List>

      <Card style={{ maxWidth: 450, margin: "10px auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography align="left" gutterBottom variant="h5">
            Что-то умное что вы знаете:
          </Typography>
          <form>
            <Grid container rowSpacing={2} spacing={3}>
              <Grid xs={12} sm={6} item>
                <TextField
                  id='fullName'
                  label="Имя"
                  placeholder="Введите Ваше имя"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField
                  id='email'
                  label="Почта"
                  placeholder="Введите Вашу почту"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  id='text'
                  label="Текст"
                  placeholder="Введите Ваш текст"
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  rows={4}
                />
              </Grid>

              <Grid xs={12} item>
                <Button variant="contained" fullWidth type="submit">
                  Отправить
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chapter3Less5;
