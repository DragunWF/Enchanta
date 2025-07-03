import { BOND_LEVEL, MOOD } from "../../constants/botFactors";
import { moodNames } from "./botFactorsData";
import { quirkVariations } from "./botFactorsData";

export interface BotResponse {
  reply: string;
  updatedMood: MOOD;
  bondLevelChange: BOND_LEVEL;
  newImportantFact: string;
  updatedQuirk: string;
}

export function extractBotResponse(aiResponse: string): BotResponse | null {
  try {
    // Remove any leading/trailing whitespace
    const cleanResponse = aiResponse.trim();

    // Extract JSON from code blocks
    const jsonMatch = cleanResponse.match(/```json\s*([\s\S]*?)\s*```/);

    if (!jsonMatch) {
      // Try to find JSON without code blocks
      const directJsonMatch = cleanResponse.match(/\{[\s\S]*\}/);
      if (!directJsonMatch) {
        console.error("No JSON found in response");
        return null;
      }
      return JSON.parse(directJsonMatch[0]);
    }

    const jsonString = jsonMatch[1];
    const parsed = JSON.parse(jsonString);

    // Validate required fields
    const required = [
      "reply",
      "updatedMood",
      "bondLevelChange",
      "newImportantFact",
      "updatedQuirk",
    ];
    for (const field of required) {
      if (!(field in parsed)) {
        console.error(`Missing required field: ${field}`);
        return null;
      }
    }

    // Validate mood and quirk values if they're not empty
    if (parsed.updatedMood && !moodNames.includes(parsed.updatedMood)) {
      console.warn(
        `Invalid mood value: ${parsed.updatedMood}, resetting to empty`
      );
      parsed.updatedMood = "";
    }

    if (parsed.updatedQuirk && !quirkVariations.includes(parsed.updatedQuirk)) {
      console.warn(
        `Invalid quirk value: ${parsed.updatedQuirk}, resetting to empty`
      );
      parsed.updatedQuirk = "";
    }

    // Ensure string types and handle null/undefined
    return {
      reply: String(parsed.reply || ""),
      updatedMood: String(parsed.updatedMood || ""),
      bondLevelChange: String(parsed.bondLevelChange || ""),
      newImportantFact: String(parsed.newImportantFact || ""),
      updatedQuirk: String(parsed.updatedQuirk || ""),
    };
  } catch (error) {
    console.error("Failed to parse Angelina response:", error);
    return null;
  }
}

export function extractBotResponseWithFallback(
  aiResponse: string
): BotResponse {
  const extracted = extractBotResponse(aiResponse);

  if (extracted) {
    return extracted;
  }

  // Fallback: treat entire response as reply if JSON parsing fails
  console.warn("JSON parsing failed, using fallback extraction");
  return {
    reply: aiResponse.trim(),
    updatedMood: "",
    bondLevelChange: "",
    newImportantFact: "",
    updatedQuirk: "",
  };
}
