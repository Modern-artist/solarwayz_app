import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "success",
    message: "request was executed successfully",
  });
}

// api for login function
export async function POST(request: Request) {
  const { username, password } = await request.json();
  return NextResponse.json({
    status: "success",
    message: "request was executed successfully",
  });
}
