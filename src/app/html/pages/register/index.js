import { HTML, nH2, nError, nInputTextGroup, nButton, nLink } from '@brtmvdl/frontend'
import { ButtonComponent, CheckboxGroupComponent, InputTextGroupComponent, LinkComponent, PageComponent } from '../../components/index.js'
import * as Flow from '../../utils/flow.js'
import * as Local from '../../utils/local.js'

export class Page extends PageComponent {
  children = {
    error_message: new nError(),
    user_input: new InputTextGroupComponent(),
    password_input: new InputTextGroupComponent(),
    accepted_checkbox: new CheckboxGroupComponent(),
    register_button: new ButtonComponent(),
    login_link: new LinkComponent()
  }

  getContent() {
    const form = new HTML()
    form.setStyle('margin', '0 auto')
    form.setStyle('width', '10rem')
    form.append(this.getTitle('Login'))
    form.append(this.getErrorMessage())
    form.append(this.getUserInput())
    form.append(this.getPasswordInput())
    form.append(this.getAcceptedCheckbox())
    form.append(this.getRegisterButton())
    form.append(this.getLoginLink())
    return form
  }

  getTitle(title) {
    const h2 = new nH2()
    h2.setStyle('text-align', 'center')
    h2.setText(title)
    return h2
  }

  getErrorMessage() {
    return this.children.error_message
  }

  getUserInput() {
    this.children.user_input.children.label.setText('user')
    return this.children.user_input
  }

  getPasswordInput() {
    this.children.password_input.children.label.setText('password')
    this.children.password_input.children.input.setAttr('type', 'password')
    return this.children.password_input
  }

  getAcceptedCheckbox() {
    this.children.accepted_checkbox.setText('li e aceito a politica de privacidade')
    return this.children.accepted_checkbox
  }

  getRegisterButton() {
    this.children.register_button.setText('register')
    this.children.register_button.on('click', () => Flow.goTo('/pages/login/'))

    return this.children.register_button
  }

  getLoginLink() {
    this.children.login_link.setText('login')
    this.children.login_link.href('/pages/login/')
    this.children.login_link.setStyle('text-align', 'center')
    this.children.login_link.setStyle('width', '100%')
    return this.children.login_link
  }
}
