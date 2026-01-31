import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - LaunchKit AI",
  description: "Manage your businesses and track progress",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">
              🚀 LaunchKit AI
            </div>
            <nav className="flex items-center gap-6">
              <a
                href="/dashboard"
                className="text-gray-700 hover:text-primary transition"
              >
                Dashboard
              </a>
              <a
                href="/dashboard/projects"
                className="text-gray-700 hover:text-primary transition"
              >
                Projects
              </a>
              <a
                href="/dashboard/leads"
                className="text-gray-700 hover:text-primary transition"
              >
                Leads
              </a>
              <a
                href="/dashboard/settings"
                className="text-gray-700 hover:text-primary transition"
              >
                Settings
              </a>
              <button className="text-gray-600 hover:text-red-600 transition">
                Logout
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}