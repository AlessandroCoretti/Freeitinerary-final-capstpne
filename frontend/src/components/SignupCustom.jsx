import { useState } from "react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";

function SignupCustom() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://main-rebecca-alessandrocoretti-99c3ef12.koyeb.app/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password }),
      });

      if (!response.ok) {
        throw new Error("Network resaponse was not ok");
      } else {
        window.location.href = "/";
        Alert("Wlecome to your new house");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Errore durante la richiesta: ", error);
      setError("Email or Password not valid");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">📧</InputGroup.Text>
        <Form.Control
          type="email"
          placeholder="insert a valid Email"
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
          placeholder="At least 8 words(one (!,%,@,&) and one number)"
          aria-label="Password"
          aria-describedby="basic-addon2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputGroup>
      <Button onClick={handleSubmit} className="bg-white border-0 text-dark shadow fw-semibold mt-2">
        SignUp
      </Button>
    </Form>
  );
}

export default SignupCustom;
