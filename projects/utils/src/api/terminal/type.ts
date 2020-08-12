export interface CustomNetwork {
  id?: string
  name: string
  url: string
}

export type Network =
  | { id: '1', name: 'Main' }
  | { id: '2', name: 'Morden (deprecated)' }
  | { id: '3', name: 'Ropsten' }
  | { id: '4', name: 'Rinkeby' }
  | { id: '42', name: 'Kovan' }

export type TransactionData = {
  tx: Transaction
}

export type Transaction = {
  hash: string,
  from: string,
  to: string,
  data: string,
  input?: string,
  gas: string,
  value?: string,
  logs: [],

}