import { BookOpen, User, Search } from "lucide-react";

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800 px-6 py-4 flex items-center justify-between text-white">
      <div 
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setActiveTab("catalog")}
      >
        <BookOpen className="w-7 h-7 text-indigo-400" />
        <span className="font-bold text-xl tracking-tight">EduPulse</span>
      </div>

      <div className="hidden md:flex items-center bg-slate-800 rounded-lg px-3 py-1.5 border border-slate-700 w-80">
        <Search className="w-4 h-4 text-slate-400 mr-2" />
        <input
          type="text"
          placeholder="Search courses..."
          className="bg-transparent border-none outline-none text-sm w-full text-slate-200 placeholder-slate-500"
        />
      </div>

      <div className="flex items-center gap-4 text-sm font-medium">
        <button
          onClick={() => setActiveTab("catalog")}
          className={`transition ${activeTab === "catalog" ? "text-indigo-400 font-semibold" : "text-slate-300 hover:text-white"}`}
        >
          Catalog
        </button>
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`transition ${activeTab === "dashboard" ? "text-indigo-400 font-semibold" : "text-slate-300 hover:text-white"}`}
        >
          My Dashboard
        </button>
        <button
          onClick={() => setActiveTab("login")}
          className="flex items-center gap-1.5 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-medium transition"
        >
          <User className="w-4 h-4" />
          <span>Sign In</span>
        </button>
      </div>
    </nav>
  );
}