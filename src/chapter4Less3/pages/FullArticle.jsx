import React from "react";
import { Button } from "react-bootstrap";
import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import { posts } from "./Home";

export const FullPost = () => {
  let params = useParams();
  const navigate = useNavigate();

  const [unavalable, setUnavalable] = React.useState(false);

  const currentPost = posts[params.dp - 1];

  React.useEffect(() => {
    // setTimeout(() => {
    //   navigate("/", { replace: true });
    // }, 1000);
  }, [unavalable]);


  if (!currentPost) {
    return <h1>Статья не найдена!</h1>;
  };

  return (
    <div className="full-post">
      <h1>{currentPost.title}</h1>
      <img src={currentPost.imageUrl} alt="Article" />
      <p>{currentPost.text}</p>
      <Link to="/">
        <Button>Назад</Button>
      </Link>
    </div>
  );
};
