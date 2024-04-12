import { HTML } from '@brtmvdl/frontend'

export class FormComponent extends HTML {
  getName() {
    return 'form'
  }

  getTagName() {
    return 'form'
  }

  hasContainer() {
    return false
  }

  submit() {
    this.element.submit()
  }
}
