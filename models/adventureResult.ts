import Model from "./model";

class AdventureResult extends Model {
  private landscape: string;
  private summary: string;
  private adventureWon: boolean;
  private datetime: string;

  constructor(
    id: number,
    landscape: string,
    summary: string,
    adventureWon: boolean,
    datetime: string
  ) {
    super(id);
    this.landscape = landscape;
    this.summary = summary;
    this.adventureWon = adventureWon;
    this.datetime = datetime;
  }

  getLandscape(): string {
    return this.landscape;
  }

  getSummary(): string {
    return this.summary;
  }

  isAdventureWon(): boolean {
    return this.adventureWon;
  }

  getDatetime(): string {
    return this.datetime;
  }
}

export default AdventureResult;
