import React, { useContext, useState } from "react";
import AuthContext from "../../contexts/Auth/AuthContext";
import { Paper, Typography, TextField, Button, Grid } from "@mui/material";
import { login } from "../../api";

const LoginPage = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [areCredentialsInvalid, setAreCredentialsInvalid] = useState(false);

  const {
    username: usernameC,
    password: passwordC,
    updateCredentials,
  } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAreCredentialsInvalid(false);
    setIsLoading(true);

    try {
      await login(username, password);

      setLogin();
    } catch (error) {
      if (error.response.status === 401) {
        setAreCredentialsInvalid(true);
      }
      console.error("Invalid credentials", error.response.status);
    } finally {
      setIsLoading(false);
    }
  };

  const setLogin = () => {
    updateCredentials(username, password);
    onLoginSuccess();
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
              type="name"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <TextField
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </form>
          <br />
          {areCredentialsInvalid && (
            <Typography color="error" style={{ textAlign: "center" }}>
              The username and password combination entered is invalid.
            </Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
