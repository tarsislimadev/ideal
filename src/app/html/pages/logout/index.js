import { PageComponent } from '../../components/index.js'
import * as Local from '../../utils/local.js'
import * as Flow from '../../utils/flow.js'

export class Page extends PageComponent {
  onCreate() {
    super.onCreate()
    Local.setSync(['access_token'], null)
    Flow.goTo('/?access_token=0')
  }
}
