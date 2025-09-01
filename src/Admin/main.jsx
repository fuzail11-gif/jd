import React, { useState } from "react";
import { Menu, LogOut, Search, FileText, BookOpen, X } from "lucide-react";
import { Link } from "react-router-dom";

const Main = ({children}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (desktop) */}
      <aside className="hidden md:flex w-64 bg-blue-900 text-white flex-col">
        {/* Logo / Icon */}
        <div className="flex items-center justify-center h-16 border-b border-blue-700">
          <Menu className="w-8 h-8" />
          <span className="ml-2 font-bold text-lg">Admin</span>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-4 py-6 space-y-4">
          <Link
            to="/application"
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-700 transition"
          >
            <FileText className="w-5 h-5" />
            <span>Application</span>
          </Link>
          <a
            href="#"
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-700 transition"
          >
            <BookOpen className="w-5 h-5" />
            <span>Course Data</span>
          </a>
        </nav>
      </aside>

      {/* Sidebar (mobile overlay) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setSidebarOpen(false)}
          ></div>

          {/* Sidebar Panel */}
          <aside className="relative w-64 bg-blue-900 text-white flex flex-col z-50">
            <div className="flex items-center justify-between h-16 border-b border-blue-700 px-4">
              <span className="font-bold text-lg">Admin</span>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-4">
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-700 transition"
              >
                <FileText className="w-5 h-5" />
                <span>Application</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-700 transition"
              >
                <BookOpen className="w-5 h-5" />
                <span>Course Data</span>
              </a>
            </nav>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white shadow px-6 h-16">
          {/* Left: Page Title / Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-200"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-800" />
            </button>
            <h1 className="text-xl font-semibold text-gray-800">Admin Panel</h1>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
            </div>

            {/* Logout */}
            <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
       <main className="flex-1 p-6 overflow-y-auto">
        <div className="bg-white p-6 rounded-lg shadow">

           {children}
        </div>
      </main>
      </div>
    </div>
  );
};

export default Main;
