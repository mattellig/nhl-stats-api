export class NHLStatsError extends Error {
  readonly messageNumber: number;

  constructor(message: string, messageNumber: number) {
    super(`Error fetching from the NHL Stats API: ${message}`);

    this.messageNumber = messageNumber;
    this.name = "NHLStatsError";
  }
}
