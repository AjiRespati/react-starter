
const initialstate = {
  response:{},
}

const response = (state = initialstate, action) => {
  switch (action.type) {
    case 'SET_RESPONSE':
      return {
        ...state,
        response: action.val
      }
    default:
      return state
  }
}

export default response
