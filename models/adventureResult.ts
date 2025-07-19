import Model from "./model";

class AdventureResult extends Model {
  private landscapeId: number;
  private summary: string;
  private adventureWon: boolean;
  private datetime: Date;

  constructor(
    id: number,
    landscapeId: number,
    summary: string,
    adventureWon: boolean,
    datetime: Date
  ) {
    super(id);
    this.landscapeId = landscapeId;
    this.summary = summary;
    this.adventureWon = adventureWon;
    this.datetime = datetime;
  }

  getLandscapeId(): number {
    return this.landscapeId;
  }

  getSummary(): string {
    return this.summary;
  }

  isAdventureWon(): boolean {
    return this.adventureWon;
  }

  getDatetime(): Date {
    return this.datetime;
  }
}

export default AdventureResult;
