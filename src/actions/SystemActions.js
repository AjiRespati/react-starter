
export const serviceStart = () => {
  return {
    type: 'SERVICE_START'
  }
}

export const serviceEnd = () => {
  return {
    type: 'SERVICE_END'
  }
}

export const setSnackbarMessage = val => {
  return {
    type: 'SET_SNACKBAR_MESSAGE',
    val
  }
}