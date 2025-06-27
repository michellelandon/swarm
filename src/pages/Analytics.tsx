import React from 'react';
import { TrendingUp, TrendingDown, BarChart3, PieChart } from 'lucide-react';

const metrics = [
  { name: 'Project Completion Rate', value: '87%', change: '+5.2%', trend: 'up' },
  { name: 'Average Task Duration', value: '3.2 days', change: '-0.8 days', trend: 'down' },
  { name: 'Team Productivity', value: '94%', change: '+2.1%', trend: 'up' },
  { name: 'Bug Resolution Time', value: '1.5 hours', change: '-0.3 hours', trend: 'down' },
];

const projectData = [
  { name: 'E-commerce Platform', completed: 75, remaining: 25 },
  { name: 'Mobile App Redesign', completed: 90, remaining: 10 },
  { name: 'API Integration', completed: 25, remaining: 75 },
  { name: 'Database Migration', completed: 60, remaining: 40 },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Analytics</h2>
        <p className="text-gray-600 mt-1">Track performance and productivity metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{metric.value}</p>
              </div>
              <div className={`p-2 rounded-lg ${
                metric.trend === 'up' ? 'bg-green-50' : 'bg-red-50'
              }`}>
                {metric.trend === 'up' ? (
                  <TrendingUp className="w-5 h-5 text-green-600" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-600" />
                )}
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">from last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Progress Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-2 mb-6">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Project Progress</h3>
          </div>
          <div className="space-y-4">
            {projectData.map((project, index) => (
              <div key={index}>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-medium text-gray-900">{project.name}</span>
                  <span className="text-gray-600">{project.completed}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.completed}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Performance */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-2 mb-6">
            <PieChart className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Team Performance</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium text-green-800">High Performers</span>
              <span className="text-green-600 font-bold">65%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="font-medium text-yellow-800">Average Performers</span>
              <span className="text-yellow-600 font-bold">25%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="font-medium text-red-800">Needs Improvement</span>
              <span className="text-red-600 font-bold">10%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { action: 'Project "E-commerce Platform" milestone completed', time: '2 hours ago', user: 'John Doe' },
              { action: 'New team member added to "Mobile App Redesign"', time: '4 hours ago', user: 'Jane Smith' },
              { action: 'Bug fix deployed for "API Integration"', time: '6 hours ago', user: 'Mike Johnson' },
              { action: 'Code review completed for "Database Migration"', time: '8 hours ago', user: 'Sarah Wilson' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">by {activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}