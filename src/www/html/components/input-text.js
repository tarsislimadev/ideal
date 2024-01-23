import { HTML, nInputText } from '@brtmvdl/frontend'

export class InputTextComponent extends nInputText {
  onCreate() {
    super.onCreate()
    this.setStyle('box-shadow', '0rem 0rem 0rem calc(1rem / 8) #000000')
    this.setStyle('padding', 'calc(1rem / 2)')
    this.setStyle('box-sizing', 'border-box')
    this.setStyle('margin', '1rem 0rem')
    this.setStyle('border', 'none')
    this.setStyle('width', '100%')
  }
}
  