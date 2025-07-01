import { generateText } from "./gemini";

// This is for testing. The prompt will be changed.
const prompt =
  "You are an assistant. Respond to the user with the utmost respect.";

export function getMessageResponse(message) {
  return generateText(`${prompt}\n\nUser Message: ${message}`);
}
