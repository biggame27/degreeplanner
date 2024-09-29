import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
  try {
    const model = genAI.getGenerativeModel({model: "gemini-pro"})
    const data = await req.json()
    const prompt = "You are computer science advisor at Texas A&M, I'm registering for courses, can you give me advice? Make it snappy though: two to three sentences at most. Please, don't use any bullet points either." +data.body // concatenate text for string afterwards
    const result = await model.generateContent(prompt);
    const out = await result.response.text()

    return NextResponse.json({output: out})
  } catch (error) {
    console.error(error);
  }
}

// HEY HARRISON! You're currently on branch: stopitdumbai. This branch was made to shorten the message of the AI chatbot messages.