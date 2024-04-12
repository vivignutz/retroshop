// Auth/Signup.jsx

import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: "",
    address: "",
    number: "",
    city: "",
    postalCode: "",
    avatar: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Check if passwords match
      // Prepare form data for sending to the server
      const formDataToSend = new FormData();
      for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    } debugger;
      if ((formDataToSend.get("password") !== formDataToSend.get("confirmPassword"))) {
        setError("Passwords do not match");
        setLoading(false);
        return;
      }

      // Axios post request
      debugger;
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle successful signup here
      setLoading(false);

      // Redirect user to home page after successful signup
      history.push("/");
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.msg || "Something went wrong");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      avatar: event.target.files[0],
    });
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group id="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group id="firstName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group id="dateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group id="street">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group id="streetNumber">
                <Form.Label>Number</Form.Label>
                <Form.Control
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group id="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group id="country">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group id="postalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group id="avatar">
                <Form.Label>Photo/Avatar</Form.Label>
                <Form.Control
                  type="file"
                  name="avatar"
                  onChange={handleFileChange}
                />
              </Form.Group>

              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group id="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="text"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button
                disabled={loading}
                className="w-100 mt-2 custom-button"
                type="submit"
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log in</Link>
          <br />
        </div>
      </div>
    </Container>
  );
};

export default Signup;
