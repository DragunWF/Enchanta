import Model from "./model";
import { ImageSourcePropType } from "react-native";

interface ScenarioImageSources {
  calm: ImageSourcePropType[];
  mystery: ImageSourcePropType[];
  danger: ImageSourcePropType[];
  action: ImageSourcePropType[];
  aftermath: ImageSourcePropType[];
}

class AdventureLand extends Model {
  private title: string;
  private description: string;
  private imageSource: ImageSourcePropType;
  private scenarioImageSources: ScenarioImageSources;

  constructor(
    id: number,
    title: string,
    description: string,
    imageSource: ImageSourcePropType,
    scenarioImageSources: ScenarioImageSources
  ) {
    super(id);
    this.title = title;
    this.description = description;
    this.imageSource = imageSource;
    this.scenarioImageSources = scenarioImageSources;
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

  getScenarioImageSources(): ScenarioImageSources {
    return this.scenarioImageSources;
  }

  getRandomScenarioImage(
    scenario: keyof ScenarioImageSources
  ): ImageSourcePropType {
    const images: ImageSourcePropType[] = this.scenarioImageSources[scenario];
    if (!images || images.length === 0) {
      throw new Error(`No images available for scenario: ${scenario}`);
    }
    return images[Math.floor(Math.random() * images.length)];
  }
}

export default AdventureLand;
