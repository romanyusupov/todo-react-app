import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isAuth, setIsAuth] = React.useState(false);
  const navigate = useNavigate();
  let { pathname } = useLocation();

  React.useEffect(() => {
    if(window.localStorage.getItem('token')) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [pathname])

  const handleClickAuth = () => {
    if (isAuth) {
      window.localStorage.removeItem('token');
      navigate('/');
      setIsAuth(false);
    } else {
      navigate('/login');
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <h2>React Blog</h2>
      </Link>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link active={pathname === "/"} to="/" as={Link}>
            Главная
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={pathname === "/about"} to="/about" as={Link}>
            Обо мне
          </Nav.Link>
        </Nav.Item>

        <Button
          variant={isAuth ? "danger" : "light"}
          onClick={handleClickAuth}
        >
          {isAuth ? "Выйти" : "Войти"}
        </Button>
      </Nav>
    </div>
  );
};
