class Message {
  #id: number;
  #content: string;
  #isPlayer: boolean;

  constructor(id: number, content: string, isPlayer: boolean) {
    this.#id = id;
    this.#content = content;
    this.#isPlayer = isPlayer;
  }

  getId() {
    return this.#id;
  }

  getContent() {
    return this.#content;
  }

  isPlayer() {
    return this.#isPlayer;
  }
}

export default Message;
