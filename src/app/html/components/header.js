import { HTML, nFlex, nLink } from '@brtmvdl/frontend'
import { LinkComponent } from './link.js'
import * as Flow from '../utils/flow.js'

export class HeaderComponent extends HTML {
  onCreate() {
    this.append(this.isGuest() ? this.getGuest() : this.getAuth())
  }

  isGuest() {
    return !Flow.getLocalAccessToken() && !Flow.getUrlAccessToken()
  }

  getGuest() {
    const flex = new nFlex()
    flex.append(this.getLeft())
    flex.append(this.getRightGuest())
    return flex
  }

  createLink(href, text = '') {
    const link = new LinkComponent()
    link.href(href)
    link.setText(text)
    link.setStyle('padding', '1rem')
    return link
  }

  getLeft() {
    return this.createLink('/', 'ideal')
  }

  getRightGuest() {
    const right = new nFlex()
    right.append(this.createLink('/pages/pricing/', 'pricing'))
    right.append(this.createLink('/pages/about-us/', 'about us'))
    right.append(this.createLink('/pages/login/', 'login'))
    return right
  }

  getAuth() {
    const flex = new nFlex()
    flex.append(this.getLeft())
    flex.append(this.getRightAuth())
    return flex
  }

  getRightAuth() {
    const right = new nFlex()
    right.append(this.createLink('/pages/dashboard/', 'dashboard'))
    right.append(this.createLink('/pages/logout/', 'logout'))
    return right
  }

}
