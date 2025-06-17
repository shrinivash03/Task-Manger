import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/lib/mongodb";
import Task from "@/app/models/Task";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const { completed } = await req.json();
  const task = await Task.findByIdAndUpdate(params.id, { completed }, { new: true });
  return NextResponse.json(task);
}