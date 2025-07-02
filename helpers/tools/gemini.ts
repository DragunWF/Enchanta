import axios, { AxiosError } from "axios";

/*
   Preferred Gemini Models:
   - gemini-2.0-flash-lite
   - gemini-1.5-flash
*/

// NOTE: This public key is temporary
const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
const MODEL_NAME = "gemini-2.0-flash-lite";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

// Define the expected response structure
interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

const geminiApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function generateText(prompt: string): Promise<string> {
  try {
    const response = await geminiApi.post<GeminiResponse>("", {
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
    // Type guard to check if it's an Axios error
    if (axios.isAxiosError(error)) {
      console.error(
        "Error generating text:",
        error.response ? error.response.data : error.message
      );
    } else {
      // Handle non-Axios errors
      console.error("Unexpected error:", error);
    }
    throw error; // Re-throw to handle upstream
  }
}
