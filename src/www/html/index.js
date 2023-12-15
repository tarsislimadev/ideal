import { HTML, nLink } from '@brtmvdl/frontend'

export class Page extends HTML {
  onCreate() {
    this.append(this.createLink('home', '/'))
    Array.from(['register', 'login', 'dashboard', 'create-app', 'build-app', 'publish-app']).map((page) => {
      this.append(this.createLink(page, `/pages/${page}/`))
    })
  }

  createLink(text, href) {
    const link = new nLink()
    link.setText(text)
    link.href(href)
    return link
  }
}
