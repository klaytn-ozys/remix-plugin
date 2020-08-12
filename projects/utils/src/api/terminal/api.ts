import { StatusEvents } from "../../types";

export interface ITerminal {
  events: { } & StatusEvents
  methods: {
    logTx(tx): void
    logHtml(msg: String): void
  }
}
