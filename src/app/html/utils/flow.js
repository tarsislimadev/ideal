import * as Local from './local.js'

export const goTo = (page, data = null) => {
  Local.setSync([page], data)
    ;
  (window.location = page)
}

export const getLocalAccessToken = Local.getSync(['access_token'])

export const getUrlAccessToken = () => {
  const url = new URL(window.location)
  const access_token = new URLSearchParams(url.hash.substring(1))
  return access_token.get('access_token')
}
