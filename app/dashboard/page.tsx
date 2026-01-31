"use client";

import { useState } from "react";

interface Project {
  id: string;
  name: string;
  status: "planning" | "in_progress" | "launched" | "closed";
  progress: number;
  createdAt: string;
  metrics: {
    leads: number;
    customers: number;
    revenue: number;
  };
}

// Mock data - replace with real API calls
const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    name: "TaskFlow AI",
    status: "launched",
    progress: 100,
    createdAt: "2026-01-20",
    metrics: {
      leads: 180,
      customers: 47,
      revenue: 5000,
    },
  },
  {
    id: "2",
    name: "HealthTrack Pro",
    status: "in_progress",
    progress: 65,
    createdAt: "2026-01-28",
    metrics: {
      leads: 80,
      customers: 3,
      revenue: 600,
    },
  },
];

export default function DashboardPage() {
  const [projects] = useState<Project[]>(MOCK_PROJECTS);

  const getStatusBadge = (status: Project["status"]) => {
    const styles = {
      planning: "bg-blue-100 text-blue-700",
      in_progress: "bg-yellow-100 text-yellow-700",
      launched: "bg-green-100 text-green-700",
      closed: "bg-gray-100 text-gray-700",
    };
    const labels = {
      planning: "Planning",
      in_progress: "In Progress",
      launched: "Launched",
      closed: "Closed",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-semibold ${styles[status]}`}
      >
        {labels[status]}
      </span>
    );
  };

  const totalMetrics = projects.reduce(
    (acc, project) => ({
      leads: acc.leads + project.metrics.leads,
      customers: acc.customers + project.metrics.customers,
      revenue: acc.revenue + project.metrics.revenue,
    }),
    { leads: 0, customers: 0, revenue: 0 }
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Welcome Back! 👋</h1>
        <p className="text-gray-600">
          Here"s what"s happening with your businesses.
        </p>
      </div>

      {/* Overall Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Active Projects</div>
          <div className="text-3xl font-bold text-primary">{projects.length}</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Total Leads</div>
          <div className="text-3xl font-bold text-green-600">
            {totalMetrics.leads}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Total Customers</div>
          <div className="text-3xl font-bold text-blue-600">
            {totalMetrics.customers}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">Total Revenue</div>
          <div className="text-3xl font-bold text-purple-600">
            ${totalMetrics.revenue.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Your Projects</h2>
        <a
          href="/dashboard/projects/new"
          className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          + New Project
        </a>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600">
                  Started {new Date(project.createdAt).toLocaleDateString()}
                </p>
              </div>
              {getStatusBadge(project.status)}
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Progress</span>
                <span className="font-semibold">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {project.metrics.leads}
                </div>
                <div className="text-sm text-gray-600">Leads</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {project.metrics.customers}
                </div>
                <div className="text-sm text-gray-600">Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  ${project.metrics.revenue}
                </div>
                <div className="text-sm text-gray-600">Revenue</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <a
                href={`/dashboard/projects/${project.id}`}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-center font-semibold transition"
              >
                View Details
              </a>
              <a
                href={`/dashboard/projects/${project.id}/leads`}
                className="flex-1 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-center font-semibold transition"
              >
                View Leads
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center border border-gray-200">
          <div className="text-6xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-2">No Projects Yet</h3>
          <p className="text-gray-600 mb-6">
            Ready to launch your first business? Let"s get started.
          </p>
          <a
            href="/dashboard/projects/new"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Create Your First Project
          </a>
        </div>
      )}
    </div>
  );
}