import { HTML, nLink } from '@brtmvdl/frontend'

export class LinkComponent extends nLink {
  onCreate() {
    super.onCreate()
    this.setStyle('display', 'inline-block')
    this.setStyle('color', '#000000')
  }
}
