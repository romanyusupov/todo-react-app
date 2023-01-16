import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [fields, setFields] = React.useState({
    email: "test@test.ru",
    pasword: "123456",
  });

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    const resp = await fetch(
      `https://mentor.archakov.im/api/mock/login?email=${fields.email}&password=${fields.password}`
    );

    if (resp.ok) {
      const { token } = await resp.json();
      window.localStorage.setItem('token', token);
      navigate("/profile");
    } else {
      alert("Ошибка! Неверный логин или пароль!");
    }
  };

  const handleChangeInput = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Form onSubmit={onSubmit} className="login-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          onChange={handleChangeInput}
          value={fields.email}
          type="email"
          placeholder="Введите email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          name="password"
          onChange={handleChangeInput}
          value={fields.password}
          type="password"
          placeholder="Пароль"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Войти
      </Button>
    </Form>
  );
};

export default Login;
