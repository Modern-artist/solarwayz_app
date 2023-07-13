import { NextResponse } from "next/server";
import dbConnect from "@/db/db";
import Users from "@/models/Users";

export async function GET() {
  return NextResponse.json({
    status: "success",
    message: "request was executed successfully",
  });
}

// this post request will create a new user
export async function POST(request: Request) {
  const { name, location, pno, email, password } = await request.json();
  dbConnect();
  const user = await Users.create({
    name,
    location,
    pno,
    email,
    password,
    dateCreated: Date.now(),
  });

  return NextResponse.json({
    status: "success",
    message: `request was executed successfully name:${name} email:${email} password:${password}`,
  });
}
