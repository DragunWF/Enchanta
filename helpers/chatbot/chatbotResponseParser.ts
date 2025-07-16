import { BOND_LEVEL, MOOD } from "../../constants/botFactors";
import { quirkVariations } from "./chatbotFactorsData";
import { parseAiJsonResponse } from "../tools/utils";

export interface BotResponse {
  reply: string;
  updatedMood: MOOD | null;
  bondLevelChange: BOND_LEVEL | null;
  memoryJournalEntry: string;
  updatedQuirk: string;
}

export function extractBotResponse(aiResponse: string): BotResponse | null {
  try {
    const parsed = parseAiJsonResponse(aiResponse);
    if (!parsed) {
      console.error("Failed to parse AI response");
      return null;
    }

    // Validate required fields
    const required = [
      "reply",
      "updatedMood",
      "bondLevelChange",
      "memoryJournalEntry",
      "updatedQuirk",
    ];
    for (const field of required) {
      if (!(field in parsed)) {
        console.error(`Missing required field: ${field}`);
        return null;
      }
    }

    // Convert and validate mood value
    let validatedMood: MOOD | null = null;
    if (Object.values(MOOD).includes(parsed.updatedMood)) {
      validatedMood = parsed.updatedMood as MOOD;
    } else if (parsed.updatedMood) {
      console.warn(`Invalid mood value: ${parsed.updatedMood}, using default`);
      validatedMood = MOOD.NEUTRAL; // or whatever your default should be
    }

    // Convert and validate bond level change
    let validatedBondLevel: BOND_LEVEL | null = null;
    if (Object.values(BOND_LEVEL).includes(parsed.bondLevelChange)) {
      validatedBondLevel = parsed.bondLevelChange as BOND_LEVEL;
    } else if (parsed.bondLevelChange) {
      console.warn(
        `Invalid bond level value: ${parsed.bondLevelChange}, using default`
      );
      validatedBondLevel = BOND_LEVEL.MEDIUM; // or whatever your default should be
    }

    // Validate quirk value
    let validatedQuirk = String(parsed.updatedQuirk || "");
    if (parsed.updatedQuirk && !quirkVariations.includes(parsed.updatedQuirk)) {
      console.warn(
        `Invalid quirk value: ${parsed.updatedQuirk}, resetting to empty`
      );
      validatedQuirk = "";
    }

    return {
      reply: String(parsed.reply || ""),
      updatedMood: validatedMood,
      bondLevelChange: validatedBondLevel,
      memoryJournalEntry: String(parsed.memoryJournalEntry || ""),
      updatedQuirk: validatedQuirk,
    };
  } catch (error) {
    console.error("Failed to parse Angelina response:", error);
    return null;
  }
}
