import axios from "axios";

// NOTE: This public key is temporary
const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
const MODEL_NAME = "gemini-1.5-flash";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

const geminiApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function generateText(prompt) {
  try {
    const response = await geminiApi.post("", {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    });
    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error(
      "Error generating text:",
      error.response ? error.response.data : error.message
    );
    throw error; // Re-throw to handle upstream
  }
}
