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
import { extractBotResponse } from "./responseParser";
import { logAiResponse, logBotResponse } from "../tools/loggers";
import BotMood from "../../models/botMood";

export async function getBotResponseMessage(
  botContext: BotContextType,
  chatContext: ChatContextType,
  mostRecentMessage: string
) {
  const aiResponse = await generateText(
    getFullPrompt(botContext, chatContext, mostRecentMessage)
  );

  const formattedResponse = extractBotResponse(aiResponse);

  let reply = formattedResponse?.reply;
  const updatedMood = formattedResponse?.updatedMood;
  const bondLevelChange = formattedResponse?.bondLevelChange;
  const newImportantFact = formattedResponse?.newImportantFact;
  const updatedQuirk = formattedResponse?.updatedQuirk;

  logBotResponse(formattedResponse);

  if (!reply) {
    reply = "..."; // Fallback reply
  }
  if (updatedMood) {
    botContext.updateMood(updatedMood);
  }
  if (bondLevelChange) {
    botContext.updateBond(bondLevelChange);
  }
  if (updatedQuirk) {
    botContext.updateQuirk(updatedQuirk);
  }
  if (newImportantFact) {
    botContext.addImportantFact(newImportantFact);
  }

  return reply;
}

export function getFullPrompt(
  botContext: BotContextType,
  chatContext: ChatContextType,
  mostRecentMessage: string
): string {
  // Get values for messages
  const messageCountForContext = 25;
  const messageHistory = chatContext.messageHistory;
  const startIndex =
    messageHistory.length > messageCountForContext
      ? messageHistory.length - messageCountForContext
      : 0;
  let conversationHistory: string[] = [];
  for (let i = startIndex; i < messageHistory.length; i++) {
    const message = messageHistory[i];
    const author = message.isPlayer() ? "User" : "Angelina (You)";
    conversationHistory.push(`${author}: ${message.getContent()}`);
  }

  // Format values for important facts
  let importantFactContents: string[] = [];
  for (let fact of botContext.getImportantFacts()) {
    importantFactContents.push(fact.getContent());
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
    factorTemplates.importantFacts,
    importantFactContents.join(", ")
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
