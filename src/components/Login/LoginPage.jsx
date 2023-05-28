import React, { useState } from "react";
import { Paper, Typography, TextField, Button, Grid } from "@mui/material";

const LoginPage = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedPassword = process.env.REACT_APP_PASSWORD;

    if (password === storedPassword) {
      console.log("Login successful");
      onLoginSuccess();
    } else {
      setError("Invalid password");
    }
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Typography variant="h5" gutterBottom>
            Citygrid Dashboard
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              type="password"
              label="Password"
              value={password}
              onChange={handlePasswordChange}
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
          {error && <Typography color="error">{error}</Typography>}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
