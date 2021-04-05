import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import iconLogo from "../assets/logo_coin.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Login = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const [err, setErr] = useState(null);

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErr(null);
    if (!values.email) {
      setErr("Emaill cannot be empty");
    }
    if (!values.password) {
      setErr("Password cannot be empty");
    }
    try {
      // const res = await axios.post("/auth/login", values);
      // const { jwt, user } = res.data;
      history.push("/");
      // setAuthUser(user);
      //   localStorage.setItem("jwt", jwt);
    } catch (err) {
      // setErr(err.message);
    } finally {
      // setLoading(false);
      // window.location.href = "https://coinmarketcap.com/";
    }
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
      className="container"
      style={{ backgroundColor: "#fff" }}
    >
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div style={{ background: `url(${iconLogo})` }}> </div>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          {err ? <Alert severity="error">{err}</Alert> : null}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={values.email}
            onChange={handleChanges}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChanges}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            LogIn
          </Button>
          <Grid container>
            <Grid item>
              <Link
                to="/auth/login"
                variant="body2"
                style={{ textDecoration: "none" }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#" style={{ textDecoration: "none" }}>
        Manh Cuong
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
