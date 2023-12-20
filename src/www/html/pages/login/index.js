import { HTML, nError, nInputTextGroup, nButton, nLink } from '@brtmvdl/frontend'

import * as API from '../../utils/api.js'

import * as Flow from '../../utils/flow.js'

import * as Local from '../../utils/local.js'

export class Page extends HTML {
  children = {
    error_message: new nError(),
    user_input: new nInputTextGroup(),
    password_input: new nInputTextGroup(),
    login_button: new nButton(),
    register_link: new nLink()
  }

  onCreate() {
    this.append(this.getForm())
  }

  getForm() {
    const form = new HTML()
    form.append(this.getErrorMessage())
    form.append(this.getUserInput())
    form.append(this.getPasswordInput())
    form.append(this.getLoginButton())
    form.append(this.getRegisterLink())
    return form
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
    return this.children.password_input
  }

  getLoginButton() {
    this.children.login_button.setText('login')
    this.children.login_button.on('click', () => {
      this.children.error_message.setText('')

      const user = this.children.user_input.children.input.getValue()
      const pass = this.children.password_input.children.input.getValue()

      API.login({ username: user, password: pass })
        .then((res) => Local.set('session', res.getData()))
        .then(() => Flow.goTo('/pages/dashboard/'))
        .catch((err) => console.error(err))
    })

    return this.children.login_button
  }

  getRegisterLink() {
    this.children.register_link.setText('register')
    this.children.register_link.href('/register/')
    return this.children.register_link
  }
}
