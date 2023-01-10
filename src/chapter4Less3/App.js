import React from "react";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { FullPost } from "./pages/FullArticle"

function App() {
  const pathname = window.location.pathname;

  const articleNmb = pathname.substring(6, pathname.lastIndexOf("/") + 99);

  return (
    <>
      <Header />
      {pathname === "/" && <Home />}
      {pathname === "/about" && <About />}
      {pathname === "/login" && <h1>Логин</h1>}
      {pathname.includes('/post/') && <FullPost id={articleNmb}/>}
      <Footer />
    </>
  );
}

export default App;