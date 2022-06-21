import { useState } from "react";
import useAuth from "hooks/useAuth";

const RegisterView = () => {
  const { register } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await register(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h2>Register page</h2>
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
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default RegisterView;
