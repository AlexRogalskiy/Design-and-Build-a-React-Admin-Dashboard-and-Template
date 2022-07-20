import { useState } from "react";
import useAuth from "hooks/useAuth";
import Page from "components/Page";

const LoginView = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState("demo@kiki.cat");
  const [password, setPassword] = useState("pasword123");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Page title="Kiki: Login">
      <h2>Login page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email Address:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <p>
          Use <b>demo@kiki.cat</b> and password <b>pasword123</b>
        </p>

        <input type="submit" value="Submit" />
      </form>
    </Page>
  );
};

export default LoginView;
