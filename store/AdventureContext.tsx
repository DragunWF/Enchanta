import { useState, useReducer, createContext, ReactNode } from "react";
import { GeminiMessagePart } from "../helpers/tools/gemini";
import AdventureLand from "../models/adventureLand";

enum ACTION_TYPE {
  ADD = "ADD",
  SET = "SET",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  CLEAR = "CLEAR",
}

interface AdventureContextAction {
  type: ACTION_TYPE;
  payload?: any;
}

export interface AdventureContextType {
  adventureLogs: any[]; // Replacable with a model
  selectedAdventureLand: AdventureLand | null;
  addAdventureLog: (data: any) => void;
  clearAdventureLogs: () => void;
  selectAdventureLand: (adventureLand: AdventureLand) => void;
  resetAdventureLand: () => void;
}

export const AdventureContext = createContext<AdventureContextType>(
  {} as AdventureContextType
);

interface AdventureContextProviderProps {
  children: ReactNode;
}

function AdventureContextProvider({ children }: AdventureContextProviderProps) {
  const [adventureLogsState, dispatch] = useReducer(dataReducer, []);
  const [selectedAdventureLand, setSelectedAdventureLand] =
    useState<AdventureLand | null>(null);

  function addAdventureLog(data: GeminiMessagePart) {
    dispatch({ type: ACTION_TYPE.ADD, payload: data });
  }

  function clearAdventureLogs() {
    dispatch({ type: ACTION_TYPE.CLEAR });
  }

  function selectAdventureLand(adventureLand: AdventureLand) {
    setSelectedAdventureLand(adventureLand);
  }

  function resetAdventureLand() {
    setSelectedAdventureLand(null);
  }

  const value = {
    adventureLogs: adventureLogsState,
    selectedAdventureLand,
    addAdventureLog,
    clearAdventureLogs,
    selectAdventureLand,
    resetAdventureLand,
  };

  return (
    <AdventureContext.Provider value={value}>
      {children}
    </AdventureContext.Provider>
  );
}

function dataReducer(state: any[], action: AdventureContextAction) {
  switch (action.type) {
    case ACTION_TYPE.ADD:
      return [...state, action.payload];
    case ACTION_TYPE.SET:
      return action.payload;
    case ACTION_TYPE.UPDATE:
      const targetIndex = state.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (targetIndex === -1) {
        return state;
      }

      const targetItem = state[targetIndex];
      const updatedItem = { ...targetItem, ...action.payload.data };
      const updatedData = [...state];
      updatedData[targetIndex] = updatedItem;
      return updatedData;
    case ACTION_TYPE.DELETE:
      return state.filter((data: any) => data.id !== action.payload.id);
    case ACTION_TYPE.CLEAR:
      return [];
    default:
      return state;
  }
}

export default AdventureContextProvider;
