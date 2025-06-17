'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

interface TaskFormProps {
  onSubmit: (title: string) => Promise<void>;
  isLoading?: boolean;
}

export default function TaskForm({ onSubmit, isLoading = false }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Please enter a task title');
      return;
    }

    if (title.trim().length > 200) {
      setError('Task title must be less than 200 characters');
      return;
    }

    try {
      await onSubmit(title.trim());
      setTitle('');
    } catch (err) {
      setError('Failed to create task. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-700 mb-2">
            Add New Task
          </label>
          <div className="flex gap-3">
            <input
              id="taskTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What needs to be done?"
              className="input-field flex-1"
              disabled={isLoading}
              maxLength={200}
            />
            <button
              type="submit"
              disabled={isLoading || !title.trim()}
              className="btn-primary flex items-center gap-2 px-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="w-4 h-4" />
              {isLoading ? 'Adding...' : 'Add Task'}
            </button>
          </div>
          {error && (
            <p className="text-error-500 text-sm mt-2 animate-fade-in">{error}</p>
          )}
          <p className="text-gray-400 text-xs mt-2">
            {title.length}/200 characters
          </p>
        </div>
      </form>
    </div>
  );
}