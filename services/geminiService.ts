import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../constants";

// Initialize the Gemini API client
// Note: We use process.env.API_KEY as per the requirements. 
// In a real production app, you might proxy this through a backend to hide the key, 
// but for this SPA generation task, we use the env variable directly.
const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
const ai = apiKey && apiKey !== 'PLACEHOLDER_API_KEY' ? new GoogleGenAI({ apiKey }) : null;

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
  // Fallback responses if API is not configured
  if (!ai) {
    const fallbackResponses: { [key: string]: string } = {
      'skills': `Lucky specializes in backend development with Node.js, Express.js, and databases like MongoDB and PostgreSQL. He has strong experience with AWS, Docker, and API security.`,
      'experience': `Lucky has worked as a Backend Developer Intern at Helium Health, where he optimized APIs and reduced data processing time by 25%. He's currently studying at Vephla University.`,
      'projects': `Lucky has built impressive projects like Safe Anchor (a victim support platform) and EduConnect (school management system), both featuring robust backend architectures with 20+ API endpoints.`,
      'contact': `You can reach Lucky at ${RESUME_DATA.personalInfo.email} or connect with him on LinkedIn at ${RESUME_DATA.personalInfo.linkedin}`,
      'default': `I'd love to tell you more about Lucky's backend engineering experience! Ask me about his skills, projects, or experience. For detailed discussions, contact him at ${RESUME_DATA.personalInfo.email}`
    };

    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('skill')) return fallbackResponses.skills;
    if (lowerMessage.includes('experience') || lowerMessage.includes('work')) return fallbackResponses.experience;
    if (lowerMessage.includes('project')) return fallbackResponses.projects;
    if (lowerMessage.includes('contact') || lowerMessage.includes('email')) return fallbackResponses.contact;
    return fallbackResponses.default;
  }

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
    return "I'm having trouble connecting to my brain right now. Please try again later or contact Lucky directly at " + RESUME_DATA.personalInfo.email;
  }
};
