import { ImageSourcePropType } from "react-native";

class BotMood {
  #name: string;
  #imageSource: ImageSourcePropType;

  constructor(name: string, imageSource: ImageSourcePropType) {
    this.#name = name;
    this.#imageSource = imageSource;
  }

  getName(): string {
    return this.#name;
  }

  getImageSource(): ImageSourcePropType {
    return this.#imageSource;
  }
}

export default BotMood;
