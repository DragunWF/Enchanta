class Message {
  #id;
  #content;
  #isPlayer;

  constructor(id, content, isPlayer) {
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
