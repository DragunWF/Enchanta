import * as Linking from "expo-linking";
import MemoryJournalEntry from "../../models/memoryJournalEntry";
import Message from "../../models/message";

export function getRandomArrayItem(arr: any): any {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getCurrentDateToday(): string {
  const today = new Date();

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true, // Use 12-hour clock with AM/PM
  };

  return new Intl.DateTimeFormat("en-US", options).format(today);
}

export function generateLatestId(
  values: Message[] | MemoryJournalEntry[]
): number {
  let maxId = 0;
  for (let obj of values) {
    if (obj.getId() > maxId) {
      maxId = obj.getId();
    }
  }
  return maxId + 1 + Math.random();
}

export function toTitleCase(word: string): string {
  if (!word) {
    return "";
  }
  if (word.length === 1) {
    return word.toUpperCase();
  }
  return `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`;
}

export function openLinkInBrowser(url: string) {
  if (url && url.startsWith("http")) {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  } else {
    console.warn("Invalid URL:", url);
  }
}

export function parseAiJsonResponse(aiResponse: string) {
  const cleanResponse = aiResponse.trim();

  // Extract JSON from code blocks
  const jsonMatch = cleanResponse.match(/```json\s*([\s\S]*?)\s*```/);

  if (!jsonMatch) {
    // Try to find JSON without code blocks
    const directJsonMatch = cleanResponse.match(/\{[\s\S]*\}/);
    if (!directJsonMatch) {
      console.error("No JSON found in response");
      return null;
    }
    return JSON.parse(directJsonMatch[0]);
  }

  const jsonString = jsonMatch[1];
  return JSON.parse(jsonString);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
