import {createOpenAI} from "@ai-sdk/openai";
import {streamText} from "ai";
export async function POST(req:Request){
    
        const { messages } = await req.json();
    
        const groqClient = createOpenAI({
          baseURL: 'https://api.groq.com/openai/v1',
          apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
        });
    
        const result = await streamText({
          model: groqClient('llama-3.1-8b-instant'),
          messages,
        });
    
        const stream = result.toAIStream(); 
    
        return new Response(stream, {
          headers: {
            "Content-Type": "text/plain",
          },
        });
      
    }