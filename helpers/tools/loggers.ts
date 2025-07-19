import { BOND_LEVEL, MOOD } from "../../constants/botFactors";
import AdventureLand from "../../models/adventureLand";
import AdventureResult from "../../models/adventureResult";
import { BotResponse } from "../chatbot/chatbotResponseParser";
import { GeminiMessagePart } from "./gemini";
import { toTitleCase } from "./utils";

let responseCount = 0;

export function logAiResponse(response: string | null) {
  if (!response) {
    return null;
  }
  console.info(`
+ ----------------------------------------------------------- +
${response}
+ ----------------------------------------------------------- +
`);
}

export function logBotResponse(response: BotResponse | null) {
  responseCount++;
  if (!response) {
    console.info("Null Response");
    return;
  }
  console.info(`
+ ----------------------------------------------------------- +
Bot Response (${responseCount}):
Memory Journal Entry: ${formatFactor(response.memoryJournalEntry)}
Updated Mood: ${formatFactor(response.updatedMood as string)}
Bond Level Change: ${formatFactor(response.bondLevelChange as string)}
Updated Quirk: ${formatFactor(response.updatedQuirk)}

Reply:
${response.reply}
+ ----------------------------------------------------------- +
`);
}

function formatFactor(factor: string | MOOD | BOND_LEVEL): string {
  return factor ? toTitleCase(factor) : "None";
}

export function logGeminiResponseHistory(history: GeminiMessagePart[]) {
  const separator = "=".repeat(60);
  const msgSeparator = "-".repeat(40);

  console.log(`\n${separator}`);
  console.log(`📱 GEMINI HISTORY DEBUG (${history.length} messages)`);
  console.log(`${separator}`);

  history.forEach((message, index) => {
    const roleIcon = message.role === "user" ? "👤" : "🤖";
    const msgNum = `[${String(index + 1).padStart(2, "0")}]`;

    console.log(`\n${msgNum} ${roleIcon} ${message.role.toUpperCase()}`);
    console.log(`${msgSeparator}`);
    console.log(message.text);
    console.log(`Length: ${message.text.length} chars`);
  });

  console.log(`\n${separator}\n`);
}

// Compact version - one line per message
export function logGeminiHistoryCompact(history: GeminiMessagePart[]) {
  console.log(`\n📱 GEMINI HISTORY (${history.length} messages):`);
  history.forEach((msg, i) => {
    const roleIcon = msg.role === "user" ? "👤" : "🤖";
    const preview = msg.text.substring(0, 80).replace(/\n/g, " ");
    const truncated = msg.text.length > 80 ? "..." : "";
    console.log(`${i + 1}. ${roleIcon} ${preview}${truncated}`);
  });
  console.log("");
}

// Debug version with more technical details
export function logGeminiHistoryDebug(history: GeminiMessagePart[]) {
  console.log(`\n🔍 GEMINI DEBUG - ${history.length} messages`);
  console.log("=".repeat(50));

  history.forEach((msg, i) => {
    const lines = msg.text.split("\n").length;
    const words = msg.text.split(/\s+/).length;
    const roleIcon = msg.role === "user" ? "👤" : "🤖";

    console.log(
      `${i + 1}. ${roleIcon} ${msg.role} | ${
        msg.text.length
      }c ${lines}l ${words}w`
    );

    // Show first few lines for context
    const firstLines = msg.text.split("\n").slice(0, 3).join("\n");
    const hasMore = msg.text.split("\n").length > 3;

    console.log(`   "${firstLines}${hasMore ? "\n   [...]" : ""}"`);
    console.log("");
  });
}

// For when you just want to see the last few messages
export function logGeminiHistoryTail(
  history: GeminiMessagePart[],
  count: number = 3
) {
  const recent = history.slice(-count);
  console.log(`\n📱 LAST ${count} MESSAGES:`);
  console.log("=".repeat(30));

  recent.forEach((msg, i) => {
    const actualIndex = history.length - count + i + 1;
    const roleIcon = msg.role === "user" ? "👤" : "🤖";

    console.log(`${actualIndex}. ${roleIcon} ${msg.role}:`);
    console.log(`   ${msg.text}`);
    console.log("");
  });
}

export function logAdventureLand(adventureLand: AdventureLand | undefined) {
  if (!adventureLand) {
    console.log("Adventure land is undefined!");
    return;
  }
  console.log(`
+ ----- Adventure Land ----- +
ID: ${adventureLand.getId()}
Title: ${adventureLand.getTitle()}
+ -------------------------- +
`);
}

export function logAdventureResult(
  adventureResult: AdventureResult | undefined
) {
  if (!adventureResult) {
    console.log("Adventure Result is undefined!");
    return;
  }
  console.log(`
+ ----- Adventure Result ----- +
ID: ${adventureResult.getId()}
Landscape ID: ${adventureResult.getLandscapeId()}
Summary: ${adventureResult.getSummary()}
+ -------------------------- +
`);
}
