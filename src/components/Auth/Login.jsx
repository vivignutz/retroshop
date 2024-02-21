// Auth/Login.jsx

import React, { useState, useContext } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { setUserData } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const loginRes = await axios.post("http://localhost:3001/login", {
          email,
          password,
        });

        setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      setLoading(false);

      //Redirecting to login page    
    } catch (err) {
        setLoading(false);
        setError(err.response.data.msg);
      }
    };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required onChange={e => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" required onChange={e=> setPassword(e.target.value)}/>
                </Form.Group>
                
                <Button disabled={loading} className="w-100 mt-2" type="submit">
                  Log In
                </Button>
              </Form>

            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">Need an account?<Link to="/signup">Sign up</Link></div>
        </>
      </div>
    </Container>
  );
}

export default Login;