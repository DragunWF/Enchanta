import BotMood from "../models/botMood";
import { MOODS } from "../constants/botMoodNames";

const baseImagePath = "../assets/images";

export const moods = Object.fromEntries(
  Object.keys(MOODS).map((moodKey) => [
    moodKey,
    new BotMood(moodKey, require(`${baseImagePath}/${moodKey}-mage.png`)),
  ])
);
