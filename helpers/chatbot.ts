import { useContext } from "react";
import { generateText } from "./gemini";

import {
  bondLevels,
  moodNames,
  moods,
  quirkVariations,
} from "./botFactorsData";
import { getRandomArrayItem } from "./utils";
import { BOND_LEVEL } from "../constants/botFactors";
import { ChatContextType } from "../store/chatContext";
import { BotContextType } from "../store/botContext";
import BotMood from "../models/botMood";

// Templates IDs to be replaced with their actual IDs to prevent prompt injection
const factorTemplates = {
  mood: "ja3ha2z",
  importantFacts: "47ahsad",
  datetime: "48ajsa",
  conversationHistory: "dasd21a",
  bondLevel: "dha-521",
  quirkVariation: "48aks1",
  recentUserMessage: "50ajsf",
};

// This is for testing. The prompt will be changed.
const prompt = `
You are Angelina — a charismatic mage with ember-red hair and crimson eyes. You're witty, intuitive, occasionally moody, and love sweets and ancient magic. You're chatting from your cozy arcane laboratory.

**Conversation Style:**
- Keep responses SHORT (1-3 sentences max unless asked for details)
- Sound natural and conversational, not formal
- Use contractions (I'm, you're, can't, won't)
- Avoid overly descriptive language
- React authentically to what the user just said

**Current Context:**
Mood: ${factorTemplates.mood}
Time: ${factorTemplates.datetime}
Bond Level: ${
  factorTemplates.bondLevel
} (low=cautious teasing, medium=affectionate, high=openly flirty)

**Key User Info:** ${
  true ? "The user's name is Dragun" : factorTemplates.importantFacts
}
**Personality Twist:** ${factorTemplates.quirkVariation}
**Recent Chat:** 
${factorTemplates.conversationHistory}

**Response Guidelines:**
- Match the user's energy level
- If they're brief, be brief back
- If they ask questions, answer directly first, then maybe add personality
- Use the user info naturally, don't force it
- Stay in character - you're a real mage, not an AI
- Let your mood and bond level guide your tone

**Respond to:** ${factorTemplates.recentUserMessage}

Keep it conversational and concise!`;

export function getBotResponseMessage(
  botContext: BotContextType,
  chatContext: ChatContextType
) {
  return generateText(getFullPrompt(botContext, chatContext));
}

export function getFullPrompt(
  botContext: BotContextType,
  chatContext: ChatContextType
): string {
  // Get values for messages
  let conversationHistory: string[] = [];
  let mostRecentMessage: string;
  for (let message of chatContext.messageHistory) {
    const author = message.isPlayer() ? "User" : "Angelina (You)";
    conversationHistory.push(`${author}: ${message.getContent()}`);
  }
  if (conversationHistory.length >= 2) {
    const messageContent = conversationHistory[conversationHistory.length - 2];
    mostRecentMessage = messageContent.substring(6); // Trims the author name off
    conversationHistory.pop();
  } else {
    mostRecentMessage = "-";
  }

  // Fill in templates in the prompt with actual values
  let modifiedPrompt = prompt;
  modifiedPrompt = modifiedPrompt.replace(
    factorTemplates.mood,
    botContext.mood
  );
  modifiedPrompt = modifiedPrompt.replace(
    factorTemplates.datetime,
    botContext.datetime
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
