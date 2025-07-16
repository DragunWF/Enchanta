import { ImageSourcePropType } from "react-native";
import Model from "./model";

class BotMood extends Model {
  private name: string;
  private imageSource: ImageSourcePropType;

  constructor(id: number, name: string, imageSource: ImageSourcePropType) {
    super(id);
    this.name = name;
    this.imageSource = imageSource;
  }

  getName(): string {
    return this.name;
  }

  getImageSource(): ImageSourcePropType {
    return this.imageSource;
  }
}

export default BotMood;
