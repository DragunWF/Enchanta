import { generateText } from "../tools/gemini";

import { bondLevels, moods, quirkVariations } from "./botFactorsData";
import { getCurrentDateToday, getRandomArrayItem } from "../tools/utils";
import { BOND_LEVEL, MOOD } from "../../constants/botFactors";
import { ChatContextType } from "../../store/ChatContext";
import { BotContextType } from "../../store/BotContext";
import { factorTemplates, prompt } from "./botPrompt";
import { extractBotResponse } from "./responseParser";
import { logAiResponse, logBotResponse } from "../tools/loggers";
import BotMood from "../../models/botMood";

const moodNames = Object.values(MOOD);

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
  const memoryJournalEntry = formattedResponse?.memoryJournalEntry;
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
  if (memoryJournalEntry) {
    botContext.addMemoryJournalEntry(memoryJournalEntry);
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
  const memoryJournalHistory = botContext.getMemoryJournalEntries();
  const recentEntries = memoryJournalHistory
    .slice(-10) // Gets last 10 entries (or all if fewer than 10)
    .map((entry) => entry.getContent());

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
    recentEntries.join(", ")
  );
  modifiedPrompt = modifiedPrompt.replace(
    factorTemplates.conversationHistory,
    `\`\`\`\n${conversationHistory.join("\n")}\n\`\`\``
  );
  modifiedPrompt = modifiedPrompt.replace(
    factorTemplates.recentUserMessage,
    mostRecentMessage
  );

  console.log(modifiedPrompt);

  return modifiedPrompt;
}

export function getRandomQuirk(): string {
  return getRandomArrayItem(quirkVariations);
}

export function getRandomMood(): BotMood {
  return moods[getRandomArrayItem(moodNames)];
}

export function getRandomMoodName(): string {
  /* 
    Excluded some moods for the starting point for realism and immersion
    The user will have to talk in a certain way to earn these moods
  */
  const excludedInitialMoods = [MOOD.LOVESTRUCK, MOOD.PLAYFUL, MOOD.PROUD];
  const randomMood = getRandomArrayItem(moodNames);
  if (excludedInitialMoods.includes(randomMood)) {
    return getRandomMoodName();
  }
  return randomMood;
}

export function getRandomBondLevel(): BOND_LEVEL {
  /* 
    Gives a 4/5 chance to start with a low bond level and
    a 1/5 chance to start with a medium bond level. A high
    bond level must be earned through conversation.
  */
  const possibleInitialMoods = [
    BOND_LEVEL.LOW,
    BOND_LEVEL.LOW,
    BOND_LEVEL.LOW,
    BOND_LEVEL.LOW,
    BOND_LEVEL.MEDIUM,
  ];
  return getRandomArrayItem(possibleInitialMoods);
}
