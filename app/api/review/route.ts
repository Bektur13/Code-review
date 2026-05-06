import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const genAi = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // const response = await genAi.models.generateContent({
    //   model: "gemini-3.1-pro",
    //   contents: `Review this ${body.language} code and return feedback as JSON with fields: bugs, improvements, style, summary. Code: ${body.code}`,
    // });
    // console.log(body);

    const cleanResponse = response.text?.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleanResponse || "");

    return NextResponse.json(parsed);
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Somehing went wrong" }, { status: 500 });
  }
}
