
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Navbar from '../../components/navBar/NavigationBar'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'

import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStylesInput = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

const InputAdornments = () => {
  const classes = useStylesInput();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel error={true} htmlFor="standard-adornment-password">Username</InputLabel>
          <Input
            error={true}
            id="standard-adornment-username"
            type='text'
            onChange={handleChange('username')}
          />
          <FormHelperText error id="username-helper-text">Incorrect entry.</FormHelperText>
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel error={true} htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            error={true}
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText error={true} id="password-helper-text">Incorrect entry.</FormHelperText>
        </FormControl>
      </div>
    </div>
  );
}


const useStyles = makeStyles({
  root: {
    width: 275,
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
});

const OutlinedCard = () => {
  const classes = useStyles();
  return (
    <div style={{ alignSelf: "center", justifySelf: "center" }}  >
      <br />
      <br />
      <Card className={classes.root} variant="elevation">
        <center>
          <CardContent>
            <Typography variant="h5"><b>Login</b> </Typography>
            <InputAdornments />
          </CardContent>
          <Button variant="contained" color="primary">Get Started</Button>
        </center>
        <br />
        <br />
      </Card>
    </div>
  );
}


class LoginScreen extends Component {
  render() {
    return (
      <div >
        <Navbar title="Login" history={this.props.history} />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <OutlinedCard />
        </Grid>
      </div>
    )
  }
}

export default LoginScreen