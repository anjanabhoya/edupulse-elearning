import { Award, BookOpen, Clock, ArrowLeft } from "lucide-react";

export default function Dashboard({ enrolledCourses, onBackToCatalog }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Back Button */}
      <button
        onClick={onBackToCatalog}
        className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 font-medium mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Course Catalog
      </button>

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white">Student Dashboard</h1>
        <p className="text-slate-400 mt-1">Track your active courses and learning progress.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-800/90 border border-slate-700/60 p-5 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-lg">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{enrolledCourses.length}</div>
            <div className="text-xs text-slate-400">Enrolled Courses</div>
          </div>
        </div>

        <div className="bg-slate-800/90 border border-slate-700/60 p-5 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-amber-600/20 text-amber-400 rounded-lg">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">12.5 hrs</div>
            <div className="text-xs text-slate-400">Hours Learned</div>
          </div>
        </div>

        <div className="bg-slate-800/90 border border-slate-700/60 p-5 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-emerald-600/20 text-emerald-400 rounded-lg">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">1</div>
            <div className="text-xs text-slate-400">Certificates Earned</div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-white mb-4">My Enrolled Courses</h2>

      {enrolledCourses.length === 0 ? (
        <div className="bg-slate-800/40 border border-dashed border-slate-700 rounded-xl p-8 text-center text-slate-400">
          You haven't enrolled in any courses yet.
          <div className="mt-3">
            <button
              onClick={onBackToCatalog}
              className="text-indigo-400 hover:underline text-sm font-medium"
            >
              Browse the catalog to get started →
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-800/90 border border-slate-700/60 rounded-xl p-5 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                  {course.category}
                </span>
                <h3 className="font-bold text-white mt-2 text-lg">{course.title}</h3>
                <p className="text-xs text-slate-400 mt-1">Instructor: {course.instructor}</p>

                <div className="mt-4">
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Course Progress</span>
                    <span className="font-semibold text-indigo-400">{course.progress || 35}%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-500 h-full rounded-full transition-all"
                      style={{ width: `${course.progress || 35}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <button className="mt-5 w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition">
                Continue Learning
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}