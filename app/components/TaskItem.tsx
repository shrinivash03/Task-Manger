'use client';

import { useState } from 'react';
import { Check, Edit3, Trash2, X, Save } from 'lucide-react';
import { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  onUpdate: (id: string, updates: { title?: string; completed?: boolean }) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  isLoading?: boolean;
}

export default function TaskItem({ task, onUpdate, onDelete, isLoading = false }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [error, setError] = useState('');

  const handleToggleComplete = async () => {
    try {
      await onUpdate(task.id, { completed: !task.completed });
    } catch (err) {
      setError('Failed to update task');
    }
  };

  const handleSaveEdit = async () => {
    setError('');
    
    if (!editTitle.trim()) {
      setError('Task title cannot be empty');
      return;
    }

    if (editTitle.trim().length > 200) {
      setError('Task title must be less than 200 characters');
      return;
    }

    try {
      await onUpdate(task.id, { title: editTitle.trim() });
      setIsEditing(false);
    } catch (err) {
      setError('Failed to update task');
    }
  };

  const handleCancelEdit = () => {
    setEditTitle(task.title);
    setIsEditing(false);
    setError('');
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await onDelete(task.id);
      } catch (err) {
        setError('Failed to delete task');
      }
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="task-card animate-slide-up">
      <div className="flex items-start gap-4">
        {/* Completion Toggle */}
        <button
          onClick={handleToggleComplete}
          disabled={isLoading}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            task.completed
              ? 'bg-success-500 border-success-500 text-white'
              : 'border-gray-300 hover:border-success-400'
          } disabled:opacity-50`}
        >
          {task.completed && <Check className="w-3 h-3" />}
        </button>

        {/* Task Content */}
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <div className="space-y-3">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="input-field w-full"
                maxLength={200}
                autoFocus
              />
              {error && (
                <p className="text-error-500 text-sm animate-fade-in">{error}</p>
              )}
              <div className="flex gap-2">
                <button onClick={handleSaveEdit} className="btn-primary text-sm px-3 py-1">
                  <Save className="w-3 h-3 mr-1" />
                  Save
                </button>
                <button onClick={handleCancelEdit} className="btn-secondary text-sm px-3 py-1">
                  <X className="w-3 h-3 mr-1" />
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3
                className={`text-lg font-medium transition-all duration-200 ${
                  task.completed
                    ? 'text-gray-500 line-through'
                    : 'text-gray-900 hover:text-primary-600'
                }`}
              >
                {task.title}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm text-gray-500">
                  Created: {formatDate(task.createdAt)}
                  {task.updatedAt !== task.createdAt && (
                    <span className="ml-2">• Updated: {formatDate(task.updatedAt)}</span>
                  )}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsEditing(true)}
                    disabled={isLoading}
                    className="p-2 text-gray-400 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-all duration-200 disabled:opacity-50"
                    title="Edit task"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleDelete}
                    disabled={isLoading}
                    className="p-2 text-gray-400 hover:text-error-500 hover:bg-error-50 rounded-lg transition-all duration-200 disabled:opacity-50"
                    title="Delete task"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {error && !isEditing && (
        <p className="text-error-500 text-sm mt-2 animate-fade-in">{error}</p>
      )}
    </div>
  );
}