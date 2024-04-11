import { HTML, nHr, nH2, nError } from '@brtmvdl/frontend'
import { ButtonComponent, InputTextGroupComponent, PageComponent } from '../../components/index.js'
import * as Flow from '../../utils/flow.js'

export class Page extends PageComponent {
  children = {
    error_message: new nError(),
    email_input: new InputTextGroupComponent(),
  }

  getContent() {
    const form = new HTML()
    form.setStyle('margin', '0 auto')
    form.setStyle('width', '10rem')
    form.append(this.createH2('Login'))
    form.append(this.getErrorMessage())
    form.append(this.getGoogleButton())
    form.append(this.getGitlabButton())
    form.append(this.getBitBucketButton())
    form.append(this.getHr())
    form.append(this.getEmailInput())
    form.append(this.getLoginButton())
    return form
  }

  createH2(title) {
    const h2 = new nH2()
    h2.setStyle('text-align', 'center')
    h2.setText(title)
    return h2
  }

  getErrorMessage() {
    return this.children.error_message
  }

  getGoogleButton() {
    return this.createFlowButton('google', () => Flow.goTo('?google=1'))
  }

  getGitlabButton() {
    return this.createFlowButton('gitlab', () => Flow.goTo('?gitlab=1'))
  }

  getBitBucketButton() {
    return this.createFlowButton('bitbucket', () => Flow.goTo('?bitbucket=1'))
  }

  getHr() {
    return new nHr()
  }

  getEmailInput() {
    this.children.email_input.children.input.setPlaceholder('email')
    return this.children.email_input
  }

  createFlowButton(text, onClick = (() => { })) {
    const button = new ButtonComponent()
    button.setText(text)
    button.on('click', () => onClick())
    return button
  }

  getLoginButton() {
    return this.createFlowButton('login', () => Flow.goTo('/pages/dashboard/'))
  }
}
