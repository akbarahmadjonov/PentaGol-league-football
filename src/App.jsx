import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Admin } from "./pages/admin/Admin";
import { ArticleSinglePage } from "./pages/article/ArticleSinglePage";
import Main from "./pages/main/Main";
import { Register } from "./widgets/Register/Register";
import { Login } from "./widgets/Login/Login";
import style from "./index.css";
function App() {
  const [count, setCount] = useState(0);
  const localData = localStorage.getItem("token");

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/article:id" element={<ArticleSinglePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
