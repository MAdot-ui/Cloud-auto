import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router";

export const LoginPod: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate(routes.list);
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <form onSubmit={handleNavigation}>
      <h2>Hello from login page</h2>

      <div className="login-form-container">
        <div>
          <label className="login-label">Username:</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="login-input"
          />
        </div>
        <div>
          <label className="login-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="login-input"
          />
        </div>
      </div>

      <button type="submit" className="login-button">
        Login
      </button>
    </form>
  );
};
