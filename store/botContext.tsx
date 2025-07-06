import { createContext, useState, useEffect, ReactNode } from "react";
import {
  getRandomBondLevel,
  getRandomMoodName,
  getRandomQuirk,
} from "../helpers/bot/chatbot";
import { BOND_LEVEL, MOOD } from "../constants/botFactors";
import { generateLatestId } from "../helpers/tools/utils";
import ImportantFact from "../models/importantFact";

export interface BotContextType {
  mood: string;
  importantFacts: ImportantFact[];
  bondLevel: string;
  quirkVariation: string;
  updateMood: (mood: MOOD) => void;
  updateBond: (bondLevel: BOND_LEVEL) => void;
  updateQuirk: (quirk: string) => void;
  getImportantFacts: () => ImportantFact[];
  addImportantFact: (importantFact: string) => void;
  deleteImportantFact: (targetId: number) => void;
  clearImportantFacts: () => void;
}

export const BotContext = createContext<BotContextType>({} as BotContextType);

interface BotContextProviderProps {
  children: ReactNode;
}

function BotContextProvider({ children }: BotContextProviderProps) {
  const [mood, setMood] = useState("neutral");
  const [importantFacts, setImportantFacts] = useState<ImportantFact[]>([]); // Added type annotation
  const [bondLevel, setBondLevel] = useState("");
  const [quirkVariation, setQuirkVariation] = useState("");

  useEffect(() => {
    // Set initial values
    setMood(getRandomMoodName());
    setQuirkVariation(getRandomQuirk());
    setBondLevel(getRandomBondLevel());
  }, []);

  function updateMood(mood: MOOD) {
    setMood(mood);
  }

  function updateBond(bondLevel: BOND_LEVEL) {
    setBondLevel(bondLevel);
  }

  function updateQuirk(quirk: string) {
    setQuirkVariation(quirk);
  }

  function getImportantFacts(): ImportantFact[] {
    return importantFacts;
  }

  function addImportantFact(importantFact: string) {
    const latestId = generateLatestId(importantFacts);
    setImportantFacts((current) => [
      ...current,
      new ImportantFact(latestId, importantFact),
    ]);
  }

  function deleteImportantFact(targetId: number) {
    setImportantFacts((current) =>
      current.filter((importantFact) => importantFact.getId() !== targetId)
    );
  }

  function clearImportantFacts() {
    setImportantFacts([]);
  }

  const value: BotContextType = {
    mood,
    importantFacts,
    bondLevel,
    quirkVariation,
    updateMood,
    updateBond,
    updateQuirk,
    getImportantFacts,
    addImportantFact,
    deleteImportantFact,
    clearImportantFacts,
  };

  return <BotContext.Provider value={value}>{children}</BotContext.Provider>;
}

export default BotContextProvider;
