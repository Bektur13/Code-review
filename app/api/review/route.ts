import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const genAi = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await genAi.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Review this ${body.language} code and return feedback as JSON with fields: bugs, improvements, style, summary. Code: ${body.code}`,
    });
    console.log(body);

    const cleanResponse = await response.text?.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleanResponse);

    return NextResponse.json({ message: "it works" });
  } catch (error) {
    return NextResponse.json({ error: "Somehing went wrong" }, { status: 500 });
  }
}
