
const intialstate = {
  serviceStart: false,
  snackbarMsg: null,
  snackbarStatus: null,
}

const system = (state = intialstate, action) =>{
  switch (action.type) {
    case 'SERVICE_START':
      return {
        ...state,
        serviceStart: true
      }
    case 'SERVICE_END':
      return {
        ...state,
        serviceStart: false
      }
    default:
      return state 
  }
}

export default system
