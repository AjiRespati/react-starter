
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const mapStateToProps = state => {
  return {
    response: state.response
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

class MySnackBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      setOpen: false,
      message: "",
    }
  }

  componentWillReceiveProps(nextProps) {
    let statusCode = nextProps.response.response.headers.statusCode
    let message = nextProps.response.response.headers.userMessage
    if (statusCode !== 200) {
      this.setState({ ...this.state, open: true, message })
    }
  }

  handleClose = () => {
    this.setState({ setOpen: false, open: false })
  }

  render() {
    return (
      <div >
        <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
          <Alert onClose={this.handleClose} severity="error">
            <center>
              {this.state.message}
            </center>
          </Alert>
        </Snackbar>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MySnackBar)


// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// export  function CustomizedSnackbars() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <div className={classes.root}>
//       <Button variant="outlined" onClick={handleClick}>
//         Open success snackbar
//       </Button>
//       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity="success">
//           This is a success message!
//         </Alert>
//       </Snackbar>
//       <Alert severity="error">This is an error message!</Alert>
//       <Alert severity="warning">This is a warning message!</Alert>
//       <Alert severity="info">This is an information message!</Alert>
//       <Alert severity="success">This is a success message!</Alert>
//     </div>
//   );
// }
