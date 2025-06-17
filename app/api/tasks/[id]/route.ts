import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Task from "../../../models/Task";      

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  try {
    const { completed } = await request.json();
    const updatedTask = await Task.findByIdAndUpdate(
      params.id,
      { completed },
      { new: true }
    );
    return NextResponse.json(updatedTask, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update task" }, { status: 500 });
  }
}



export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  try {
    await Task.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Task deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete task" }, { status: 500 });
  }
}