import Model from "./model";

class MemoryJournalEntry extends Model {
  private content: string;

  constructor(id: number, content: string) {
    super(id);
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }
}

export default MemoryJournalEntry;
