import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "success",
    message: "request was executed successfully",
  });
}

// this post request will create a new user
export async function POST(request: Request) {
  const { name, location, pno, email, password } = await request.json();
  return NextResponse.json({
    status: "success",
    message: "request was executed successfully",
  });
}
