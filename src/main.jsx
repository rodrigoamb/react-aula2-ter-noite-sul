import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/login.jsx";
import CadastroPage from "./pages/cadastro/cadastro.jsx";
import TelaLogin from "./pages/telaLogin/telaLogin.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/cadastro"} element={<CadastroPage />} />
        <Route path={"/telalogin"} element={<TelaLogin />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
