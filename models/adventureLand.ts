import Model from "./model";
import { ImageSourcePropType } from "react-native";

class AdventureLand extends Model {
  private title: string;
  private description: string;
  private imageSource: ImageSourcePropType;

  constructor(
    id: number,
    title: string,
    description: string,
    imageSource: ImageSourcePropType
  ) {
    super(id);
    this.title = title;
    this.description = description;
    this.imageSource = imageSource;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getImageSource(): ImageSourcePropType {
    return this.imageSource;
  }
}

export default AdventureLand;
