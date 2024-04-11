import { HTML } from '@brtmvdl/frontend'

export class CheckboxComponent extends HTML {
  state = {
    checked: false
  }

  getName() {
    return 'checkbox'
  }

  hasContainer() {
    return false
  }

  onCreate() {
    this.setEvents()
  }

  setEvents() {
    const self = this
    this.on('click', () => {
      self.state.checked = !self.state.checked
      self.setStyle('background-color', self.state.checked ? '#000000' : '#ffffff')
    })
  }

  getValue() {
    return this.state.checked
  }
}
