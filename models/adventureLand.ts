import Model from "./model";
import { ImageSourcePropType } from "react-native";

export interface ScenarioImageSources {
  calm: ImageSourcePropType[];
  mystery: ImageSourcePropType[];
  danger: ImageSourcePropType[];
  action: ImageSourcePropType[];
  aftermath: ImageSourcePropType[];
}

class AdventureLand extends Model {
  private title: string;
  private description: string; // This displays in front of the user
  private promptDescription: string; // This is used for story generation
  private imageSource: ImageSourcePropType;
  private scenarioImageSources: ScenarioImageSources;

  constructor(
    id: number,
    title: string,
    description: string,
    promptDescription: string,
    imageSource: ImageSourcePropType,
    scenarioImageSources: ScenarioImageSources
  ) {
    super(id);
    this.title = title;
    this.description = description;
    this.promptDescription = promptDescription;
    this.imageSource = imageSource;
    this.scenarioImageSources = scenarioImageSources;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getPromptDescription(): string {
    return this.promptDescription;
  }

  getImageSource(): ImageSourcePropType {
    return this.imageSource;
  }

  getScenarioImageSources(): ScenarioImageSources {
    return this.scenarioImageSources;
  }

  getRandomScenarioImage(
    scenario: keyof ScenarioImageSources
  ): ImageSourcePropType | null {
    const images: ImageSourcePropType[] = this.scenarioImageSources[scenario];
    if (!images || images.length === 0) {
      console.error(`No images available for scenario: ${scenario}`);
      return null;
    }
    return images[Math.floor(Math.random() * images.length)];
  }
}

export default AdventureLand;
