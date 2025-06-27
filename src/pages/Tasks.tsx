import React from 'react';
import { Plus, Search, Filter, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const tasks = [
  {
    id: 1,
    title: 'Implement user authentication',
    description: 'Set up JWT-based authentication system',
    status: 'In Progress',
    priority: 'High',
    assignee: 'John Doe',
    project: 'E-commerce Platform',
    dueDate: '2024-01-25',
    completed: false
  },
  {
    id: 2,
    title: 'Design product catalog UI',
    description: 'Create responsive product listing and detail pages',
    status: 'Completed',
    priority: 'Medium',
    assignee: 'Jane Smith',
    project: 'E-commerce Platform',
    dueDate: '2024-01-20',
    completed: true
  },
  {
    id: 3,
    title: 'API documentation',
    description: 'Document all REST API endpoints',
    status: 'Todo',
    priority: 'Low',
    assignee: 'Mike Johnson',
    project: 'API Integration',
    dueDate: '2024-02-01',
    completed: false
  },
  {
    id: 4,
    title: 'Mobile responsive testing',
    description: 'Test application on various mobile devices',
    status: 'In Progress',
    priority: 'High',
    assignee: 'Sarah Wilson',
    project: 'Mobile App Redesign',
    dueDate: '2024-01-28',
    completed: false
  }
];

export function Tasks() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Tasks</h2>
          <p className="text-gray-600 mt-1">Track and manage all project tasks</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>New Task</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search tasks..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>

      {/* Tasks List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">All Tasks</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <div key={task.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start space-x-4">
                <button className="mt-1">
                  {task.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                  )}
                </button>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className={`text-sm font-medium ${
                        task.completed ? 'text-gray-500 line-through' : 'text-gray-900'
                      }`}>
                        {task.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        task.priority === 'High' ? 'bg-red-100 text-red-800' :
                        task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {task.priority}
                      </span>
                      
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        task.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        task.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {task.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                    <span>Assigned to {task.assignee}</span>
                    <span>•</span>
                    <span>{task.project}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Due {task.dueDate}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}