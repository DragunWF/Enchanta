import { createContext, useState, useEffect, ReactNode } from "react";
import {
  getRandomBondLevel,
  getRandomMoodName,
  getRandomQuirk,
} from "../helpers/bot/chatbot";
import { BOND_LEVEL, MOOD } from "../constants/botFactors";
import { generateLatestId } from "../helpers/tools/utils";
import MemoryJournalEntry from "../models/memoryJournalEntry";

export interface BotContextType {
  mood: string;
  memoryJournalEntry: MemoryJournalEntry[];
  bondLevel: string;
  quirkVariation: string;
  updateMood: (mood: MOOD) => void;
  updateBond: (bondLevel: BOND_LEVEL) => void;
  updateQuirk: (quirk: string) => void;
  getMemoryJournalEntries: () => MemoryJournalEntry[];
  addMemoryJournalEntry: (journalEntry: string) => void;
  deleteMemoryJournalEntry: (targetId: number) => void;
  clearMemoryJournalEntries: () => void;
}

export const BotContext = createContext<BotContextType>({} as BotContextType);

interface BotContextProviderProps {
  children: ReactNode;
}

function BotContextProvider({ children }: BotContextProviderProps) {
  const [mood, setMood] = useState("neutral");
  const [memoryJournalEntries, setMemoryJournalEntries] = useState<
    MemoryJournalEntry[]
  >([]); // Added type annotation
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

  function getMemoryJournalEntries(): MemoryJournalEntry[] {
    return memoryJournalEntries;
  }

  function addJournalEntry(journalEntry: string) {
    const latestId = generateLatestId(memoryJournalEntries);
    setMemoryJournalEntries((current) => [
      ...current,
      new MemoryJournalEntry(latestId, journalEntry),
    ]);
  }

  function deleteJournalEntry(targetId: number) {
    setMemoryJournalEntries((current) =>
      current.filter((importantFact) => importantFact.getId() !== targetId)
    );
  }

  function clearImportantFacts() {
    setMemoryJournalEntries([]);
  }

  const value: BotContextType = {
    mood,
    memoryJournalEntry: memoryJournalEntries,
    bondLevel,
    quirkVariation,
    updateMood,
    updateBond,
    updateQuirk,
    getMemoryJournalEntries: getMemoryJournalEntries,
    addMemoryJournalEntry: addJournalEntry,
    deleteMemoryJournalEntry: deleteJournalEntry,
    clearMemoryJournalEntries: clearImportantFacts,
  };

  return <BotContext.Provider value={value}>{children}</BotContext.Provider>;
}

export default BotContextProvider;
