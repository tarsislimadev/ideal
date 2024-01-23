import { HTML, nSpan } from '@brtmvdl/frontend'

import { CheckboxComponent } from './checkbox.js'

export class CheckboxGroupComponent extends HTML {
  children = {
    checkbox: new CheckboxComponent(),
    label: new nSpan(),
  }

  getName() {
    return 'checkbox-group'
  }

  onCreate() {
    this.append(this.getCheckbox())
    this.append(this.getLabel())
  }

  getCheckbox() {
    this.children.checkbox.setStyle('box-shadow', '0rem 0rem 0rem calc(1rem / 8) #000000')
    this.children.checkbox.setStyle('margin', '0rem calc(1rem / 2) 0rem 0rem')
    this.children.checkbox.setStyle('display', 'inline-block')
    this.children.checkbox.setStyle('height', 'calc(3rem / 4)')
    this.children.checkbox.setStyle('width', 'calc(3rem / 4)')
    return this.children.checkbox
  }

  getLabel() {
    return this.children.label
  }

  setText(text) {
    this.children.label.setText(text)
    return this
  }

  getValue() {
    return this.children.checkbox.getValue()
  }
}
