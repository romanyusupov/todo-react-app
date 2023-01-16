import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { FullPost } from "./pages/FullArticle";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./pages/Layout";
import { Profile } from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/post/:dp" element={<FullPost />} />
          <Route path="/not-found" element={<NotFound/>} />
          <Route path="*" element={<Navigate to="/not-found"/>}/>
          
        </Route>
      </Routes>

    </>
  );
}

export default App;
