// Auth/Login.jsx

import React, { useState, useContext } from "react";
import axios from "axios";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import styles from "../Auth/authStyles.module.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUserData } = useContext(UserContext);
  const history = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
        const loginRes = await axios.post("http://localhost:3000/login", {
          email,
          password,
        });

        setUserData({
          token: loginRes.data.token,
          user: loginRes.data.user,
        });
  
        localStorage.setItem("auth-token", loginRes.data.token);
        setLoading(false);

      //Redirecting to home after login    
      history.push("/");
    } catch (err) {
        setLoading(false);
        setError(err.response?.data?.msg || "Something went wrong");
      }
    };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
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
                
              <Button disabled={loading} className="w-100 mt-2 custom-button" type="submit">
                Log In
              </Button>
            </Form>

          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">Need an account?<Link to="/signup">Sign up</Link></div>
        <br />
      </div>
    </Container>
  );
}

export default Login;
