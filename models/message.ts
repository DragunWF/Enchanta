import Model from "./model";

class Message extends Model {
  private content: string;
  private isPlayerMessage: boolean;

  constructor(id: number, content: string, isPlayer: boolean) {
    super(id);
    this.content = content;
    this.isPlayerMessage = isPlayer;
  }

  getContent() {
    return this.content;
  }

  isPlayer() {
    return this.isPlayerMessage;
  }
}

export default Message;
