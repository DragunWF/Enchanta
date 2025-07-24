import {
  adventurePrompt,
  adventurePromptTemplate,
  playerResponsePrompt,
  playerResponsePromptTemplate,
} from "./adventurePrompt";

import AdventureLand from "../../models/adventureLand";
import { AdventureContextType } from "../../store/AdventureContext";
import { generateText, generateTextWithHistory } from "../tools/gemini";
import { extractAdventureBotResponse } from "./adventureResponseParser";
import { universalAdventureGoals } from "./adventureData";
import {
  logGeminiResponseHistory,
  logGeminiHistoryCompact,
  logAiResponse,
} from "../tools/loggers";

export async function getAdventureInitialBotResponse(
  adventureContext: AdventureContextType,
  chosenAdventureLand: AdventureLand | null
) {
  const prompt = getFullIntialAdventurePrompt(chosenAdventureLand);
  if (!prompt) {
    throw new Error("No adventure land selected");
  }
  adventureContext.addAdventureLog({ role: "model", text: prompt });
  console.info(prompt);

  const aiResponse = await generateText(prompt);
  adventureContext.addAdventureLog({ role: "model", text: aiResponse });

  return extractAdventureBotResponse(aiResponse);
}

function getFullIntialAdventurePrompt(
  adventureLand: AdventureLand | null
): string | undefined {
  if (!adventureLand) {
    return;
  }

  let modifiedPrompt = adventurePrompt;
  modifiedPrompt = modifiedPrompt.replace(
    adventurePromptTemplate.adventureTitle,
    adventureLand.getTitle()
  );
  modifiedPrompt = modifiedPrompt.replace(
    adventurePromptTemplate.adventureDescription,
    adventureLand.getPromptDescription()
  );

  // Docs: Gets a random adventure goal for a more replyable experience
  modifiedPrompt = modifiedPrompt.replace(
    adventurePromptTemplate.adventureGoal,
    universalAdventureGoals[
      Math.floor(Math.random() * universalAdventureGoals.length)
    ]
  );
  return modifiedPrompt;
}

export async function getAdventureBotResponse(
  adventureContext: AdventureContextType,
  playerChoice: string | null
) {
  if (!playerChoice) {
    throw new Error("No choice selected!");
  }

  const playerResponsePrompt = getFullPlayerResponsePrompt(playerChoice);
  // Create a new array with the latest message included
  const updatedMessageHistory = [
    ...adventureContext.adventureLogs,
    { role: "user", text: playerResponsePrompt },
  ];

  // Use the complete history array
  const aiResponse = await generateTextWithHistory(updatedMessageHistory);

  // After getting the response, update the context
  adventureContext.addAdventureLog({
    role: "user",
    text: playerResponsePrompt,
  });
  adventureContext.addAdventureLog({ role: "model", text: aiResponse });

  logGeminiHistoryCompact(updatedMessageHistory);
  logAiResponse(aiResponse);

  return extractAdventureBotResponse(aiResponse);
}

function getFullPlayerResponsePrompt(playerChoice: string) {
  let modifiedPrompt = playerResponsePrompt;
  modifiedPrompt = modifiedPrompt.replace(
    playerResponsePromptTemplate.playerChoice,
    playerChoice
  );
  modifiedPrompt = modifiedPrompt.replace(
    playerResponsePromptTemplate.itemUsed,
    "none"
  ); // Assuming no item used by default
  return modifiedPrompt;
}
