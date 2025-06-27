import React from 'react';
import { Plus, Search, Mail, Phone, MoreHorizontal } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Full Stack Developer',
    email: 'john.doe@company.com',
    phone: '+1 (555) 123-4567',
    avatar: 'JD',
    status: 'online',
    projects: 3,
    tasksCompleted: 24
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    email: 'jane.smith@company.com',
    phone: '+1 (555) 234-5678',
    avatar: 'JS',
    status: 'online',
    projects: 2,
    tasksCompleted: 18
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Backend Developer',
    email: 'mike.johnson@company.com',
    phone: '+1 (555) 345-6789',
    avatar: 'MJ',
    status: 'away',
    projects: 4,
    tasksCompleted: 31
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    role: 'Frontend Developer',
    email: 'sarah.wilson@company.com',
    phone: '+1 (555) 456-7890',
    avatar: 'SW',
    status: 'offline',
    projects: 2,
    tasksCompleted: 15
  }
];

export function Team() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Team</h2>
          <p className="text-gray-600 mt-1">Manage your development team members</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Member</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search team members..."
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                    {member.avatar}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                    member.status === 'online' ? 'bg-green-500' :
                    member.status === 'away' ? 'bg-yellow-500' :
                    'bg-gray-400'
                  }`}></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="truncate">{member.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{member.phone}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between text-sm">
                <div className="text-center">
                  <div className="font-semibold text-gray-900">{member.projects}</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">{member.tasksCompleted}</div>
                  <div className="text-gray-600">Tasks Done</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}