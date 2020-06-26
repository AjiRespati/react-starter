
import { connect } from 'react-redux'
import LoginScreen, { useLoginStyles } from './LoginScreen'
import { withStyles } from '@material-ui/core/styles';

import { setServiceRequest, setServiceCode, setServiceStatus, setServiceMethod } from '../../actions/ServiceActions'

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    _setRequest: val => {
      dispatch(setServiceRequest(val))
    },
    _setServiceCode: val => {
      dispatch(setServiceCode(val))
    },
    _setServiceStatus: val => {
      dispatch(setServiceStatus(val))
    },
    
  }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

export default withStyles(useLoginStyles)(Login)