
const initialstate = {
  "request": {},
  "status": "inactive",
  "serviceCode": null,
  "method": "POST",
  "test": false
}

const service = (state = initialstate, action) => {
  switch (action.type) {
    case 'SET_SERVICE_CODE':
      return {
        ...state,
        serviceCode: action.val
      }
    case 'SET_SERVICE_STATUS':
      return {
        ...state,
        status: action.val
      }
    case 'SET_SERVICE_METHOD':
      return {
        ...state,
        method: action.val
      }
    case 'SET_SERVICE_REQUEST':
      return {
        ...state,
        request: action.val
      }
    case 'SET_TEST':
      return {
        ...state,
        test: action.val,
      }
    default:
      return state
  }
}

export default service





