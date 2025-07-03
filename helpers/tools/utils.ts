import ImportantFact from "../../models/importantFact";
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

export function generateLatestId(values: Message[] | ImportantFact[]): number {
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
