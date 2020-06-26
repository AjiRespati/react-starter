
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setResponse } from './actions/ResponseActions'
import { SendToService } from './services/ServiceClient'


/**
 * State declared here is the state that will be observe in componentWillReceiveProps.
 * Don't dispatch anything to the state declared here. It will invinite loop
 */

const mapStateToProps = state => {
  return {
    service: state.service,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    _setResponse: val => {
      dispatch(setResponse(val))
    }
  }
}

class Executor extends Component {
  componentWillReceiveProps(nextProps) {
    console.log("NEXT PROPS: ", nextProps)
    let request = nextProps.service.request ? nextProps.service.request : null
    let method = nextProps.service.method ? nextProps.service.method : null
    let serviceCode = nextProps.service.serviceCode ? nextProps.service.serviceCode : null
    let serviceStatus = nextProps.service.status ? nextProps.service.status : null

    if (serviceCode && serviceStatus === "active") {
      SendToService(request, method, serviceCode, response => {
        this.props._setResponse(response)        
      })
    }
  }

  render() { return <div ></div> }
}

export default connect(mapStateToProps, mapDispatchToProps)(Executor)
