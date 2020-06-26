
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Navbar from '../../components/navBar/NavigationBar'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid'
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Twitter from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook'
import Link from '@material-ui/core/Link';


class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      usernameErrorMessage: '',
      password: '',
      passwordErrorMessage: '',
      showPassword: false,
      isError: true,
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.isError) {
      let loginRequest = {
        "principal": {
          "email": this.state.username
        },
        "credential": {
          "password": this.state.password
        },
      }
      this.props._setRequest(loginRequest)
      this.props._setServiceCode("login")
      this.props._setServiceStatus("active")
    }
  }

  handleChange = prop => event => {
    if (prop === 'password' && event.target.value.length === 0) {
      this.setState({
        ...this.state,
        [prop]: event.target.value,
        isError: true,
        passwordErrorMessage: "password must be filled"
      })
    }
    else if (prop === 'password' && event.target.value.length < 6) {
      this.setState({
        ...this.state,
        [prop]: event.target.value,
        isError: true,
        passwordErrorMessage: "at least 6 character"
      })
    }
    else if (prop === 'username' && event.target.value.length === 0) {
      this.setState({
        ...this.state,
        [prop]: event.target.value,
        isError: true,
        usernameErrorMessage: "username must be filled"
      })
    } else {
      this.setState({
        ...this.state,
        usernameErrorMessage: "",
        passwordErrorMessage: "",
        isError: false,
        [prop]: event.target.value
      })
    }
  }

  handleClickShowPassword = (event) => {
    this.setState({
      ...this.state,
      showPassword: !this.state.showPassword
    })
  }

  handleMouseDownPassword(event) {
    event.preventDefault()
  }

  render() {
    const { classes } = this.props;
    return (
      <div >
        <Navbar title="Guido" history={this.props.history} />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div style={{ alignSelf: "center", justifySelf: "center" }}  >
            <br />
            <br />
            <Card className={classes.root} variant="elevation">
              <center>
                <CardContent>
                  <Typography variant="h5"><b>Login</b> </Typography>
                  <Typography variant="caption">with</Typography>
                  <div>
                    <IconButton aria-label="google">
                      <i style={{ fontSize: 18 }} className={"fab fa-google"} />
                    </IconButton>
                    <IconButton aria-label="facebook">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton disabled aria-label="facebook">
                      <Twitter />
                    </IconButton>
                  </div>
                  <Typography variant="caption">or</Typography>
                  <div>
                    <FormControl className={clsx(classes.margin, classes.textField)}>
                      <InputLabel error={this.state.usernameErrorMessage ? true : false} htmlFor="standard-adornment-password">Username</InputLabel>
                      <Input
                        error={this.state.usernameErrorMessage ? true : false}
                        id="standard-adornment-username"
                        type='text'
                        onChange={this.handleChange('username')}
                      />
                      {this.state.usernameErrorMessage ? <FormHelperText error id="username-helper-text">{this.state.usernameErrorMessage}</FormHelperText> : null}
                    </FormControl>
                    <FormControl className={clsx(classes.margin, classes.textField)}>
                      <InputLabel error={this.state.passwordErrorMessage ? true : false} htmlFor="standard-adornment-password">Password</InputLabel>
                      <Input
                        error={this.state.passwordErrorMessage ? true : false}
                        id="standard-adornment-password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={this.handleClickShowPassword}
                              onMouseDown={this.handleMouseDownPassword}
                            >
                              {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      {this.state.passwordErrorMessage ? <FormHelperText error id="password-helper-text">{this.state.passwordErrorMessage}</FormHelperText> : null}
                    </FormControl>
                  </div>
                </CardContent>
                <Button onClick={this.handleSubmit} variant="contained" color="primary">Log In</Button>

                <div style={{marginTop:25}}>
                  <Button type size="small" color="primary"> <u>Forgot Password</u></Button>
                  <Button size="small" color="primary"><u>Register</u></Button>
                </div>
              </center>
              <br />
              <br />
            </Card>
          </div>
        </Grid>
      </div>
    )
  }
}


export const useLoginStyles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 320,
  },
  margin: {
    margin: theme.spacing(1),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
});

export default LoginScreen