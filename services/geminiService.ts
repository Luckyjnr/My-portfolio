import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../constants";

// Initialize the Gemini API client
// Note: We use process.env.API_KEY as per the requirements. 
// In a real production app, you might proxy this through a backend to hide the key, 
// but for this SPA generation task, we use the env variable directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Lucky Noah's professional portfolio website. 
Your goal is to answer questions about Lucky's experience, skills, and projects based STRICTLY on the provided resume context.

Context:
Name: ${RESUME_DATA.personalInfo.name}
Title: ${RESUME_DATA.personalInfo.title}
Summary: ${RESUME_DATA.summary}
Skills: ${RESUME_DATA.skills.map(s => `${s.category}: ${s.items.join(', ')}`).join('; ')}
Experience: ${JSON.stringify(RESUME_DATA.experience)}
Projects: ${JSON.stringify(RESUME_DATA.projects)}
Education: ${JSON.stringify(RESUME_DATA.education)}

Guidelines:
1. Be professional, concise, and enthusiastic.
2. Highlight his achievements (e.g., 25% reduction in data processing time).
3. If asked about contact info, provide the email: ${RESUME_DATA.personalInfo.email}.
4. If asked something not in the resume, politely say you don't have that information but suggest contacting him directly.
5. Keep responses short (under 100 words) unless detailed explanation is requested.
`;

export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', text: string}[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later or contact Lucky directly!";
  }
};
