import { BOND_LEVEL, MOOD } from "../../constants/botFactors";
import { BotResponse } from "../bot/responseParser";
import { toTitleCase } from "./utils";

let responseCount = 0;

export function logAiResponse(response: string | null) {
  if (!response) {
    return null;
  }
  console.info(`
+ ----------------------------------------------------------- +
${response}
+ ----------------------------------------------------------- +
`);
}

export function logBotResponse(response: BotResponse | null) {
  responseCount++;
  if (!response) {
    console.info("Null Response");
    return;
  }
  console.info(`
+ ----------------------------------------------------------- +
Bot Response (${responseCount}):
New Important Fact: ${formatFactor(response.newImportantFact)}
Updated Mood: ${formatFactor(response.updatedMood as string)}
Bond Level Change: ${formatFactor(response.bondLevelChange as string)}
Updated Quirk: ${formatFactor(response.updatedQuirk)}

Reply:
${response.reply}
+ ----------------------------------------------------------- +
`);
}

function formatFactor(factor: string | MOOD | BOND_LEVEL): string {
  return factor ? toTitleCase(factor) : "None";
}
