import { useState } from "react";
import "./login.css";

export default function LoginPage() {
  const [titulo, setTitulo] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  //Logica do component

  // function trocaEstado() {
  //   setTitulo("TROCOU O TITULO");
  // }

  function trocaEstado() {
    setTitulo(!titulo);
  }

  function handleOpenModal() {
    setModalIsVisible(true);
  }

  function handleCloseModal() {
    setModalIsVisible(false);
  }

  // diferença entre Variável comum Vs Estado (State) + onClick

  return (
    <>
      <div className="container-login">
        <h1>{titulo ? "TROCOU O TITULO" : "Faça aqui o seu login"}</h1>
        <button onClick={trocaEstado} className="bg-green-500">
          Troca titulo
        </button>

        <button onClick={handleOpenModal} className="bg-purple-400">
          Abrir modal
        </button>

        <label htmlFor="user">Usuário:</label>
        <input type="text" name="user" id="user" />

        <label htmlFor="password">Senha:</label>
        <input type="password" name="password" id="password" />

        <button type="submit">Fazer Login</button>
      </div>

      {modalIsVisible && (
        <div className="bg-blue-200 w-20 h-20 mt-10">
          <h2>MEU MODAL</h2>
          <button onClick={handleCloseModal} className="bg-blue-500">
            Fechar
          </button>
        </div>
      )}
    </>
  );
}
