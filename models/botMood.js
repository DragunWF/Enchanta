class BotMood {
  #name;
  #imageSource;

  constructor(name, imageSource) {
    this.#name = name;
    this.#imageSource = imageSource;
  }

  getName() {
    return this.#name;
  }

  getImageSource() {
    return this.#imageSource;
  }
}

export default BotMood;
