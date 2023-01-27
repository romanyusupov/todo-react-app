import React from "react";
import axios from "axios";
import { Button, Stack, TextField, Paper } from "@mui/material/";

const App = () => {
  const [input, setinput] = React.useState(false);
  const [userData, setUserData] = React.useState(false);
  const [err, setErr] = React.useState(false);
  const [nextRenders, setNextRenders] = React.useState(false);

  const getInput = (event) => {
    setinput(event.target.value);
  };

  const getData = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${input}`);
      setUserData(res.data);
      setErr(false);
    } catch (e) {
      setErr(true);
      userData(false)
    }
  };

  let render;

  console.log('err', err);
  console.log('userData', !!userData);


  if (err) { 
    render = <Err />  ;
  } else if ( userData) { 
    render = <NewUser userData={userData}/>;
  } else {
    render = <FirstView/> 
  }

  return (
    <div id="app">
      <div className="app-container">
        <form className="app-form">
          <input
            type="text"
            className="app-input"
            placeholder="Укажите GitHub-аккаунт" //placeholder="Укажите GitHub-аккаунт"
            onChange={getInput}
          />
          <Button onClick={getData} className="app-form_btn">
            Найти
          </Button>
        </form>
        {render}

      </div>
    </div>
  );
};

const Err = () => {
  return (
    <>
      <h3 className="app-user_name">ОШИБКА! Такого пользователя не существует!</h3>
    </>
  );
};

const FirstView = () => {
  return (
    <>
      <div className="app-user">
        <div className="app-user_info">
          <div className="app-user_image">
            <img src="./assets/img/avatar.png" alt="" />
          </div>
          <div className="app-user_data">
            <h1 className="app-user_name">
              Archakov Dennis
              <span>@archakov06</span>
            </h1>
            <p className="app-user_about">
              !!!!Frontend Developer. UI Designer. JavaScript ❤️ ReactJS ⚛ React
              Native, NodeJS, PHP
            </p>
          </div>
        </div>
        <ul className="app-user_stats">
          <li className="app-user_stats-item">
            Репозитории
            <span>124</span>
          </li>
          <li className="app-user_stats-item">
            Подписчиков
            <span>1.2к</span>
          </li>
          <li className="app-user_stats-item">
            Звёзд
            <span>506</span>
          </li>
        </ul>
        <ul className="app-user_location">
          <li className="app-user_location-item">Russia, Ingushetia, Nazran</li>
          <li className="app-user_location-item">
            <a href="http://archakov.im">http://archakov.im</a>
          </li>
        </ul>
      </div>
    </>
  );
};

const NewUser = ({ userData }) => {
  return (
    <>
      <div className="app-user">
        <div className="app-user_info">
          <div className="app-user_image">
            <img src={userData.avatar_url} alt="" />
          </div>
          <div className="app-user_data">
            <h1 className="app-user_name">
              {userData.name}
              <span>{userData.login}</span>
            </h1>
            <p className="app-user_about">{userData.bio}</p>
          </div>
        </div>
        <ul className="app-user_stats">
          <li className="app-user_stats-item">
            Репозитории
            <span>{userData.public_repos}</span>
          </li>
          <li className="app-user_stats-item">
            Подписчиков
            <span>{userData.followers}</span>
          </li>
          <li className="app-user_stats-item">
            Звёзд
            <span> {userData.following}</span>
          </li>
        </ul>
        <ul className="app-user_location">
          <li className="app-user_location-item">{userData.location}</li>
          <li className="app-user_location-item">
            <a href={userData.blog}>{userData.blog}</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default App;
