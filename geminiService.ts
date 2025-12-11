import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function explainConcept(concept: string, context: string): Promise<string> {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      You are an expert microbiology tutor.
      The student is studying bacterial structure.
      
      Context: ${context}
      
      Please provide a concise, easy-to-understand explanation of the concept: "${concept}".
      Focus on why it is important medically or structurally.
      Keep it under 3 sentences.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Could not generate explanation.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I couldn't connect to the AI tutor right now.";
  }
}

export async function generateQuizQuestion(topic: string): Promise<{question: string, options: string[], answer: number}> {
    try {
        const model = "gemini-2.5-flash";
        const prompt = `Generate a single multiple-choice question about bacterial ${topic}.`;

        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        question: { type: Type.STRING },
                        options: { 
                            type: Type.ARRAY,
                            items: { type: Type.STRING }
                        },
                        answer: { type: Type.INTEGER, description: "Index of the correct option (0-based)" }
                    },
                    required: ["question", "options", "answer"]
                }
            }
        });

        const text = response.text;
        if (!text) {
             throw new Error("No text in response");
        }
        return JSON.parse(text);
    } catch (e) {
        console.error(e);
        return {
            question: "Error generating quiz.",
            options: ["Try again"],
            answer: 0
        };
    }
}