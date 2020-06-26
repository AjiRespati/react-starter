
const initialstate = {
  serviceStart: false,
  snackbarMsg: null,
  snackbarStatus: null,
}

const system = (state = initialstate, action) =>{
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
    case 'SET_SNACKBAR_MESSAGE':
      return {
        ...state,
        snackbarMsg: action.val
      }
    default:
      return state 
  }
}

export default system
