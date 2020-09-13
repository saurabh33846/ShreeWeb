import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom';
import firebase from "firebase/app";
import { connect } from "react-redux";
const ALERT_TIMING = 2000;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = function (props) {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [alertMsg, setAlertMsg] = useState(null);
  const [alertType, setAlertType] = useState("success");
  const [showAlert, setShowAlert] = useState(false);



  const showAlertImpl = function (alertType, msg) {
    if(!showAlert) {
      setAlertMsg(msg);
      setAlertType(alertType);
      setShowAlert(true);
      setTimeout(()=>{
        setShowAlert(false)
      }, ALERT_TIMING);
    }
  }

  const _inputChange = function (setter,event){
    let value = event.target.value;
    setter(value);
}


  const _signUp = function(event) {
    props.setBusy(true);
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result)=>{
      let user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: firstName+lastName,
        phoneNumber: phone,
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(function() {
        let user = firebase.auth().currentUser;
        props.setUser(user);
        user.sendEmailVerification().then(function() {
          showAlertImpl("success", "Sign up successful, check your email and verify email address");
          props.setBusy(false);
          debugger;
        }).catch(function(error) {
          // An error happened.
        });
        // Update successful.
      }).catch(function(error) {
        // An error happened.
      });
      console.log(result);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    // event.preventDefault();
    // fetch('api/auth/sign-up',{
    //   method: 'POST',
    //   headers: {
    //       'Content-Type': 'application/json'
    //       // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //   body: JSON.stringify({firstName, lastName, email,password, phone})
    // }).then((res)=>{
    //     console.log(res)
    // }).catch((err)=>{
    //     console.log(err);
    // })
    console.log(email, password);
  }

  return (
    <Container component="main" maxWidth="xs">\
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate  onSubmit={_signUp}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={_inputChange.bind(null,setFirstName)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={_inputChange.bind(null,setLastName)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={_inputChange.bind(null,setEmail)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="phone Address"
                name="phone"
                autoComplete="phone"
                value={phone}
                onChange={_inputChange.bind(null,setPhone)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={_inputChange.bind(null,setPassword)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={RouterLink} to={`/signIn`} replace={true} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {showAlert ? <Alert severity={alertType} >
        {alertMsg}
      </Alert> :null}
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
const mapStateToProps = state =>{
  {}
}
const mapDispatchToProps = dispatch =>{
  return {
    setUser : (user)=> {
      let userData = {
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL
      }
      dispatch({type:'SET-USER', payload:{user:userData}})},
      setBusy : (busyState)=> {
        dispatch({type:'SET-BUSY', payload:{busy:busyState}})},
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SignUp);