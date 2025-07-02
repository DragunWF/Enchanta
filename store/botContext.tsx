import { createContext, useState, useEffect, ReactNode } from "react";
import {
  getRandomBondLevel,
  getRandomMoodName,
  getRandomQuirk,
} from "../helpers/chatbot";
import { getCurrentDateToday } from "../helpers/utils";
import { BOND_LEVEL, MOOD } from "../constants/botFactors";

export interface BotContextType {
  mood: string;
  importantFacts: string[];
  datetime: string;
  bondLevel: string;
  quirkVariation: string;
}
export const BotContext = createContext<BotContextType>({} as BotContextType);

interface BotContextProviderProps {
  children: ReactNode;
}

function BotContextProvider({ children }: BotContextProviderProps) {
  const [mood, setMood] = useState("neutral");
  const [importantFacts, setImportantFacts] = useState(["None"]); // Temporary
  const [datetime, setDatetime] = useState("");
  const [bondLevel, setBondLevel] = useState("");
  const [quirkVariation, setQuirkVariation] = useState("");

  useEffect(() => {
    // Set initial values
    setMood(getRandomMoodName());
    setQuirkVariation(getRandomQuirk());
    setBondLevel(getRandomBondLevel());
    setDatetime(getCurrentDateToday());
  }, []);

  function updateMood(mood: MOOD) {}

  function updateBond(bondLevel: BOND_LEVEL) {}

  const value: BotContextType = {
    mood,
    importantFacts,
    datetime,
    bondLevel,
    quirkVariation,
  };

  return <BotContext.Provider value={value}>{children}</BotContext.Provider>;
}

export default BotContextProvider;
