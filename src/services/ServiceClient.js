
import Store from '../Store'
import ServiceUrl from './ServiceUrl'

import { serviceStart, serviceEnd } from '../actions/SystemActions'

export const SendToService = (request, method, serviceCode, onSucceed) => {
  Store.dispatch(serviceStart())
  let sessionId = localStorage.getItem('sessionId')
  let requestJSON = JSON.stringify(request)
  let oReq = new XMLHttpRequest();
  oReq.open(method, ServiceUrl(serviceCode), true)
  oReq.setRequestHeader('Content-type', 'application/json')
  oReq.setRequestHeader('sessionId', sessionId)
  oReq.send(requestJSON)
  oReq.addEventListener('load', () => {
    if (oReq.readyState === 4 && oReq.status === 200) {
      let response = {
        headers: {
          'statusCode': oReq.getResponseHeader('statusCode'),
          'userMessage': oReq.getResponseHeader('userMessage'),
          'topic': oReq.getResponseHeader('topic'),
          'errorCode': oReq.getResponseHeader('errorCode'),
          'sessionId': oReq.getResponseHeader('sessionId')
        },
        body: JSON.parse(oReq.responseText)
      }
      if (response.headers.statusCode === '200' || response.headers.errorCode === '-' || response.headers.errorCode === null) {
        onSucceed(response)
        Store.dispatch(serviceEnd())
      }
      else {
        onSucceed(response)
        Store.dispatch(serviceEnd())
      }
    }
    else {
      let response = {
        'error': true,
        'message': 'Tidak bisa melakukan koneksi dengan server'
      }
      console.log("RESPONSE ERROR: ", response)
      Store.dispatch(serviceEnd())
    }
  })
}
