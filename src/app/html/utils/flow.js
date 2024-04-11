import * as Local from './local.js'

export const goTo = (page, data = null) => {
  return Local.set(page, data).then(() => (window.location = page))
}
