import { useState } from "react";
import Navbar from "./components/Navbar";
import CourseCard from "./components/CourseCard";
import Dashboard from "./pages/Dashboard";
import coursesData from "./data/courses.json";
import { Plus } from "lucide-react";
import AddCourseModal from "./components/AddCourseModal";

export default function App() {
  const [activeTab, setActiveTab] = useState("catalog");
  const [courses,setCourses] = useState(coursesData);
  const [enrolledIds, setEnrolledIds] = useState(["c1"]);
const [isAddModalOpen, setIsAddModalOpen] = useState(false);

const handleAddCourse = (newCourse) => {
  setCourses((prev) => [newCourse, ...prev]);
};
 const handleToggleEnroll = (course) => {
    if (enrolledIds.includes(course.id)) {
      setEnrolledIds(enrolledIds.filter((id) => id !== course.id));
    } else {
      setEnrolledIds([...enrolledIds, course.id]);
    }
  };

  const enrolledCourses = courses.filter((c) => enrolledIds.includes(c.id));

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1">
        {activeTab === "catalog" && (
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
  <div>
    <h1 className="text-3xl font-extrabold text-white">Explore Courses</h1>
    <p className="text-slate-400 mt-1">
      Advance your engineering and software development career.
    </p>
  </div>

  <button
    onClick={() => setIsAddModalOpen(true)}
    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition shadow-md cursor-pointer"
  >
    <Plus className="w-4 h-4" />
    <span>Create Course</span>
  </button>
</div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onToggleEnroll={handleToggleEnroll}
                  isEnrolled={enrolledIds.includes(course.id)}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === "dashboard" && (
  <Dashboard 
    enrolledCourses={enrolledCourses} 
    onBackToCatalog={() => setActiveTab("catalog")} 
  />
)}

        {activeTab === "login" && (
          <div className="max-w-md mx-auto my-16 p-8 bg-slate-800 border border-slate-700 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Welcome Back</h2>
            <p className="text-slate-400 text-sm text-center mb-6">Enter your details to sign in</p>
            <form onSubmit={(e) => { e.preventDefault(); setActiveTab("dashboard"); }}>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Email</label>
                <input
                  type="email"
                  required
                  placeholder="student@example.com"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium text-white transition shadow-md shadow-indigo-600/30"
              >
                Sign In
              </button>
            </form>
          </div>
        )}
      </main>
      <AddCourseModal
  isOpen={isAddModalOpen}
  onClose={() => setIsAddModalOpen(false)}
  onAddCourse={handleAddCourse}
/>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        EduPulse Learning System • Software Engineering Frontend Prototype
      </footer>
    </div>
  );
}