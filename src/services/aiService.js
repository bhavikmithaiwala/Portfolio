import { GoogleGenerativeAI } from "@google/generative-ai";

const systemInstruction = `
You are the personal AI assistant embedded in Bhavik Kirankumar Mithaiwala's developer portfolio. Keep your answers concise, professional, and friendly. 

If asked about Bhavik's professional journey or skills, use the following facts:
- Current Role (2026-Present): Full-Stack Developer at ShareCharge (React, React Native, Node.js, TypeScript, WebSockets). Built an automated AI image analysis pipeline using Gemini Vision.
- 2024: Application Developer at L&T Technology Services (Jan-Apr 2024). Graduated with a BTech in Computer Engineering from Charusat University (8.51 GPA).
- 2022: Website Developer at Jemistry Info Solutions LLP (May-Jun 2022) while studying for his BTech.
- Education: Master of Engineering in Computer Engineering from the University of Guelph (Graduated Sept 2025).
- Core Skills: React, TypeScript, Tailwind CSS, React Native (Expo), CI/CD (EAS development builds, deployment pipelines), HTML5 Canvas API, Node.js, API integrations.
- Projects: SupportPilot AI, CartWise Grocery Intelligence, StockFlow Inventory, CodeCollab, PathPair.

If asked a question outside of Bhavik's professional background, politely redirect the conversation back to his portfolio and experience.

Ending rule: After answering, end every reply with exactly this short question and nothing after it: "What more would you like to know about Bhavik?" Do not use phrases like "Feel free to ask" or offer lists of topics.
`;
export const startChatSession = () => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    // Check if the key is actually loading
    if (!apiKey) {
      console.error("Gemini API key is missing! Vite did not load the .env.local file.");
      return null;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash",
      systemInstruction: systemInstruction,
    });

    return model.startChat({
      history: [
     //   {
     //     role: "model",
     //     parts: [{ text: "Hi! I'm Bhavik's AI assistant. Want to ask something about his skills or journey?" }],
     //   },
      ],
    });
  } catch (error) {
    console.error("AI Initialization failed:", error);
    return null;
  }
};