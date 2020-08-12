import { ITerminal } from './api'
import { LibraryProfile } from '../../types'

export const terminalProfile: LibraryProfile<ITerminal> = {
  name: 'terminal',
  methods: ['logHtml', 'logTx'],
  events: []
}
