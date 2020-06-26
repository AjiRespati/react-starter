
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Routing from './router/Routing'
import ServiceExecutor from './ServiceExecutor'
import SnackBar from './components/snackBar/SnackBar'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const mapStateToProps = state => {
  console.log("STATE: ", state)
}

const mapDispatchToProps = dispatch => {

}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      setOpen: false
    }
  }

  componentWillMount() {

  }

  handleClose = () => {
    this.setState({open:false, setOpen:false})
  };

  render() {
    return (
      <div >
        <Routing />
        <ServiceExecutor />
        <SnackBar />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

