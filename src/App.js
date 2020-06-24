
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Routing from './router/Routing'


const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

class App extends Component {
  render() {
    return (
      <div >
        <Routing />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

