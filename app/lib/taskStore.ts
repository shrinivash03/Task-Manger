import { Task } from '../types/task';


class TaskStore {
  private tasks: Map<string, Task> = new Map();

  getAllTasks(): Task[] {
    return Array.from(this.tasks.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.get(id);
  }

  createTask(title: string): Task {
    const id = this.generateId();
    const now = new Date().toISOString();
    
    const task: Task = {
      id,
      title: title.trim(),
      completed: false,
      createdAt: now,
      updatedAt: now,
    };

    this.tasks.set(id, task);
    return task;
  }

  updateTask(id: string, updates: Partial<Pick<Task, 'title' | 'completed'>>): Task | null {
    const task = this.tasks.get(id);
    if (!task) return null;

    const updatedTask: Task = {
      ...task,
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    if (updates.title) {
      updatedTask.title = updates.title.trim();
    }

    this.tasks.set(id, updatedTask);
    return updatedTask;
  }

  deleteTask(id: string): boolean {
    return this.tasks.delete(id);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}

// Singleton instance
export const taskStore = new TaskStore();