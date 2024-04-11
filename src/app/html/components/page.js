import { HTML, nLink } from '@brtmvdl/frontend'

import { HeaderComponent } from './header.js'
import { FooterComponent } from './footer.js'

export class PageComponent extends HTML {
  onCreate() {
    super.onCreate()
    this.append(new HeaderComponent())
    this.append(this.getContent())
    this.append(new FooterComponent())
  }

  getContent() {
    return new HTML()
  }
}
