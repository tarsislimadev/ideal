import { HTML } from '@brtmvdl/frontend'

export class FooterComponent extends HTML {
  onCreate() {
    this.append(this.getText())
  }

  getText() {
    const text = new HTML()
    text.setText('@ 2024 - Todos os direitos reservados.')
    text.setStyle('text-align', 'center')
    text.setStyle('padding', '1rem')
    return text
  }
}
