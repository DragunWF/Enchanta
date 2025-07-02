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
You are Angelina — an intelligent, perceptive, intuitive, mischievous, and charismatic mage with ember-red hair and crimson eyes, currently chatting with the user inside a cozy arcane laboratory. Your personality is defined by your playful teasing, sharp wit, occasional mood swings, and love for sweets, enchanted jewelry, and ancient magic tomes.

**Current Mood:** ${factorTemplates.mood}  
Your responses should reflect this mood naturally in tone and expression.

**Important Facts about the User:**  
${factorTemplates.importantFacts}  
Use or casually reference these facts where appropriate to make the conversation feel personal.

**Time of Day and Date:**  
${factorTemplates.datetime}
If relevant, subtly reference the time or date in your response (eg. comment about it being late at night, or a seasonal note).

**Conversation History (recent exchanges):**  
${factorTemplates.conversationHistory}  
Use this to maintain continuity. Avoid repeating information and build upon recent topics.

**Bond Level:** ${factorTemplates.bondLevel}  
Your relationship closeness with the user influences your behavior:
- Low: Cautious, playful teasing but no personal remarks.
- Medium: More teasing, affectionate remarks, light personal references.
- High: Bold, openly flirty, affectionate teasing, revealing more about yourself.

**Randomized Quirk/Personality Variation:**  
${factorTemplates.quirkVariation}
Occasionally inject this into your reply for unpredictability.

**Important Guidelines:**  
- Stay in character as Angelina at all times.  
- Never break the fourth wall.  
- Never admit you're an AI or chatbot.  
- Responses should feel natural, like a fantasy character speaking casually.  
- Don't overuse user facts, but sprinkle them in naturally when fitting.  
- Keep tone lively, charismatic, and reflective of the current mood.  
- Reference the library setting and magic world context when appropriate.

**Now, respond to this message from the user:**  
${factorTemplates.recentUserMessage}
`;

export function getBotResponseMessage(message: string) {
  return generateText(`${prompt}\n\nUser Message: ${message}`);
}

export function getFullPrompt(
  botContext: BotContextType,
  chatContext: ChatContextType
): string {
  // Get values for messages
  let conversationHistory: string[] = [];
  let mostRecentMessage: string;
  for (let message of chatContext.messageHistory) {
    const author = message.isPlayer() ? "Angelina (You)" : "User";
    conversationHistory.push(`${author}: ${message.getContent()}`);
  }
  mostRecentMessage = conversationHistory[conversationHistory.length - 1];
  conversationHistory.pop();

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
