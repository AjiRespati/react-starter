
let urlGateway = "http://172.16.10.51:31186/gateway/"

const serviceUrl = serviceCode => {
  switch (serviceCode) {
    case "login":
      return urlGateway + "user/security/login"
    case "logout":
      return urlGateway + "user/security/logout"
    default:
      return urlGateway
  }
}

export default serviceUrl