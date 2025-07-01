import BotMood from "../models/botMood";
import { MOODS } from "../constants/botMoodNames";

const baseImagePath = "../assets/images";

export const moods = [
  new BotMood(MOODS.annoyed, require(`${baseImagePath}/annoyed-mage.png`)),
  new BotMood(MOODS.cheerful, require(`${baseImagePath}/cheerful-mage.png`)),
  new BotMood(MOODS.curious, require(`${baseImagePath}/curious-mage.png`)),
  new BotMood(MOODS.neutral, require(`${baseImagePath}/neutral-mage.png`)),
  new BotMood(MOODS.playful, require(`${baseImagePath}/playful-mage.png`)),
  new BotMood(MOODS.serious, require(`${baseImagePath}/serious-mage.png`)),
  new BotMood(MOODS.sleepy, require(`${baseImagePath}/sleepy-mage.png`)),
];
