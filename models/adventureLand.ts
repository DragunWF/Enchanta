import Model from "./model";
import { ImageSourcePropType } from "react-native";

export interface ScenarioImageSources {
  calm: ImageSourcePropType[];
  mystery: ImageSourcePropType[];
  danger: ImageSourcePropType[];
  action: ImageSourcePropType[];
  aftermath: ImageSourcePropType[];
}

export interface GameOverImageSources {
  win: ImageSourcePropType;
  lose: ImageSourcePropType;
}

class AdventureLand extends Model {
  private title: string;
  private description: string; // This displays in front of the user
  private promptDescription: string; // This is used for story generation
  private imageSource: ImageSourcePropType;
  private scenarioImageSources: ScenarioImageSources;
  private gameOverImageSources: GameOverImageSources;
  private backgroundImageSource: ImageSourcePropType;

  constructor(
    id: number,
    title: string,
    description: string,
    promptDescription: string,
    imageSource: ImageSourcePropType,
    scenarioImageSources: ScenarioImageSources,
    gameOverImageSources: GameOverImageSources,
    backgroundImageSource: ImageSourcePropType
  ) {
    super(id);
    this.title = title;
    this.description = description;
    this.promptDescription = promptDescription;
    this.imageSource = imageSource;
    this.scenarioImageSources = scenarioImageSources;
    this.gameOverImageSources = gameOverImageSources;
    this.backgroundImageSource = backgroundImageSource;
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

  getGameOverImageSources(): GameOverImageSources {
    return this.gameOverImageSources;
  }

  getGameOverWinImageSource(): ImageSourcePropType {
    return this.gameOverImageSources.win;
  }

  getGameOverLoseImageSource(): ImageSourcePropType {
    return this.gameOverImageSources.lose;
  }

  getBackgroundImageSource(): ImageSourcePropType {
    return this.backgroundImageSource;
  }
}

export default AdventureLand;
