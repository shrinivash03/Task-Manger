import { CheckCircle2 } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="text-center py-16 px-4">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
        <CheckCircle2 className="w-8 h-8 text-primary-600" />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        No tasks yet
      </h3>
      
      <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
        Start organizing your life by adding your first task above. 
        Keep track of everything you need to accomplish.
      </p>
      
      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
            <span>Create tasks</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success-400 rounded-full"></div>
            <span>Mark complete</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-warning-400 rounded-full"></div>
            <span>Stay organized</span>
          </div>
        </div>
      </div>
    </div>
  );
}