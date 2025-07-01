import axios from "axios";

const API_KEY = "YOUR_GEMINI_API_KEY"; // Replace with your actual API key
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

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
  }
}
