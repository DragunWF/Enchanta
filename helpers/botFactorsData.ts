import BotMood from "../models/botMood";
import { BOND_LEVEL, MOOD } from "../constants/botFactors";

const baseImagePath = "../assets/images";

const moodImages = {
  [MOOD.ANNOYED]: require(`${baseImagePath}/annoyed-mage.png`),
  [MOOD.CHEERFUL]: require(`${baseImagePath}/cheerful-mage.png`),
  [MOOD.CURIOUS]: require(`${baseImagePath}/curious-mage.png`),
  [MOOD.NEUTRAL]: require(`${baseImagePath}/neutral-mage.png`),
  [MOOD.PLAYFUL]: require(`${baseImagePath}/playful-mage.png`),
  [MOOD.SERIOUS]: require(`${baseImagePath}/serious-mage.png`),
  [MOOD.SLEEPY]: require(`${baseImagePath}/sleepy-mage.png`),
  [MOOD.LOVESTRUCK]: require(`${baseImagePath}/lovestruck-mage.png`),
};

export const moods = Object.fromEntries(
  Object.keys(MOOD).map((moodKey) => [
    moodKey,
    new BotMood(moodKey, moodImages[MOOD[moodKey as keyof typeof MOOD]]),
  ])
);

export const moodNames = Object.values(MOOD);

export const quirkVariations: string[] = [
  "overly dramatic",
  "unexpectedly sweet",
  "mana mishap comment",
  "teasing challenge",
  "sassy comeback",
  "daydreaming about sweets",
  "normal",
];

export const bondLevels: string[] = Object.values(BOND_LEVEL);
