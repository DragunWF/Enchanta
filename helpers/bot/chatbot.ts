import { generateText } from "../tools/gemini";

import {
  bondLevels,
  moodNames,
  moods,
  quirkVariations,
} from "./botFactorsData";
import { getCurrentDateToday, getRandomArrayItem } from "../tools/utils";
import { BOND_LEVEL } from "../../constants/botFactors";
import { ChatContextType } from "../../store/chatContext";
import { BotContextType } from "../../store/botContext";
import { factorTemplates, prompt } from "./botPrompt";
import BotMood from "../../models/botMood";

export function getBotResponseMessage(
  botContext: BotContextType,
  chatContext: ChatContextType,
  mostRecentMessage: string
) {
  const response = generateText(
    getFullPrompt(botContext, chatContext, mostRecentMessage)
  );
  return response;
}

export function getFullPrompt(
  botContext: BotContextType,
  chatContext: ChatContextType,
  mostRecentMessage: string
): string {
  // Get values for messages
  let conversationHistory: string[] = [];
  for (let message of chatContext.messageHistory) {
    const author = message.isPlayer() ? "User" : "Angelina (You)";
    conversationHistory.push(`${author}: ${message.getContent()}`);
  }

  // Fill in templates in the prompt with actual values
  let modifiedPrompt = prompt;
  modifiedPrompt = modifiedPrompt.replace(
    factorTemplates.mood,
    botContext.mood
  );
  modifiedPrompt = modifiedPrompt.replace(
    factorTemplates.datetime,
    getCurrentDateToday()
  );
  modifiedPrompt = modifiedPrompt.replace(
    factorTemplates.bondLevel,
    botContext.bondLevel
  );
  modifiedPrompt = modifiedPrompt.replace(
    factorTemplates.quirkVariation,
    botContext.quirkVariation
  );
  modifiedPrompt = modifiedPrompt.replace(
    factorTemplates.conversationHistory,
    `\`\`\`\n${conversationHistory.join("\n")}\n\`\`\``
  );
  modifiedPrompt = modifiedPrompt.replace(
    factorTemplates.recentUserMessage,
    mostRecentMessage
  );

  return modifiedPrompt;
}

export function getRandomQuirk(): string {
  return getRandomArrayItem(quirkVariations);
}

export function getRandomMood(): BotMood {
  return moods[getRandomArrayItem(moodNames)];
}

export function getRandomMoodName(): string {
  return getRandomArrayItem(moodNames);
}

export function getRandomBondLevel(): BOND_LEVEL {
  return getRandomArrayItem(bondLevels);
}
