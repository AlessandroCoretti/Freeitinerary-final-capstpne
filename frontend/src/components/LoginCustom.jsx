import { useState } from "react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";

function LoginCustom() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://main-rebecca-alessandrocoretti-99c3ef12.koyeb.app/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password }),
      });

      if (!response.ok) {
        throw new Error("Network resaponse was not ok");
      } else {
        window.location.href = "/home";
        Alert("Welcome back");
      }

      const data = await response.json();
      console.log("Token ricevuto", data.token);
      localStorage.setItem("authToken", data.token);
    } catch (error) {
      console.error("Errore durante la richiesta: ", error);
    }
    setUsername("");
    setPassword("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">📧</InputGroup.Text>
        <Form.Control
          type="email"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">🔏</InputGroup.Text>
        <Form.Control
          type="password"
          placeholder="Type the password"
          aria-label="Password"
          aria-describedby="basic-addon2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputGroup>
      <Button onClick={handleSubmit} className="bg-white border-0 text-dark shadow fw-semibold mt-2">
        Login
      </Button>
    </Form>
  );
}

export default LoginCustom;
