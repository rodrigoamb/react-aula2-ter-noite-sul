import "./login.css";

export default function LoginPage() {
  return (
    <>
      <form className="container-login">
        <label htmlFor="user">Usuário:</label>
        <input type="text" name="user" id="user" />

        <label htmlFor="password">Senha:</label>
        <input type="password" name="password" id="password" />

        <button type="submit">Fazer Login</button>
      </form>
    </>
  );
}
