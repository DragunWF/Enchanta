import BotMood from "../../models/botMood";
import { BOND_LEVEL, MOOD } from "../../constants/botFactors";

const moodImages = {
  [MOOD.ANNOYED]: require("../../assets/images/annoyed-mage.png"),
  [MOOD.CHEERFUL]: require("../../assets/images/cheerful-mage.png"),
  [MOOD.CURIOUS]: require("../../assets/images/curious-mage.png"),
  [MOOD.NEUTRAL]: require("../../assets/images/neutral-mage.png"),
  [MOOD.PLAYFUL]: require("../../assets/images/playful-mage.png"),
  [MOOD.SERIOUS]: require("../../assets/images/serious-mage.png"),
  [MOOD.SLEEPY]: require("../../assets/images/sleepy-mage.png"),
  [MOOD.LOVESTRUCK]: require("../../assets/images/lovestruck-mage.png"),
};

export const moods = Object.fromEntries(
  Object.keys(MOOD).map((moodKey) => [
    moodKey.toLowerCase(),
    new BotMood(moodKey, moodImages[MOOD[moodKey as keyof typeof MOOD]]),
  ])
);

export const quirkVariations: string[] = [
  "normal", // First item is set as the default quirk when a reset occurs
  "overly dramatic",
  "unexpectedly sweet",
  "mana mishap comment",
  "teasing challenge",
  "sassy comeback",
  "daydreaming about sweets",
];

export const bondLevels: string[] = Object.values(BOND_LEVEL);
