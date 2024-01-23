import { HTML, nLabel, nInputTextGroup, nError } from '@brtmvdl/frontend'

import { InputTextComponent } from './index.js'

export class InputTextGroupComponent extends nInputTextGroup {
  children = {
    label: new nLabel(),
    input: new InputTextComponent(),
    error: new nError(),
  }
}
