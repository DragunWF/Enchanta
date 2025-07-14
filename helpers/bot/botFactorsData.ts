import BotMood from "../../models/botMood";
import { BOND_LEVEL, MOOD } from "../../constants/botFactors";

const moodImages = {
  [MOOD.ANNOYED]: require("../../assets/images/moods/annoyed-mage.png"),
  [MOOD.CHEERFUL]: require("../../assets/images/moods/cheerful-mage.png"),
  [MOOD.CURIOUS]: require("../../assets/images/moods/curious-mage.png"),
  [MOOD.NEUTRAL]: require("../../assets/images/moods/neutral-mage.png"),
  [MOOD.PLAYFUL]: require("../../assets/images/moods/playful-mage.png"),
  [MOOD.SERIOUS]: require("../../assets/images/moods/serious-mage.png"),
  [MOOD.SLEEPY]: require("../../assets/images/moods/sleepy-mage.png"),
  [MOOD.LOVESTRUCK]: require("../../assets/images/moods/lovestruck-mage.png"),
  [MOOD.SAD]: require("../../assets/images/moods/sad-mage.png"),
  [MOOD.PROUD]: require("../../assets/images/moods/proud-mage.png"),
  [MOOD.SCHEMING]: require("../../assets/images/moods/scheming-mage.png"),
};

export const defaultMood = MOOD.NEUTRAL;

export const moods = Object.fromEntries(
  Object.keys(MOOD).map((moodKey, index) => [
    moodKey.toLowerCase(),
    new BotMood(index, moodKey, moodImages[MOOD[moodKey as keyof typeof MOOD]]),
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
