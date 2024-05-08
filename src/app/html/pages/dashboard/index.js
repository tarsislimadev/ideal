import { PageComponent } from '../../components/index.js'

import * as API from '../../utils/api.js'

export class Page extends PageComponent {
  onCreate() {
    API.dashboard().then((res) => console.log('getData', res.getData()))
  }
}
