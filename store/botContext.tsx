import { createContext, useState, useEffect, ReactNode } from "react";
import {
  getRandomBondLevel,
  getRandomMoodName,
  getRandomQuirk,
} from "../helpers/bot/chatbot";
import { BOND_LEVEL, MOOD } from "../constants/botFactors";

export interface BotContextType {
  mood: string;
  importantFacts: string[];
  bondLevel: string;
  quirkVariation: string;
  updateMood: (mood: MOOD) => void;
  updateBond: (bondLevel: BOND_LEVEL) => void;
  updateQuirk: (quirk: string) => void;
}
export const BotContext = createContext<BotContextType>({} as BotContextType);

interface BotContextProviderProps {
  children: ReactNode;
}

function BotContextProvider({ children }: BotContextProviderProps) {
  const [mood, setMood] = useState("neutral");
  const [importantFacts, setImportantFacts] = useState(["None"]); // Temporary
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

  const value: BotContextType = {
    mood,
    importantFacts,
    bondLevel,
    quirkVariation,
    updateMood,
    updateBond,
    updateQuirk,
  };

  return <BotContext.Provider value={value}>{children}</BotContext.Provider>;
}

export default BotContextProvider;
