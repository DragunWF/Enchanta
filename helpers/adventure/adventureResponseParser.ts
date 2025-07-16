import { parseAiJsonResponse } from "../tools/utils";

interface AdventureResponse {
  narrationText: string;
  isGameover: boolean;
  choices: string[4];
  itemGained: string;
}

export function extractAdventureBotResponse(
  aiJsonResponse: string
): AdventureResponse | null {
  try {
    const parsed = parseAiJsonResponse(aiJsonResponse);

    const required = ["narrationText", "isGameover", "choices", "itemGained"];
    for (let field of required) {
      if (!required.includes(field)) {
        console.error(`Missing required field: ${field}`);
        return null;
      }
    }

    return {
      narrationText: parsed.narrationText,
      isGameover: Boolean(parsed.isGameover),
      choices: parsed.choices || [],
      itemGained: parsed.itemGained || "",
    };
  } catch (err) {
    console.error("Error parsing adventure response:", err);
    return null;
  }
}
