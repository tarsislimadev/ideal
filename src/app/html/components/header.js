import { HTML, nFlex, nLink } from '@brtmvdl/frontend'

import { LinkComponent } from './link.js'

export class HeaderComponent extends HTML {
  onCreate() {
    this.append(this.getFlex())
  }

  getFlex() {
    const flex = new nFlex()
    flex.append(this.getLeft())
    flex.append(this.getRight())
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

  getRight() {
    const right = new nFlex()
    right.append(this.createLink('/pages/pricing/', 'pricing'))
    right.append(this.createLink('/pages/about-us/', 'about us'))
    right.append(this.createLink('/pages/login/', 'login'))
    return right
  }
}
