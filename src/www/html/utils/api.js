import * as config from './config.js'

class Response {
  xhr = null

  constructor(xhr) {
    this.xhr = xhr
  }

  getData() {
    return this.data
  }

  get(key) {
    return this.getData()[key]
  }

  getMessage() {
    return this.message || ''
  }

  getStatus() {
    return this.status
  }
}

class SuccessResponse extends Response {
}

class ErrorResponse extends Response {
  type = 'network'
}

const request = (method = 'GET', path = '/', headers = {}, body = {}) => new Promise((s, f) => {
  const xhr = new XMLHttpRequest()
  xhr.open(method, [config.BASE_URL, ...path].join('/'), true)
  Array.from((headers || [])).map(([key, value = '']) => xhr.setRequestHeader(key, value))

  const onComplete = () => xhr.status === 200 ? s(new SuccessResponse(xhr)) : f(new ErrorResponse(xhr))

  xhr.onload = () => onComplete()
  xhr.onerror = () => onComplete()

  xhr.send(JSON.stringify(body))
})

export const login = ({ username, password } = {}) => request('POST', ['accounts', 'login'], null, { username, password })

export const register = ({ username, password, accepted } = {}) => request('POST', ['accounts', 'register'], { accepted }, { username, password })
