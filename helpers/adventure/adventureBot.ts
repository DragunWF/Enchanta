import { adventurePrompt, adventurePromptTemplates } from "./adventurePrompt";

import AdventureLand from "../../models/adventureLand";
import { AdventureContextType } from "../../store/AdventureContext";
import { generateText, generateTextWithHistory } from "../tools/gemini";

export async function getAdventureInitialBotResponse(
  adventureContext: AdventureContextType,
  chosenAdventureLand: AdventureLand | null
) {
  const prompt = getFullPrompt(chosenAdventureLand);
  if (!prompt) {
    throw new Error("No adventure land selected");
  }
  adventureContext.addAdventureLog({ role: "model", text: prompt });

  const aiResponse = await generateText(prompt);
  adventureContext.addAdventureLog({ role: "model", text: aiResponse });
  return aiResponse;
}

function getFullPrompt(
  adventureLand: AdventureLand | null
): string | undefined {
  if (!adventureLand) {
    return;
  }

  let modifiedPrompt = adventurePrompt;
  modifiedPrompt = modifiedPrompt.replace(
    adventurePromptTemplates.adventureTitle,
    adventureLand.getTitle()
  );
  modifiedPrompt = modifiedPrompt.replace(
    adventurePromptTemplates.adventureDescription,
    adventureLand.getDescription()
  );
  return modifiedPrompt;
}
