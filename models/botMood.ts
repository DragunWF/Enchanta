class BotMood {
  #name: string;
  #imageSource: string;

  constructor(name: string, imageSource: string) {
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
