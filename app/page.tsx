"use client";
import { useEffect, useState } from "react";

interface Task {
  _id: string;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    setLoading(true);
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!task.trim()) return;
    setLoading(true);
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: task }),
    });
    setTask("");
    fetchTasks();
  };

  const markDone = async (id: string, completed: boolean) => {
    setLoading(true);
    await fetch(`/api/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    });
    fetchTasks();
  };

  const deleteTask = async (id: string) => {
    setLoading(true);
    await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });
    fetchTasks();
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <div className="min-h-screen bg-[#f6f8fa] flex items-center justify-center py-8">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-6">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 rounded-full p-2">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#3b82f6" /><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="text-2xl font-bold text-gray-800">TaskFlow Pro</span>
          </div>
          <span className="text-gray-400 font-medium">{new Date().toLocaleDateString()}</span>
        </div>
        <div className="bg-[#f6f8fa] rounded-xl p-5 mb-6">
          <div className="text-lg font-semibold mb-2">Add New Task</div>
          <div className="flex items-center gap-2">
            <input
              className="flex-1 border border-gray-200 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Add new task..."
              value={task}
              maxLength={100}
              onChange={(e) => setTask(e.target.value)}
              disabled={loading}
            />
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition disabled:opacity-50"
              onClick={addTask}
              disabled={!task.trim() || loading}
            >
              Add Task
            </button>
          </div>
          <div className="text-xs text-gray-400 mt-1 text-right">{task.length}/100</div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-gray-500 text-sm">Total Tasks</div>
            <div className="text-2xl font-bold text-blue-600">{tasks.length}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-gray-500 text-sm">Completed</div>
            <div className="text-2xl font-bold text-green-600">{completedCount}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-gray-500 text-sm">Pending</div>
            <div className="text-2xl font-bold text-yellow-500">{pendingCount}</div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="text-lg font-semibold">Your Tasks</div>
          <button
            className="text-gray-400 hover:text-blue-500 transition"
            onClick={fetchTasks}
            title="Refresh"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M4 4v5h.582M20 20v-5h-.581M5.07 19A9 9 0 1 0 6 6.26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <div className="space-y-3">
          {tasks.length === 0 && (
            <div className="text-gray-400 text-center py-6">No tasks yet.</div>
          )}
          {tasks.map((t) => (
            <div key={t._id} className="bg-white rounded-lg shadow flex items-center justify-between px-4 py-3">
              <span className={`text-base ${t.completed ? "line-through text-gray-400" : "text-gray-800"}`}>
                {t.text}
              </span>
              <div className="flex gap-2">
                <button
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    t.completed
                      ? "bg-green-100 text-green-600 cursor-default"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                  onClick={() => !t.completed && markDone(t._id, true)}
                  disabled={t.completed || loading}
                >
                  {t.completed ? "Completed" : "Mark Done"}
                </button>
                {t.completed && (
                  <button
                    className="px-4 py-2 rounded-lg font-semibold bg-red-500 text-white hover:bg-red-600 transition"
                    onClick={() => deleteTask(t._id)}
                    disabled={loading}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}